import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { WIDGET_STATUS } from "@/constants";
import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { useCreateReport } from "@/hooks/connections/useCreateReport";
import { useGetConnectionsMetadata } from "@/hooks/connections/useGetConnectionsMetadata";
import { useGetPanelById } from "@/hooks/panels/useGetPanelById";
import { useAlert } from "@/hooks/useAlert";
import { useGetWidgetsByPanelId } from "@/hooks/widgets/useGetWidgetsByPanelId";
import { useManageWidgets } from "@/hooks/widgets/useManageWidgets";
import { isAdminUser } from "@/utils/checkUserRole";
import { getWidgetFormParams } from "@/utils/getWidgetFormParams";
import { isReportCreationRequired } from "@/utils/isReportCreationRequired";

const useActions = () => {
  const { panelId } = useParams();
  const { user } = useAuth();
  const alert = useAlert();

  const [widgets, setWidgets] = useState([]);
  const [removedWidgets, setRemovedWidgets] = useState([]);
  const [currWidget, setCurrWidget] = useState(undefined);
  const [widgetMenuIsOpen, setWidgetMenuIsOpen] = useState(false);
  const [currConnectionType, setCurrConnectionType] = useState("");

  const queryToGetPanelDetail = useGetPanelById({ id: panelId });

  const queryToGetWidgets = useGetWidgetsByPanelId({
    id: panelId,
    enabled:
      !widgets.length ||
      widgets.every(({ status }) => status === WIDGET_STATUS.SAVED),
  });
  const { data: widgetsResponse } = queryToGetWidgets;

  const queryToGetConnectionsMetadata = useGetConnectionsMetadata({
    refetchOnWindowFocus: false,
  });
  const { data: connectionsMetadata } = queryToGetConnectionsMetadata;

  const reportCreationMutation = useCreateReport();

  const widgetManagementMutation = useManageWidgets();

  const toggleWidgetMenu = () => setWidgetMenuIsOpen((prevState) => !prevState);
  const onClickEditWidgetOpt = (idx) => {
    const widget = widgets[idx];
    setCurrWidget({ idx, ...widget });

    const {
      report: { type: typeConnection },
    } = widget;
    setCurrConnectionType(typeConnection);

    toggleWidgetMenu();
  };
  const onClickDeleteWidgetOpt = (idx) => {
    const widgetToRemove = widgets[idx];

    if (widgetToRemove.status !== WIDGET_STATUS.PENDING_TO_SAVE) {
      // only the ones that will be removed from the db
      setRemovedWidgets((prevState) => [...prevState, widgetToRemove]);
    }

    setWidgets((prevState) =>
      prevState.filter((_, currIdx) => currIdx !== idx)
    );

    alert.success(COPY["panels.detail.widget.delete.success"]);
  };
  const onLayoutChange = (newLayout) => {
    setWidgets((prevState) =>
      prevState.map((widget, currIdx) => {
        const newCurrLayout = newLayout[currIdx];

        const layoutHasChanged = [
          widget.layout.x !== newCurrLayout.x,
          widget.layout.y !== newCurrLayout.y,
          widget.layout.w !== newCurrLayout.w,
          widget.layout.h !== newCurrLayout.h,
        ].includes(true);

        const updateStatus =
          layoutHasChanged && widget.status === WIDGET_STATUS.SAVED;

        return {
          ...widget,
          ...(updateStatus && { status: WIDGET_STATUS.PENDING_TO_UPDATE }),
          layout: newCurrLayout,
        };
      })
    );
  };
  const saveChanges = () => {
    const { save, update } = widgets.reduce(
      (acum, curr) => {
        switch (curr.status) {
          case WIDGET_STATUS.PENDING_TO_SAVE:
            return {
              ...acum,
              save: [...acum.save, curr],
            };
          case WIDGET_STATUS.PENDING_TO_UPDATE:
            return {
              ...acum,
              update: [...acum.update, curr],
            };
          default:
            return acum;
        }
      },
      { save: [], update: [] }
    );

    const params = { save, update, remove: removedWidgets };

    widgetManagementMutation.mutate(params, {
      onSuccess: () => alert.success(COPY["panels.detail.save.success"]),
      onError: (err) => alert.error(err.message),
    });
  };
  const onSubmit = async (values, action) => {
    toggleWidgetMenu();

    let report = currWidget?.report;
    if (isReportCreationRequired(values, currWidget)) {
      const { selector, metricName, dimensionName, timespan, filters } = values;

      try {
        report = (
          await reportCreationMutation.mutateAsync({
            selector,
            metricName,
            dimensionName,
            timespan,
            filters,
          })
        ).data;
      } catch (err) {
        alert.error(err.message);
      }
    }

    if (action === "create") {
      const newWidget = {
        ...values,
        report,
        layout: { x: 0, y: 0, w: 3, h: 1 },
        status: WIDGET_STATUS.PENDING_TO_SAVE,
      };

      setWidgets((prevState) => [...prevState, newWidget]);
    } else if (action === "update") {
      const { _id, layout, status } = currWidget;

      const editedWidget = {
        ...values,
        ...(_id && { _id }),
        report,
        layout,
        status:
          status === WIDGET_STATUS.PENDING_TO_SAVE
            ? WIDGET_STATUS.PENDING_TO_SAVE
            : WIDGET_STATUS.PENDING_TO_UPDATE,
      };

      setWidgets((prevState) =>
        prevState.map((w, currIdx) =>
          currIdx === currWidget.idx ? editedWidget : w
        )
      );
    }

    alert.success(COPY[`panels.detail.widget.${action}.success`]);
  };

  const widgetFormParams = getWidgetFormParams({
    panelId,
    currConnectionType,
    connectionsMetadata,
    onSubmit,
    currWidget,
  });

  const isLoading = [
    queryToGetPanelDetail.isLoading,
    queryToGetConnectionsMetadata.isLoading,
    queryToGetWidgets.isLoading,
  ].includes(true);

  const currentUserIsAdmin = isAdminUser(user);
  const layout = widgets.map((widget, idx) => ({
    ...widget.layout,
    i: `widget_${idx.toString()}`,
    static: !currentUserIsAdmin,
  }));

  useEffect(() => {
    if (widgetsResponse) {
      setWidgets(
        widgetsResponse.map((widget) => ({
          ...widget,
          status: WIDGET_STATUS.SAVED,
        }))
      );
    }
  }, [widgetsResponse]);

  useEffect(() => {
    if (!widgetMenuIsOpen) {
      setCurrConnectionType("");
      setCurrWidget(undefined);
    }
  }, [widgetMenuIsOpen]);

  return {
    widgets,
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    panel: queryToGetPanelDetail.data,
    isCreatingReport: reportCreationMutation.isLoading,
    isSavingChanges: widgetManagementMutation.isLoading,
    toggleWidgetMenu,
    onClickEditWidgetOpt,
    onClickDeleteWidgetOpt,
    onLayoutChange,
    saveChanges,
    widgetFormParams,
    isLoading,
    layout,
  };
};

export default useActions;

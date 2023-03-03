import { useState, useEffect } from "react";

import { WIDGET_STATUS } from "@/constants";
import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { useCreateReport } from "@/hooks/connections/useCreateReport";
import { useAlert } from "@/hooks/useAlert";
import { isAdminUser } from "@/utils/checkUserRole";
import { getWidgetFormParams } from "@/utils/getWidgetFormParams";
import { isReportCreationRequired } from "@/utils/isReportCreationRequired";

import { useGetWidgetsByPanelId } from "../useGetWidgetsByPanelId";

export const usePanelWidgets = ({ panelId, connectionsMetadata }) => {
  const alert = useAlert();
  const { user } = useAuth();

  const [widgets, setWidgets] = useState([]);
  const [currWidget, setCurrWidget] = useState(undefined);
  const [widgetMenuIsOpen, setWidgetMenuIsOpen] = useState(false);
  const [currConnectionType, setCurrConnectionType] = useState("");

  const queryToGetWidgets = useGetWidgetsByPanelId({
    id: panelId,
    staleTime: Infinity,
  });
  const { data: widgetsResponse } = queryToGetWidgets;

  const reportCreationMutation = useCreateReport();

  const toggleWidgetMenu = () => setWidgetMenuIsOpen((prevState) => !prevState);
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
      } catch (e) {
        alert.error(e.message);
      }
    }

    if (action === "create") {
      const newWidget = {
        ...values,
        report,
        layout: { x: 0, y: 0, w: 4, h: 4 },
        status: WIDGET_STATUS.PENDING_TO_SAVE,
      };

      setWidgets((prevState) => [...prevState, newWidget]);
    } else if (action === "update") {
      const { layout, status } = currWidget;

      const editedWidget = {
        ...values,
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
    // TODO: Add deleted widget to a state to delete it later in the db

    setWidgets((prevState) =>
      prevState.filter((_, currIdx) => currIdx !== idx)
    );

    alert.success(COPY["panels.detail.widget.delete.success"]);
  };
  const onLayoutChange = (newLayout) => {
    // TODO: Update the status of the widget if its layout changes

    setWidgets((prevState) =>
      prevState.map((widget, currIdx) => ({
        ...widget,
        layout: newLayout[currIdx],
      }))
    );
  };

  const widgetFormParams = getWidgetFormParams({
    panelId,
    currConnectionType,
    connectionsMetadata,
    onSubmit,
    currWidget,
  });
  const currentUserIsAdmin = isAdminUser(user);

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
    layout: widgets.map(({ layout }) => ({
      ...layout,
      static: !currentUserIsAdmin,
    })),
    onLayoutChange,
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    isGettingWidgets: queryToGetWidgets.isLoading,
    isCreatingReport: reportCreationMutation.isLoading,
    widgetFormParams,
    toggleWidgetMenu,
    onClickEditWidgetOpt,
    onClickDeleteWidgetOpt,
  };
};

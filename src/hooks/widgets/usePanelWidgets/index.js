import { useState, useEffect } from "react";

import { COPY } from "@/copy";
import { useCreateReport } from "@/hooks/connections/useCreateReport";
import { useAlert } from "@/hooks/useAlert";
import { getWidgetFormParams } from "@/utils/getWidgetFormParams";

import { useGetWidgetsByPanelId } from "../useGetWidgetsByPanelId";

export const usePanelWidgets = ({ panelId, connectionsMetadata }) => {
  const alert = useAlert();

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
  const onSubmit = (values, action) => {
    toggleWidgetMenu();

    const { selector, metricName, dimensionName, timespan, filters } = values;

    reportCreationMutation.mutate(
      { selector, metricName, dimensionName, timespan, filters },
      {
        onSuccess: ({ data: report }) => {
          if (action === "create") {
            const newWidget = {
              ...values,
              report,
              layout: {
                x: 0,
                y: 0,
                w: 4,
                h: 4,
              },
              status: "pendingToSave",
            };

            setWidgets((prevState) => [...prevState, newWidget]);
          } else if (action === "update") {
            const { layout, status } = currWidget;

            const editedWidget = {
              ...values,
              report,
              layout,
              status:
                status === "pendingToSave"
                  ? "pendingToSave"
                  : "pendingToUpdate",
            };

            setWidgets((prevState) =>
              prevState.map((w, currIdx) =>
                currIdx === currWidget.idx ? editedWidget : w
              )
            );
          }

          alert.success(COPY[`panels.detail.widget.${action}.success`]);
        },
      }
    );
  };
  const onClickEditWidgetOpt = (idx) => {
    const widget = widgets.find((_, currIdx) => currIdx === idx);
    setCurrWidget({ idx, ...widget });

    const {
      report: { type: typeConnection },
    } = widget;
    setCurrConnectionType(typeConnection);

    toggleWidgetMenu();
  };
  const onClickDeleteWidgetOpt = (idx) => {
    setWidgets((prevState) =>
      prevState.filter((_, currIdx) => currIdx !== idx)
    );

    alert.success(COPY["panels.detail.widget.delete.success"]);
  };
  const onLayoutChange = (newLayout) =>
    setWidgets((prevState) =>
      prevState.map((w, currIdx) => ({ ...w, layout: newLayout[currIdx] }))
    );

  const widgetFormParams = getWidgetFormParams({
    panelId,
    currConnectionType,
    connectionsMetadata,
    onSubmit,
    currWidget,
  });

  useEffect(() => {
    if (widgetsResponse) {
      setWidgets(
        widgetsResponse.map((widget) => ({ ...widget, status: "saved" }))
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
    layout: widgets.map(({ layout }) => layout),
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

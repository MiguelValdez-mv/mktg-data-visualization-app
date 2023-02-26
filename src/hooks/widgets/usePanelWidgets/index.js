import { useState, useEffect } from "react";

import { COPY } from "@/copy";
import { useCreateReport } from "@/hooks/connections/useCreateReport";
import { useAlert } from "@/hooks/useAlert";
import { getWidgetFormParams } from "@/utils/getWidgetFormParams";

import { useGetWidgetsByPanelId } from "../useGetWidgetsByPanelId";

export const usePanelWidgets = ({ panelId, connectionsMetadata }) => {
  const alert = useAlert();

  const [widgets, setWidgets] = useState([]);
  const [layout, setLayout] = useState([]);
  const [widgetMenuIsOpen, setWidgetMenuIsOpen] = useState(false);
  const [currConnectionType, setCurrConnectionType] = useState("");

  const queryToGetWidgets = useGetWidgetsByPanelId({
    id: panelId,
    staleTime: Infinity,
  });
  const { data: widgetsResponse } = queryToGetWidgets;

  const reportCreationMutation = useCreateReport();

  const toggleWidgetMenu = () => setWidgetMenuIsOpen((prev) => !prev);
  const createWidget = (widget) => {
    const { selector, metricName, dimensionName, timespan, filters } = widget;

    reportCreationMutation.mutate(
      { selector, metricName, dimensionName, timespan, filters },
      {
        onSuccess: ({ data: report }) => {
          setWidgets((prev) => [
            ...prev,
            { ...widget, report, status: "pendingToSave" },
          ]);

          alert.success(COPY["panels.detail.widgetCreation.success"]);
        },
      }
    );
  };

  const widgetFormParams = getWidgetFormParams({
    panelId,
    currConnectionType,
    connectionsMetadata,
    createWidget,
    toggleWidgetMenu,
  });

  useEffect(() => {
    if (widgetsResponse) {
      setWidgets(
        widgetsResponse.map((widget) => ({ ...widget, status: "saved" }))
      );

      setLayout(widgetsResponse.map((widget) => widget.layout));
    }
  }, [widgetsResponse]);

  useEffect(() => {
    if (!widgetMenuIsOpen) setCurrConnectionType("");
  }, [widgetMenuIsOpen]);

  return {
    widgets,
    layout,
    setLayout,
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    isGettingWidgets: queryToGetWidgets.isLoading,
    widgetFormParams,
    toggleWidgetMenu,
  };
};

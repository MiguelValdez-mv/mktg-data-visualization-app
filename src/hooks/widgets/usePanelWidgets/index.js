import { useState, useEffect } from "react";

import { getWidgetFormParams } from "@/utils/getWidgetFormParams";

import { useGetWidgetsByPanelId } from "../useGetWidgetsByPanelId";

export const usePanelWidgets = ({ panelId, connectionsMetadata }) => {
  const [widgets, setWidgets] = useState([]);
  const [widgetMenuIsOpen, setWidgetMenuIsOpen] = useState(false);
  const [currConnectionType, setCurrConnectionType] = useState("");

  const queryToGetWidgets = useGetWidgetsByPanelId({
    id: panelId,
    select: ({ data }) =>
      data.map((widget) => ({ ...widget, status: "saved" })),
    onSuccess: setWidgets,
  });

  const toggleWidgetMenu = () => setWidgetMenuIsOpen((prev) => !prev);
  const createWidget = () => {};

  const widgetFormParams = getWidgetFormParams({
    panelId,
    currConnectionType,
    connectionsMetadata,
    createWidget,
  });

  useEffect(() => {
    if (!widgetMenuIsOpen) setCurrConnectionType("");
  }, [widgetMenuIsOpen]);

  return {
    widgets,
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    isGettingWidgets: queryToGetWidgets.isLoading,
    widgetFormParams,
    toggleWidgetMenu,
  };
};

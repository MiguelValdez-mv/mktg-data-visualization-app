import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGetConnectionsMetadata } from "@/hooks/connections/useGetConnectionsMetadata";
import { useGetPanelById } from "@/hooks/panels/useGetPanelById";
import { getWidgetFormParams } from "@/utils/getWidgetFormParams";

const useActions = () => {
  const { panelId } = useParams();

  const [widgetMenuIsOpen, setWidgetMenuIsOpen] = useState(false);
  const [currConnectionType, setCurrConnectionType] = useState("");

  const queryToGetPanelDetail = useGetPanelById({ id: panelId });
  const queryToGetConnectionsMetadata = useGetConnectionsMetadata({
    refetchOnWindowFocus: false,
  });

  const widgetFormParams = getWidgetFormParams({
    panelId,
    currConnectionType,
    connectionsMetadata: queryToGetConnectionsMetadata.data,
    createWidget: () => {},
  });

  const toggleWidgetMenu = () => setWidgetMenuIsOpen((prev) => !prev);

  useEffect(() => {
    if (!widgetMenuIsOpen) setCurrConnectionType("");
  }, [widgetMenuIsOpen]);

  return {
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    isLoading:
      queryToGetPanelDetail.isLoading ||
      queryToGetConnectionsMetadata.isLoading,
    panel: queryToGetPanelDetail.data,
    widgetFormParams,
    toggleWidgetMenu,
  };
};

export default useActions;

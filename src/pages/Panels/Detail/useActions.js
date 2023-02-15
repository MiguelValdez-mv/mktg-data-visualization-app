import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGetPanelById } from "@/hooks/panels/useGetPanelById";

const useActions = () => {
  const { panelId } = useParams();
  const [widgetMenuIsOpen, setWidgetMenuIsOpen] = useState(false);
  const [connectionType, setConnectionType] = useState("");

  const queryToGetPanelDetail = useGetPanelById({ id: panelId });

  const openWidgetMenu = () => setWidgetMenuIsOpen(true);
  const closeWidgetMenu = () => setWidgetMenuIsOpen(false);

  useEffect(() => {
    if (!widgetMenuIsOpen) setConnectionType("");
  }, [widgetMenuIsOpen]);

  return {
    widgetMenuIsOpen,
    connectionType,
    setConnectionType,
    isLoading: queryToGetPanelDetail.isLoading,
    panel: queryToGetPanelDetail.data,
    openWidgetMenu,
    closeWidgetMenu,
  };
};

export default useActions;

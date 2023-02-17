import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { CHARTS, TIMESPANS } from "@/constants";
import { useGetConnections } from "@/hooks/connections/useGetConnections";
import { useGetPanelById } from "@/hooks/panels/useGetPanelById";

const useActions = () => {
  const { panelId } = useParams();
  const [widgetMenuIsOpen, setWidgetMenuIsOpen] = useState(false);
  const [selectedConnectionType, setSelectedConnectionType] = useState("");

  const queryToGetPanelDetail = useGetPanelById({ id: panelId });
  const queryToGetConnections = useGetConnections();

  const [defaultChart] = CHARTS;
  const [defaultTimespan] = TIMESPANS;
  const initialValues = {
    chart: defaultChart,
    timespan: defaultTimespan,
    title: "",
  };
  const noConnections = useMemo(
    () =>
      !(queryToGetConnections.data ?? []).some(
        (c) => c.type === selectedConnectionType
      ),
    [selectedConnectionType]
  );

  const openWidgetMenu = () => setWidgetMenuIsOpen(true);
  const closeWidgetMenu = () => setWidgetMenuIsOpen(false);

  useEffect(() => {
    if (!widgetMenuIsOpen) setSelectedConnectionType("");
  }, [widgetMenuIsOpen]);

  return {
    widgetMenuIsOpen,
    selectedConnectionType,
    setSelectedConnectionType,
    isLoading:
      queryToGetPanelDetail.isLoading || queryToGetConnections.isLoading,
    panel: queryToGetPanelDetail.data,
    initialValues,
    noConnections,
    openWidgetMenu,
    closeWidgetMenu,
  };
};

export default useActions;

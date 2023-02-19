import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { useGetConnectionsMetadata } from "@/hooks/connections/useGetConnectionsMetadata";
import { useGetPanelById } from "@/hooks/panels/useGetPanelById";

const useActions = () => {
  const { panelId } = useParams();

  const [widgetMenuIsOpen, setWidgetMenuIsOpen] = useState(false);
  const [currConnectionType, setCurrConnectionType] = useState("");

  const queryToGetPanelDetail = useGetPanelById({ id: panelId });

  const queryToGetCnxsMetadata = useGetConnectionsMetadata();
  const { data: cnxsMetadata = {} } = queryToGetCnxsMetadata;

  const currCnxMetadata = cnxsMetadata[currConnectionType];
  const noSelectors = useMemo(
    () => !currCnxMetadata?.selectors?.length,
    [currConnectionType]
  );

  const toggleWidgetMenu = () => setWidgetMenuIsOpen((prev) => !prev);

  useEffect(() => {
    if (!widgetMenuIsOpen) setCurrConnectionType("");
  }, [widgetMenuIsOpen]);

  return {
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    isLoading:
      queryToGetPanelDetail.isLoading || queryToGetCnxsMetadata.isLoading,
    panel: queryToGetPanelDetail.data,
    noSelectors,
    toggleWidgetMenu,
  };
};

export default useActions;

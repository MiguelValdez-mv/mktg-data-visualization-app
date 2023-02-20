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
  const { data: connectionsMetadata = {} } = queryToGetConnectionsMetadata;

  const {
    selectors,
    metrics,
    dimensions,
    initialValues: widgetFormInitialValues,
    handleSubmit: handleWidgetFormSubmit,
  } = getWidgetFormParams({
    currConnectionType,
    connectionsMetadata,
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
    selectors,
    metrics,
    dimensions,
    widgetFormInitialValues,
    handleWidgetFormSubmit,
    toggleWidgetMenu,
  };
};

export default useActions;

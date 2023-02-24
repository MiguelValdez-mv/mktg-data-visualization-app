import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { COPY } from "@/copy";
import { useGetConnectionsMetadata } from "@/hooks/connections/useGetConnectionsMetadata";
import { useGetPanelById } from "@/hooks/panels/useGetPanelById";
import { useAlert } from "@/hooks/useAlert";
import { useCreateWidget } from "@/hooks/widgets/useCreateWidget";
import { getWidgetFormParams } from "@/utils/getWidgetFormParams";

const useActions = () => {
  const { panelId } = useParams();
  const alert = useAlert();

  const [widgetMenuIsOpen, setWidgetMenuIsOpen] = useState(false);
  const [currConnectionType, setCurrConnectionType] = useState("");

  const queryToGetPanelDetail = useGetPanelById({ id: panelId });
  const queryToGetConnectionsMetadata = useGetConnectionsMetadata({
    refetchOnWindowFocus: false,
  });

  const widgetCreationMutation = useCreateWidget({
    onSuccess: () => {
      alert.success(COPY["panels.detail.widgetCreation.success"]);
      setWidgetMenuIsOpen(false);
    },
    onError: (err) => alert.error(err.message),
  });

  const widgetFormParams = getWidgetFormParams({
    panelId,
    currConnectionType,
    connectionsMetadata: queryToGetConnectionsMetadata.data,
    createWidget: widgetCreationMutation.mutate,
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
    isCreatingWidget: widgetCreationMutation.isLoading,
    panel: queryToGetPanelDetail.data,
    widgetFormParams,
    toggleWidgetMenu,
  };
};

export default useActions;

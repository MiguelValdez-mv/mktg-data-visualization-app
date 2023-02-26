import { useParams } from "react-router-dom";

import { useGetConnectionsMetadata } from "@/hooks/connections/useGetConnectionsMetadata";
import { useGetPanelById } from "@/hooks/panels/useGetPanelById";
import { usePanelWidgets } from "@/hooks/widgets/usePanelWidgets";

const useActions = () => {
  const { panelId } = useParams();

  const queryToGetPanelDetail = useGetPanelById({ id: panelId });
  const queryToGetConnectionsMetadata = useGetConnectionsMetadata({
    refetchOnWindowFocus: false,
  });

  const {
    widgets,
    layout,
    setLayout,
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    isGettingWidgets,
    widgetFormParams,
    toggleWidgetMenu,
  } = usePanelWidgets({
    panelId,
    connectionsMetadata: queryToGetConnectionsMetadata.data,
  });

  return {
    isLoading:
      queryToGetPanelDetail.isLoading ||
      queryToGetConnectionsMetadata.isLoading ||
      isGettingWidgets,
    panel: queryToGetPanelDetail.data,
    widgets,
    layout,
    setLayout,
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    widgetFormParams,
    toggleWidgetMenu,
  };
};

export default useActions;

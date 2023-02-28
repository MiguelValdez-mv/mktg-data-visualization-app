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
  const { data: connectionsMetadata } = queryToGetConnectionsMetadata;

  const {
    widgets,
    layout,
    onLayoutChange,
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    isGettingWidgets,
    isCreatingReport,
    widgetFormParams,
    toggleWidgetMenu,
    onClickEditWidgetOpt,
    onClickDeleteWidgetOpt,
  } = usePanelWidgets({
    panelId,
    connectionsMetadata,
  });

  return {
    isLoading:
      queryToGetPanelDetail.isLoading ||
      queryToGetConnectionsMetadata.isLoading ||
      isGettingWidgets,
    panel: queryToGetPanelDetail.data,
    widgets,
    layout,
    onLayoutChange,
    widgetMenuIsOpen,
    currConnectionType,
    setCurrConnectionType,
    isCreatingReport,
    widgetFormParams,
    toggleWidgetMenu,
    onClickEditWidgetOpt,
    onClickDeleteWidgetOpt,
  };
};

export default useActions;

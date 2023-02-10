import { COPY } from "@/copy";
import { useDeleteConnections } from "@/hooks/connections/useDeleteConnections";
import { useGetConnections } from "@/hooks/connections/useGetConnections";
import { useAlert } from "@/hooks/useAlert";

const useActions = () => {
  const alert = useAlert();

  const queryToGetConnections = useGetConnections();
  const deleteConnectionsMutation = useDeleteConnections();

  const connectionListActions = ["delete"];

  const deleteConnections = (connections) => {
    const connectionIds = connections.map(({ _id }) => _id);

    deleteConnectionsMutation.mutate(connectionIds, {
      onSuccess: () => alert.success(COPY["connections.removal.success"]),
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    isLoading: queryToGetConnections.isLoading,
    connections: queryToGetConnections.data,
    isDeletingConnections: deleteConnectionsMutation.isLoading,
    connectionListActions,
    deleteConnections,
  };
};

export default useActions;

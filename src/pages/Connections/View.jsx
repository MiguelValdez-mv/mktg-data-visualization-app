import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { ConnectionList } from "@/components/app/connections/ConnectionList";
import { Button } from "@/components/atoms/buttons/Button";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({
  isLoading,
  connections,
  isDeletingConnections,
  connectionListActions,
  deleteConnections,
}) {
  return (
    <Page>
      <Header title={COPY["connections.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <Link className="self-end" to="/connections/create-connection">
          <Button startIcon={<IconAdd />}>
            {COPY["connections.creation.title"]}
          </Button>
        </Link>
        <Spacing bottom={4} />

        <ConnectionList
          connections={connections}
          connectionActions={connectionListActions}
          title={COPY["connections.title"]}
          deleteConnections={deleteConnections}
          isLoading={isDeletingConnections}
        />
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  connections: PROP.CONNECTIONS,
  isDeletingConnections: PropTypes.bool.isRequired,
  connectionListActions: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteConnections: PropTypes.func.isRequired,
};

export default View;

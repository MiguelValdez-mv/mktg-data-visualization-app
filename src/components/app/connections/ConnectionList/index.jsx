/* eslint-disable react/prop-types */
import { format } from "date-fns";
import PropTypes from "prop-types";
import { useMemo } from "react";

import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Surface } from "@/components/layout/Surface";
import { ProfileCard } from "@/components/molecules/ProfileCard";
import { Table } from "@/components/organisms/Table";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

import { ConnectionIcon } from "../ConnectionIcon";

export function ConnectionList({
  connections = [],
  selectConnections,
  connectionActions,
  title,
  deleteConnections,
  isLoading,
}) {
  const data = useMemo(() => connections, [connections]);
  const columns = useMemo(() => [
    {
      id: "connection",
      Header: () => <Cell header>{COPY["connectionList.connection"]}</Cell>,
      Cell: ({ row: { original: connection } }) => (
        <ProfileCard
          avatarRender={<ConnectionIcon type={connection.type} />}
          name={
            COPY[`connectionList.connection.${connection.type.toLowerCase()}`]
          }
        />
      ),
    },
    {
      id: "email",
      Header: () => <Cell header>{COPY["connectionList.email"]}</Cell>,
      accessor: "email",
    },
    {
      id: "date",
      Header: () => <Cell header>{COPY["connectionList.date"]}</Cell>,
      accessor: ({ createdAt }) => format(new Date(createdAt), "dd/MM/yyyy"),
    },
  ]);

  return (
    <Surface>
      <Table
        data={data}
        columns={columns}
        selectRows={selectConnections}
        allowedRowActions={connectionActions}
        title={title}
        deleteItems={deleteConnections}
        isLoading={isLoading}
      />
    </Surface>
  );
}

ConnectionList.propTypes = {
  connections: PROP.CONNECTIONS,
  selectConnections: PropTypes.bool,
  connectionActions: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  deleteConnections: PropTypes.func,
  isLoading: PropTypes.bool,
};

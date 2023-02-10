/* eslint-disable react/prop-types */
import { format } from "date-fns";
import PropTypes from "prop-types";
import { useMemo } from "react";

import { GoogleAnalyticsLogo } from "@/assets/svgs/GoogleAnalyticsLogo";
import { IconSquareFacebook } from "@/assets/svgs/IconSquareFacebook";
import { ProfileCard } from "@/components/app/ProfileCard";
import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Surface } from "@/components/layout/Surface";
import { Table } from "@/components/organisms/Table";
import { PROP, CONNECTION_TYPES } from "@/constants";
import { COPY } from "@/copy";

const iconRender = (connectionType) => {
  switch (connectionType) {
    case CONNECTION_TYPES.GOOGLE_ANALYTICS:
      return <GoogleAnalyticsLogo />;
    case CONNECTION_TYPES.FACEBOOK_ADS:
      return <IconSquareFacebook className="text-primary" />;
    default:
      return null;
  }
};

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
      Cell: ({
        row: {
          original: { type },
        },
      }) => (
        <ProfileCard
          avatarRender={iconRender(type)}
          name={COPY[`connectionList.connection.${type.toLowerCase()}`]}
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

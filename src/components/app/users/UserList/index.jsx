import { format } from "date-fns";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { ProfileCard } from "@/components/app/ProfileCard";
import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Table } from "@/components/organisms/Table";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

export function UserList({
  users = [],
  title,
  filterGlobally = true,
  showDivider = true,
}) {
  const data = useMemo(() => users, [users]);
  const columns = useMemo(
    () => [
      {
        id: "user",
        Header: () => <Cell header>{COPY["userList.user"]}</Cell>,
        accessor: ({ name, email, avatar }) => ({ name, email, avatar }),
        // eslint-disable-next-line react/prop-types
        Cell: ({ value }) => <ProfileCard {...value} />,
      },
      {
        id: "role",
        Header: () => <Cell header>{COPY["userList.role"]}</Cell>,
        accessor: ({ role }) => COPY[`userList.role.${role.toLowerCase()}`],
      },
      {
        id: "date",
        Header: () => <Cell header>{COPY["userList.date"]}</Cell>,
        accessor: ({ createdAt }) => format(new Date(createdAt), "dd/MM/yyyy"),
      },
    ],
    []
  );
  const navigate = useNavigate();

  const handleRowClick = ({ original: user }) => navigate(`/users/${user._id}`);

  return (
    <Table
      data={data}
      columns={columns}
      title={title}
      onRowClick={handleRowClick}
      filterGlobally={filterGlobally}
      showDivider={showDivider}
    />
  );
}

UserList.propTypes = {
  users: PROP.USERS,
  filterGlobally: PropTypes.bool,
  title: PropTypes.string.isRequired,
  showDivider: PropTypes.bool,
};

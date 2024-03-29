import { format } from "date-fns";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Surface } from "@/components/layout/Surface";
import { ProfileCard } from "@/components/molecules/ProfileCard";
import { Table } from "@/components/organisms/Table";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

export function UserList({
  users = [],
  selectUsers,
  userActions,
  title,
  goToUserDetail,
  deleteUsers,
  isLoading,
}) {
  const navigate = useNavigate();
  const data = useMemo(() => users, [users]);
  const columns = useMemo(
    () => [
      {
        id: "user",
        Header: () => <Cell header>{COPY["userList.user"]}</Cell>,
        accessor: ({ name, email }) => [name, email],
        // eslint-disable-next-line react/prop-types
        Cell: ({ row: { original: user } }) => <ProfileCard {...user} />,
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

  return (
    <Surface>
      <Table
        data={data}
        columns={columns}
        selectRows={selectUsers}
        allowedRowActions={userActions}
        title={title}
        viewItemDetail={
          goToUserDetail || ((user) => navigate(`/users/${user._id}`))
        }
        deleteItems={deleteUsers}
        isLoading={isLoading}
      />
    </Surface>
  );
}

UserList.propTypes = {
  users: PROP.USERS,
  selectUsers: PropTypes.bool,
  userActions: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  goToUserDetail: PropTypes.func,
  deleteUsers: PropTypes.func,
  isLoading: PropTypes.bool,
};

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
  selectRows = true,
  selectSingleRow = true,
  filterGlobally = true,
  divideContent = true,
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

  const handleEditRow = ({ selectedRows, closeMenu }) => {
    const [{ original: user }] = selectedRows;
    navigate(`/users/${user._id}`);
    closeMenu();
  };

  return (
    <Table
      title={title}
      data={data}
      columns={columns}
      selectRows={selectRows}
      selectSingleRow={selectSingleRow}
      onEditRow={handleEditRow}
      filterGlobally={filterGlobally}
      divideContent={divideContent}
    />
  );
}

UserList.propTypes = {
  users: PROP.USERS,
  title: PropTypes.string.isRequired,
  selectRows: PropTypes.bool,
  selectSingleRow: PropTypes.bool,
  filterGlobally: PropTypes.bool,
  divideContent: PropTypes.bool,
};
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { ProfileCard } from "@/components/app/ProfileCard";
import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Surface } from "@/components/layout/Surface";
import { Table } from "@/components/organisms/Table";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

export function EmployeeList({
  employees = [],
  selectEmployees,
  employeeActions,
  title,
  goToEmployeeDetail,
  deleteEmployees,
  isLoading,
}) {
  const navigate = useNavigate();
  const data = useMemo(() => employees, [employees]);
  const columns = useMemo(
    () => [
      {
        id: "name",
        Header: () => <Cell header>{COPY["employeeList.name"]}</Cell>,
        accessor: "name",
        // eslint-disable-next-line react/prop-types
        Cell: ({ row: { original } }) => <ProfileCard name={original.name} />,
      },
      {
        id: "email",
        Header: () => <Cell header>{COPY["employeeList.email"]}</Cell>,
        accessor: "email",
      },
    ],
    []
  );

  return (
    <Surface>
      <Table
        data={data}
        columns={columns}
        selectRows={selectEmployees}
        allowedRowActions={employeeActions}
        title={title}
        viewItemDetail={
          goToEmployeeDetail ||
          ((employee) => navigate(`/users/${employee._id}`))
        }
        deleteItems={deleteEmployees}
        isLoading={isLoading}
      />
    </Surface>
  );
}

EmployeeList.propTypes = {
  employees: PROP.USERS,
  selectEmployees: PropTypes.bool,
  employeeActions: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  goToEmployeeDetail: PropTypes.func,
  deleteEmployees: PropTypes.func,
  isLoading: PropTypes.bool,
};

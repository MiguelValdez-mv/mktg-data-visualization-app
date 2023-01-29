import PropTypes from "prop-types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { ProfileCard } from "@/components/app/ProfileCard";
import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Surface } from "@/components/layout/Surface";
import { Table } from "@/components/organisms/Table";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

export function BusinessList({
  businesses = [],
  selectRows,
  allowedActions,
  title,
  goToBusinessDetail,
  deleteBusinesses,
  isLoading,
}) {
  const navigate = useNavigate();
  const data = useMemo(() => businesses, [businesses]);
  const columns = useMemo(
    () => [
      {
        id: "company",
        Header: () => <Cell header>{COPY["businessList.company"]}</Cell>,
        accessor: "name",
        // eslint-disable-next-line react/prop-types
        Cell: ({ row: { original: business } }) => (
          <ProfileCard {...business} />
        ),
      },
      {
        id: "type",
        Header: () => <Cell header>{COPY["businessList.type"]}</Cell>,
        accessor: ({ type }) => COPY[`businessList.type.${type.toLowerCase()}`],
      },
      {
        id: "description",
        Header: () => <Cell header>{COPY["businessList.description"]}</Cell>,
        accessor: "description",
      },
    ],
    []
  );

  return (
    <Surface>
      <Table
        data={data}
        columns={columns}
        selectRows={selectRows}
        allowedActions={allowedActions}
        title={title}
        viewItemDetail={
          goToBusinessDetail ||
          ((business) => navigate(`/businesses/${business._id}`))
        }
        deleteItems={deleteBusinesses}
        isLoading={isLoading}
      />
    </Surface>
  );
}

BusinessList.propTypes = {
  businesses: PROP.BUSINESSES,
  selectRows: PropTypes.bool,
  allowedActions: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  goToBusinessDetail: PropTypes.func,
  deleteBusinesses: PropTypes.func,
  isLoading: PropTypes.bool,
};

import PropTypes from "prop-types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Surface } from "@/components/layout/Surface";
import { ProfileCard } from "@/components/molecules/ProfileCard";
import { Table } from "@/components/organisms/Table";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

export function BusinessList({
  businesses = [],
  selectBusinesses,
  businessActions,
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
        selectRows={selectBusinesses}
        allowedRowActions={businessActions}
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
  selectBusinesses: PropTypes.bool,
  businessActions: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  goToBusinessDetail: PropTypes.func,
  deleteBusinesses: PropTypes.func,
  isLoading: PropTypes.bool,
};

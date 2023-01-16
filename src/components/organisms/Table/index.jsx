/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import { Fragment } from "react";
import { useTable, useGlobalFilter } from "react-table";

import { SearchBar } from "@/components/app/SearchBar";
import { Divider } from "@/components/atoms/Divider";
import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { twMerge } from "@/utils/twMerge";

export function Table({
  data,
  columns,
  filterGlobally,
  title,
  onRowClick,
  divideContent,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { globalFilter = "" },
    setGlobalFilter,
  } = useTable(
    {
      data,
      columns,
      defaultColumn: {
        // eslint-disable-next-line react/prop-types
        Cell: ({ value }) => <Cell>{value}</Cell>,
      },
    },
    useGlobalFilter
  );

  const onChangeGlobalFilter = (e) => setGlobalFilter(e.target.value);

  return (
    <Col>
      <Col className="sm:flex-row sm:justify-between sm:items-center">
        <Text subtitle bold>
          {title}
        </Text>

        {filterGlobally && (
          <>
            <Spacing spacing={1} />
            <SearchBar value={globalFilter} onChange={onChangeGlobalFilter} />
          </>
        )}
      </Col>
      <Spacing bottom={4} />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    className: twMerge("py-4", column.className),
                  })}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            const showDivider = divideContent && idx !== rows.length - 1;

            prepareRow(row);

            return (
              <Fragment key={row.id}>
                <tr
                  {...row.getRowProps({
                    className: onRowClick && "cursor-pointer",
                    onClick: () => onRowClick?.(row),
                  })}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps({
                        className: twMerge("py-4", cell.column.className),
                      })}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>

                {showDivider && (
                  <tr>
                    <td colSpan="100%">
                      <Divider />
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </Col>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  filterGlobally: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onRowClick: PropTypes.func,
  divideContent: PropTypes.bool,
};

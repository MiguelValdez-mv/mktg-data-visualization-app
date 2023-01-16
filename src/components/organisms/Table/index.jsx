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

export function Table({
  data,
  columns,
  filterGlobally,
  title,
  onRowClick,
  showDivider,
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
    filterGlobally && useGlobalFilter
  );

  const onChangeGlobalFilter = (e) => setGlobalFilter?.(e.target.value);

  return (
    <Col>
      <Col className="sm:flex-row sm:justify-between sm:items-center">
        <Text bold>{title}</Text>

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
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}

          <tr>
            <th>
              <Spacing bottom={4} />
            </th>
          </tr>
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            const { index, getRowProps } = row;
            const { key, ...rowProps } = getRowProps();

            return (
              <Fragment key={key}>
                <tr
                  className={onRowClick && "cursor-pointer"}
                  onClick={() => onRowClick?.(row)}
                  {...rowProps}
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>

                {showDivider && index !== data.length - 1 ? (
                  <tr>
                    <td colSpan="100%">
                      <Spacing vertical={2}>
                        <Divider />
                      </Spacing>
                    </td>
                  </tr>
                ) : null}
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
  showDivider: PropTypes.bool,
};

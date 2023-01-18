/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useTable, useGlobalFilter, useRowSelect } from "react-table";

import { IconMenuRight } from "@/assets/svgs/IconMenuRight";
import { SearchBar } from "@/components/app/SearchBar";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Divider } from "@/components/atoms/Divider";
import { IconButton } from "@/components/atoms/IconButton";
import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";

export function Table({
  title,
  data,
  columns,
  selectRows,
  selectSingleRow,
  onEditRow,
  filterGlobally,
  divideContent,
}) {
  const table = useTable(
    {
      data,
      columns,
      defaultColumn: {
        Cell: ({ value }) => <Cell>{value}</Cell>,
      },
      stateReducer: (newState, action) => {
        switch (action.type) {
          case "toggleRowSelected":
            return {
              ...newState,
              ...(selectSingleRow && {
                selectedRowIds: { [action.id]: action.value },
              }),
            };
          default:
            return newState;
        }
      },
    },
    useGlobalFilter,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((cols) =>
        [
          selectRows && {
            id: "selection",
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps({ id: row.id })} />
            ),
          },
          ...cols,
        ].filter(Boolean)
      );
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { globalFilter },
    setGlobalFilter,
    selectedFlatRows: selectedRows,
  } = table;

  const handleChangeGlobalFilter = (e) => setGlobalFilter(e.target.value);

  return (
    <Col>
      <Col className="sm:flex-row">
        <Row className="justify-between sm:items-center sm:w-full">
          <Text subtitle bold>
            {title}
          </Text>

          {!!selectedRows.length && (
            <Menu
              trigger={
                <IconButton primary>
                  <IconMenuRight />
                </IconButton>
              }
              position="bottom right"
            >
              {(closeMenu) => (
                <MenuOption
                  onClick={() => onEditRow({ selectedRows, closeMenu })}
                >
                  {COPY["table.opts.edit"]}
                </MenuOption>
              )}
            </Menu>
          )}
        </Row>

        {filterGlobally && (
          <>
            <Spacing spacing={1} />
            <SearchBar
              value={globalFilter || ""}
              onChange={handleChangeGlobalFilter}
            />
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
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            const showDivider = divideContent && idx !== rows.length - 1;

            prepareRow(row);

            return (
              <Fragment key={row.id}>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps({ className: "py-4" })}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>

                {showDivider && (
                  <tr>
                    <td colSpan={row.cells.length}>
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
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired, // eslint-disable-line
  columns: PropTypes.array.isRequired, // eslint-disable-line
  selectRows: PropTypes.bool,
  selectSingleRow: PropTypes.bool,
  onEditRow: PropTypes.func,
  filterGlobally: PropTypes.bool,
  divideContent: PropTypes.bool,
};

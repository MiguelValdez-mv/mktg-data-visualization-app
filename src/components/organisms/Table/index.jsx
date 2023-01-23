/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useTable, useGlobalFilter, useRowSelect } from "react-table";

import { IconMenuRight } from "@/assets/svgs/IconMenuRight";
import { SearchBar } from "@/components/app/SearchBar";
import { Divider } from "@/components/atoms/Divider";
import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Checkbox } from "@/components/atoms/inputs/Checkbox";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";
import { useDimensions } from "@/hooks/useDimensions";

export function Table({
  title,
  data,
  columns,
  selectRows,
  onEditRow,
  onDeleteRows,
  filterGlobally,
  divideContent,
}) {
  const { isLargeScreen } = useDimensions();
  const table = useTable(
    {
      data,
      columns,
      defaultColumn: {
        Cell: ({ value }) => <Cell>{value}</Cell>,
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
  const disableEditOpt = selectedRows.length !== 1;
  const disableDeleteOpt = !selectedRows.length;

  const handleEditRow = () => onEditRow(selectedRows);
  const handleDeleteRows = () => onDeleteRows(selectedRows);
  const handleChangeGlobalFilter = (e) => setGlobalFilter(e.target.value);

  return (
    <Col>
      <Col className="sm:flex-row">
        <Row className="justify-between sm:items-center sm:w-full">
          <Text subtitle bold>
            {title}
          </Text>

          {isLargeScreen ? (
            <Row>
              <Button
                variant="outline-primary"
                onClick={handleEditRow}
                disabled={disableEditOpt}
              >
                {COPY["table.edit"]}
              </Button>
              <Spacing right={2} />

              <Button
                variant="outline-primary"
                onClick={handleDeleteRows}
                disabled={disableDeleteOpt}
              >
                {COPY["table.delete"]}
              </Button>
            </Row>
          ) : (
            <Menu
              trigger={
                <IconButton primary>
                  <IconMenuRight />
                </IconButton>
              }
              position="bottom right"
            >
              {(closeMenu) => (
                <>
                  <MenuOption
                    onClick={handleEditRow}
                    disabled={disableEditOpt}
                    closeMenu={closeMenu}
                  >
                    {COPY["table.edit"]}
                  </MenuOption>

                  <MenuOption
                    onClick={handleDeleteRows}
                    disabled={disableDeleteOpt}
                    closeMenu={closeMenu}
                  >
                    {COPY["table.delete"]}
                  </MenuOption>
                </>
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

      <Col className="overflow-x-auto">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
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
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps({
                          className: "py-4 pr-4 lg:pr-0",
                        })}
                      >
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
    </Col>
  );
}

Table.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired, // eslint-disable-line
  columns: PropTypes.array.isRequired, // eslint-disable-line
  selectRows: PropTypes.bool,
  onEditRow: PropTypes.func,
  onDeleteRows: PropTypes.func,
  filterGlobally: PropTypes.bool,
  divideContent: PropTypes.bool,
};

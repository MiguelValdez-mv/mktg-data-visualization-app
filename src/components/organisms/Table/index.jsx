/* eslint-disable react/prop-types, react/forbid-prop-types */
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useTable, useGlobalFilter, useRowSelect } from "react-table";

import { IconMenuRight } from "@/assets/svgs/IconMenuRight";
import { Divider } from "@/components/atoms/Divider";
import { Spinner } from "@/components/atoms/Spinner";
import { TableCell as Cell } from "@/components/atoms/TableCell";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Checkbox } from "@/components/atoms/inputs/Checkbox";
import { SearchBar } from "@/components/atoms/inputs/SearchBar";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { NoDataYet } from "@/components/molecules/NoDataYet";
import { COPY } from "@/copy";
import { useDimensions } from "@/hooks/useDimensions";

export function Table({
  data,
  columns,
  selectRows = true,
  allowedRowActions = ["view-detail", "delete"],
  title,
  isLoading,
  viewItemDetail,
  deleteItems,
}) {
  const { isLargeScreen } = useDimensions();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { globalFilter },
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      data,
      columns,
      defaultColumn: {
        Cell: ({ value }) => <Cell>{value || "-"}</Cell>,
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

  const selectedItems = selectedFlatRows.map((row) => row.original);
  const rowActions = [
    {
      id: "view-detail",
      onClick: () => {
        const [selectedItem] = selectedItems;
        viewItemDetail?.(selectedItem);
      },
      disabled: selectedFlatRows.length !== 1,
      msg: COPY["table.viewDetail"],
    },
    {
      id: "delete",
      onClick: () => deleteItems?.(selectedItems),
      disabled: !selectedFlatRows.length,
      msg: COPY["table.delete"],
    },
  ].filter((action) => allowedRowActions.includes(action.id));

  const handleChangeGlobalFilter = (e) => setGlobalFilter(e.target.value);

  return (
    <Col>
      <Col className="xl:flex-row">
        <Row className="justify-between items-center flex-1">
          <Row>
            <Text subtitle bold>
              {title}
            </Text>

            {isLoading && (
              <>
                <Spacing left={2} />
                <Spinner primary />
              </>
            )}
          </Row>

          {!!rowActions.length &&
            (isLargeScreen ? (
              <Row>
                {rowActions.map(({ id, onClick, disabled, msg }) => (
                  <Fragment key={id}>
                    <Spacing left={2} />
                    <Button
                      variant="outline-primary"
                      onClick={onClick}
                      disabled={disabled}
                    >
                      {msg}
                    </Button>
                  </Fragment>
                ))}
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
                {(close) =>
                  rowActions.map(({ id, onClick, disabled, msg }) => (
                    <MenuOption
                      key={id}
                      onClick={onClick}
                      disabled={disabled}
                      close={close}
                    >
                      {msg}
                    </MenuOption>
                  ))
                }
              </Menu>
            ))}
        </Row>
        <Spacing spacing={1} />

        <SearchBar
          value={globalFilter || ""}
          onChange={handleChangeGlobalFilter}
        />
      </Col>
      <Spacing bottom={4} />

      {data.length ? (
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

                    {idx !== rows.length - 1 && (
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
      ) : (
        <NoDataYet />
      )}
    </Col>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  selectRows: PropTypes.bool,
  allowedRowActions: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  viewItemDetail: PropTypes.func,
  deleteItems: PropTypes.func,
};

/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useMemo, Fragment } from "react";
import { useTable } from "react-table";

import { Divider } from "@/components/atoms/Divider";
import { Text } from "@/components/atoms/Text";
import { PROP } from "@/constants";

export function TableChart({ data, height, isLargeScreen }) {
  const columns = useMemo(
    () => [
      {
        id: "dimension",
        accessor: "dimension",
        Cell: ({ value }) => <Text>{value || "-"}</Text>,
      },
      {
        id: "metric",
        accessor: "metric",
        Cell: ({ value }) => <Text bold>{value || "-"}</Text>,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    data: isLargeScreen ? data.slice(0, Math.floor(height / 45)) : data,
    columns,
  });

  return (
    <table {...getTableProps({ className: "w-full" })}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, idx) => {
          prepareRow(row);

          return (
            <Fragment key={row.id}>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps({
                      className: "py-2 pr-2",
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
  );
}

TableChart.propTypes = {
  data: PROP.CHART_DATA.isRequired,
  height: PropTypes.number,
  isLargeScreen: PropTypes.bool.isRequired,
};

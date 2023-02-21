/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { IconEdit } from "@/assets/svgs/IconEdit";
import { IconTrash } from "@/assets/svgs/IconTrash";
import { Text } from "@/components/atoms/Text";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Modal } from "@/components/layout/Modal";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";

import { FilterForm } from "../FilterForm";

export function FilterItem({ filter, editFilter, deleteFilter, fields }) {
  const { field, operator, operand } = filter;

  const operatorTxt = COPY[`filterForm.operator.${operator.toLowerCase()}`];

  return (
    <Row className="justify-between p-2">
      <Text>
        <Text bold>
          {field.copy.spanish} {operatorTxt.toLowerCase()}
        </Text>{" "}
        {operand}
      </Text>

      <Row>
        <Modal
          title={COPY["filterInput.filter"]}
          trigger={
            <IconButton primary>
              <IconEdit />
            </IconButton>
          }
          fullScreenOnMobile
          nested
        >
          {(close) => (
            <FilterForm
              initialValues={filter}
              action="update"
              onSubmit={(values) => {
                editFilter(values);
                close();
              }}
              fields={fields}
            />
          )}
        </Modal>
        <Spacing right={2} />

        <IconButton onClick={deleteFilter} primary>
          <IconTrash />
        </IconButton>
      </Row>
    </Row>
  );
}

FilterItem.propTypes = {
  filter: PropTypes.object.isRequired,
  editFilter: PropTypes.func.isRequired,
  deleteFilter: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
};

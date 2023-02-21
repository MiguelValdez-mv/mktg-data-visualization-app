/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { IconFilter } from "@/assets/svgs/IconFilter";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { Col } from "@/components/layout/Col";
import { Modal } from "@/components/layout/Modal";
import { OPERATORS } from "@/constants";
import { COPY } from "@/copy";
import { twMerge } from "@/utils/twMerge";

import { FilterForm } from "./FilterForm";
import { FilterItem } from "./FilterItem";

export function FilterInput({ fields, filters, setFilters }) {
  const [defaultField] = fields;
  const initialValues = {
    field: defaultField,
    operator: OPERATORS.EQUAL,
    operand: "",
  };

  const showFilterList = !!filters.length;

  const addFilter = (newFilter) => setFilters([...filters, newFilter]);
  const editFilter = (editedFilter, idx) =>
    setFilters([
      ...filters.map((f, currIdx) => (currIdx === idx ? editedFilter : f)),
    ]);
  const deleteFilter = (idx) =>
    setFilters([...filters.filter((f, currIdx) => currIdx !== idx)]);

  return (
    <Col>
      <Modal
        title={COPY["filterInput.filter"]}
        trigger={
          <Button
            className={twMerge(showFilterList && "rounded-b-none")}
            variant="outline-primary"
            startIcon={<IconFilter />}
            endIcon={<IconAdd />}
          >
            <Text className="flex-1 text-left">
              {COPY["filterInput.filter"]}
            </Text>
          </Button>
        }
        fullScreenOnMobile
        nested
      >
        {(close) => (
          <FilterForm
            initialValues={initialValues}
            onSubmit={(values) => {
              addFilter(values);
              close();
            }}
            fields={fields}
          />
        )}
      </Modal>

      {showFilterList && (
        <Col className="border-b border-x border-muted rounded-b-xl">
          {filters.map((filter, idx) => (
            <FilterItem
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              filter={filter}
              editFilter={(editedFilter) => editFilter(editedFilter, idx)}
              deleteFilter={() => deleteFilter(idx)}
              fields={fields}
            />
          ))}
        </Col>
      )}
    </Col>
  );
}

FilterInput.propTypes = {
  fields: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  setFilters: PropTypes.func.isRequired,
};

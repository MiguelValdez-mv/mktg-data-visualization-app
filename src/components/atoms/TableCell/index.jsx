import PropTypes from "prop-types";

import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function TableCell({ className, header, children }) {
  return (
    <Col className={twMerge("text-left", className)}>
      <Text small={header} uppercase={header} muted bold>
        {children}
      </Text>
    </Col>
  );
}

TableCell.propTypes = {
  className: PropTypes.string,
  header: PropTypes.bool,
  children: PROP.CHILDREN.isRequired,
};

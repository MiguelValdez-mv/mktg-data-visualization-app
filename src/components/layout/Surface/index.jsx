import PropTypes from "prop-types";

import { Col } from "@/components/layout/Col";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Surface({ className, children }) {
  return (
    <Col
      className={twMerge(
        "bg-white rounded-xl drop-shadow-surface p-4",
        className
      )}
    >
      {children}
    </Col>
  );
}

Surface.propTypes = {
  className: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
};

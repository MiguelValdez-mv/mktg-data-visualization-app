import PropTypes from "prop-types";

import { Col } from "@/components/layout/Col";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Surface({ className, children }) {
  return (
    <Col
      className={twMerge("bg-white rounded-xl drop-shadow-xl p-5", className)}
    >
      {children}
    </Col>
  );
}

Surface.propTypes = {
  className: PropTypes.string,
  children: PROP.children().isRequired,
};

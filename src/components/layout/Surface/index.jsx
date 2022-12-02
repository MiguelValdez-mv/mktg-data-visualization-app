import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

import { Col } from "@/components/layout/Col";
import { PROP } from "@/constants";

export function Surface({ className, children }) {
  return (
    <Col
      className={twMerge("bg-white rounded-2xl drop-shadow-xl p-5", className)}
    >
      {children}
    </Col>
  );
}

Surface.propTypes = {
  className: PropTypes.string,
  children: PROP.children().isRequired,
};

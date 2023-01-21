import PropTypes from "prop-types";

import { Col } from "@/components/layout/Col";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Page({ className, children }) {
  return (
    <Col className={twMerge("w-full h-screen overflow-y-auto p-5", className)}>
      {children}
    </Col>
  );
}

Page.propTypes = {
  className: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
};

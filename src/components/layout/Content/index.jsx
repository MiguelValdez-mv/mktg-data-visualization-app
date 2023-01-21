import PropTypes from "prop-types";

import { Spinner } from "@/components/atoms/Spinner";
import { Col } from "@/components/layout/Col";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Content({ isLoading, className, children }) {
  return (
    <Col
      className={twMerge(
        "max-w-7xl w-full self-center",
        isLoading && "h-full justify-center items-center",
        className
      )}
    >
      {isLoading ? <Spinner primary /> : children}
    </Col>
  );
}

Content.propTypes = {
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
};

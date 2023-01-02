import PropTypes from "prop-types";

import { Box } from "@/components/atoms/Box";
import { PROP } from "@/constants";

export function Spacing({
  spacing,
  top,
  bottom,
  vertical,
  right,
  left,
  horizontal,
  children,
}) {
  const style = {};
  const unit = 8;

  if (spacing) style.padding = spacing * unit;
  if (top) style.paddingTop = top * unit;
  if (bottom) style.paddingBottom = bottom * unit;
  if (vertical) {
    style.paddingTop = vertical * unit;
    style.paddingBottom = vertical * unit;
  }
  if (right) style.paddingRight = right * unit;
  if (left) style.paddingLeft = left * unit;
  if (horizontal) {
    style.paddingRight = horizontal * unit;
    style.paddingLeft = horizontal * unit;
  }

  return <Box style={style}>{children}</Box>;
}

Spacing.propTypes = {
  spacing: PropTypes.number,
  top: PropTypes.number,
  bottom: PropTypes.number,
  vertical: PropTypes.number,
  right: PropTypes.number,
  left: PropTypes.number,
  horizontal: PropTypes.number,
  children: PROP.CHILDREN,
};

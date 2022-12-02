import PropTypes from "prop-types";

import { Box } from "@/components/atoms/Box";

export function Spacing({
  top,
  bottom,
  right,
  left,
  horizontal,
  vertical,
  spacing,
}) {
  const style = {};
  const unit = 8;

  if (top) style.paddingTop = top * unit;
  if (bottom) style.paddingBottom = bottom * unit;
  if (right) style.paddingRight = right * unit;
  if (left) style.paddingLeft = left * unit;
  if (horizontal) style.paddingHorizontal = horizontal * unit;
  if (vertical) style.paddingVertical = vertical * unit;
  if (spacing) style.padding = spacing * unit;

  return <Box style={style} />;
}

Spacing.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  right: PropTypes.number,
  left: PropTypes.number,
  horizontal: PropTypes.number,
  vertical: PropTypes.number,
  spacing: PropTypes.number,
};

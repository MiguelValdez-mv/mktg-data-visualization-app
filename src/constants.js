import PropTypes from "prop-types";

export const PROP = {
  children() {
    return PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]);
  },
};

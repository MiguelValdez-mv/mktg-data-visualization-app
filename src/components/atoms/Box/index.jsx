import PropTypes from "prop-types";

import { PROP } from "@/constants";

export function Box({ className, style, children }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

Box.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line
  children: PROP.children(),
};

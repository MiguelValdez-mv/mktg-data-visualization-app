import PropTypes from "prop-types";
import Popup from "reactjs-popup";

import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";

export function Menu({
  trigger,
  position = "bottom left",
  children,
  arrow = false,
  disabled = false,
  nested = false,
}) {
  return (
    <Popup
      trigger={trigger}
      position={position}
      arrow={arrow}
      disabled={disabled}
      nested={nested}
    >
      {(close) => (
        <Surface className="max-h-60 p-0 overflow-x-auto">
          {typeof children === "function" ? children(close) : children}
        </Surface>
      )}
    </Popup>
  );
}

Menu.propTypes = {
  trigger: PROP.CHILDREN.isRequired,
  position: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
  arrow: PropTypes.bool,
  disabled: PropTypes.bool,
  nested: PropTypes.bool,
};

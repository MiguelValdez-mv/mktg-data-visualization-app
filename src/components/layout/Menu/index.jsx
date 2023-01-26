import PropTypes from "prop-types";
import Popup from "reactjs-popup";

import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";

export function Menu({
  trigger,
  position = "bottom left",
  children,
  arrow = false,
}) {
  return (
    <Popup trigger={trigger} position={position} arrow={arrow}>
      {(close) => (
        <Surface className="p-0">
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
};

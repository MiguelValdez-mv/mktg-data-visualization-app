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
      <Surface className="p-0">{children}</Surface>
    </Popup>
  );
}

Menu.propTypes = {
  trigger: PropTypes.node,
  position: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
  arrow: PropTypes.bool,
};

import PropTypes from "prop-types";

import { Menu } from "@/components/layout/Menu";
import { Modal } from "@/components/layout/Modal";
import { BREAKPOINTS, PROP } from "@/constants";
import { useDimensions } from "@/hooks/useDimensions";

export function ResponsiveMenu({
  breakpoint = BREAKPOINTS.SMALL,
  title,
  trigger,
  position,
  children,
}) {
  const { isLargeScreen } = useDimensions({ breakpoint });

  return isLargeScreen ? (
    <Menu trigger={trigger} position={position}>
      {children}
    </Menu>
  ) : (
    <Modal title={title} trigger={trigger} fullScreenOnMobile>
      {children}
    </Modal>
  );
}

ResponsiveMenu.propTypes = {
  breakpoint: PropTypes.number,
  title: PropTypes.string.isRequired,
  trigger: PROP.CHILDREN.isRequired,
  position: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
};

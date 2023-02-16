import PropTypes from "prop-types";

import { Menu } from "@/components/layout/Menu";
import { Modal } from "@/components/layout/Modal";
import { BREAKPOINTS, PROP } from "@/constants";
import { useDimensions } from "@/hooks/useDimensions";

export function ResponsiveMenu({
  breakpoint = BREAKPOINTS.SMALL,
  title,
  trigger,
  children,
}) {
  const { isLargeScreen } = useDimensions({ breakpoint });

  return isLargeScreen ? (
    <Menu trigger={trigger}>{children}</Menu>
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
  children: PROP.CHILDREN.isRequired,
};

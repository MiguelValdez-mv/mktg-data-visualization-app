import PropTypes from "prop-types";

import { Button } from "@/components/atoms/buttons/Button";
import { PROP } from "@/constants";

export function MenuOption({ onClick, closeMenu, children, ...rest }) {
  const handleClickMenuOpt = () => {
    onClick();
    closeMenu?.();
  };

  return (
    <Button
      onClick={handleClickMenuOpt}
      className="p-3 justify-start"
      variant="ghost"
      {...rest}
    >
      {children}
    </Button>
  );
}

MenuOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  closeMenu: PropTypes.func,
  children: PROP.CHILDREN.isRequired,
};

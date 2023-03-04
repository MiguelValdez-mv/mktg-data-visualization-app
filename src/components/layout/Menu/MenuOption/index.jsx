import PropTypes from "prop-types";

import { Button } from "@/components/atoms/buttons/Button";
import { PROP } from "@/constants";

export function MenuOption({ onClick, close, children, ...rest }) {
  const handleClickMenuOpt = () => {
    onClick?.();
    close?.();
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
  onClick: PropTypes.func,
  close: PropTypes.func,
  children: PROP.CHILDREN.isRequired,
};

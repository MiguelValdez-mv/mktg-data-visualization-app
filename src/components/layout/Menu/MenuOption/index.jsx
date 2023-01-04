import PropTypes from "prop-types";

import { Button } from "@/components/atoms/Button";
import { PROP } from "@/constants";

export function MenuOption({ children, ...rest }) {
  return (
    <Button className="p-3" variant="ghost" {...rest}>
      {children}
    </Button>
  );
}

MenuOption.propTypes = {
  onClick: PropTypes.func,
  children: PROP.CHILDREN.isRequired,
};

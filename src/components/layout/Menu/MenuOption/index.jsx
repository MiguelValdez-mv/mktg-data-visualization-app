import PropTypes from "prop-types";

import { Button } from "@/components/atoms/buttons/Button";
import { PROP } from "@/constants";

export function MenuOption({ children, ...rest }) {
  return (
    <Button className="p-3 justify-start" variant="ghost" {...rest}>
      {children}
    </Button>
  );
}

MenuOption.propTypes = {
  onClick: PropTypes.func,
  children: PROP.CHILDREN.isRequired,
};

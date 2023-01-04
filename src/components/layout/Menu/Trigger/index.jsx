import { forwardRef } from "react";

import { Button } from "@/components/atoms/Button";
import { PROP } from "@/constants";

export const Trigger = forwardRef(({ children, ...rest }, ref) => (
  <Button innerRef={ref} {...rest}>
    {children}
  </Button>
));

Trigger.propTypes = {
  children: PROP.CHILDREN.isRequired,
};

Trigger.displayName = "Trigger";

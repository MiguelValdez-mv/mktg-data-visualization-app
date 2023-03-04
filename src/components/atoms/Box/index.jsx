import { PROP } from "@/constants";

export function Box({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

Box.propTypes = {
  children: PROP.CHILDREN,
};

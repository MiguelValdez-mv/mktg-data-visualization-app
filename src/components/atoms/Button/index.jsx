import { PROP } from "@/constants";

export function Button({ children }) {
  return <button type="button">{children}</button>;
}

Button.propTypes = {
  children: PROP.children().isRequired,
};

import PropTypes from "prop-types";

import { PROP } from "@/constants";

export function Form({ onSubmit, children }) {
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PROP.CHILDREN.isRequired,
};

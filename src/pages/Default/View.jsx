import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

function View({ to }) {
  return <Navigate to={to} />;
}

View.propTypes = {
  to: PropTypes.string.isRequired,
};

export default View;

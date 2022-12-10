import PropTypes from "prop-types";

export const PROP = {
  CHILDREN: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const LINKS = {
  FACEBOOK: "https://www.facebook.com/somosopentech/",
  INSTAGRAM: "https://www.instagram.com/somosopentech",
};

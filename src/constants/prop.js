import PropTypes from "prop-types";

export const PROP = {
  CHILDREN: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  REF: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  USER: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
  get USERS() {
    return PropTypes.arrayOf(this.USER);
  },
  BUSINESS: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    ownerId: PropTypes.string.isRequired,
    employeeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    avatar: PropTypes.string,
  }),
  get BUSINESSES() {
    return PropTypes.arrayOf(this.BUSINESS);
  },
  CONNECTION: PropTypes.shape({
    type: PropTypes.string.isRequired,
    accessToken: PropTypes.string,
    refreshToken: PropTypes.string,
    userId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  get CONNECTIONS() {
    return PropTypes.arrayOf(this.CONNECTION);
  },
  get PANEL() {
    return PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      businessId: PropTypes.string,
      business: this.BUSINESS,
    });
  },
  get PANELS() {
    return PropTypes.arrayOf(this.PANEL);
  },
};

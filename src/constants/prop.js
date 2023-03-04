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
  WIDGET: PropTypes.shape({
    panelId: PropTypes.string.isRequired,
    selector: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      connectionId: PropTypes.string.isRequired,
    }).isRequired,
    metricName: PropTypes.string.isRequired,
    chartType: PropTypes.string.isRequired,
    dimensionName: PropTypes.string,
    timespan: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string,
    filters: PropTypes.arrayOf(
      PropTypes.shape({
        fieldName: PropTypes.string.isRequired,
        operator: PropTypes.string.isRequired,
        operand: PropTypes.string.isRequired,
      })
    ),
    layout: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      w: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
    }),
    report: PropTypes.shape({
      type: PropTypes.string.isRequired,
      // eslint-disable-next-line react/forbid-prop-types
      rows: PropTypes.arrayOf(PropTypes.object),
      error: PropTypes.string,
    }),
  }),
  get WIDGETS() {
    return PropTypes.arrayOf(this.WIDGET);
  },
  CHART_DATA: PropTypes.arrayOf(
    PropTypes.shape({
      metric: PropTypes.number.isRequired,
      dimension: PropTypes.string,
    })
  ),
  LAYOUT: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      w: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
    })
  ),
};

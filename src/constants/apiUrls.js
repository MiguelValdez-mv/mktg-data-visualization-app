import { LINKS } from "./links";

export const API_URLS = {
  USERS: `${LINKS.API}/users`,
  USER_BY_EMAIL_EXISTS: (email) =>
    `${LINKS.API}/users/user-by-email-exists/${email}`,
  USER_BY_ID: (id) => `${LINKS.API}/users/user-by-id/${id}`,
  USER_BY_SESSION: `${LINKS.API}/users/user-by-session`,

  BUSINESSES: `${LINKS.API}/businesses`,
  BUSINESS_BY_ID: (id) => `${LINKS.API}/businesses/business-by-id/${id}`,
  BUSINESS_EMPLOYEES: (id) =>
    `${LINKS.API}/businesses/business-by-id/${id}/employees`,
  BUSINESSES_BY_USER_ID: (id) =>
    `${LINKS.API}/businesses/businesses-by-user-id/${id}`,

  CONNECTIONS: `${LINKS.API}/connections`,
  CONNECTIONS_METADATA: `${LINKS.API}/connections/metadata`,
  REPORTS: `${LINKS.API}/connections/reports`,

  PANELS: `${LINKS.API}/panels`,
  PANEL_BY_ID: (id) => `${LINKS.API}/panels/panel-by-id/${id}`,
  PANELS_BY_USER_ID: (id) => `${LINKS.API}/panels/panels-by-user-id/${id}`,

  WIDGETS_BY_PANEL_ID: (id) => `${LINKS.API}/widgets/widgets-by-panel-id/${id}`,
};

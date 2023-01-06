import PropTypes from "prop-types";

import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { PAGE_ICONS } from "@/router/config";

function View({ title, pathname }) {
  return (
    <Page>
      <Header pathname={pathname} icon={PAGE_ICONS.CONNECTIONS} title={title} />
    </Page>
  );
}

View.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default View;

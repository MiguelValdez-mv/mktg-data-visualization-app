import PropTypes from "prop-types";

import { SearchBar } from "@/components/app/SearchBar";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { COPY } from "@/copy";
import { PAGE_ICONS } from "@/router/config";

function View({ title, pathname }) {
  return (
    <Page>
      <Header
        title={title}
        pathname={pathname}
        icon={PAGE_ICONS.CONNECTIONS}
        bottomContent={
          <SearchBar
            placeholder={COPY["pages.connections.search.placeholder"]}
          />
        }
      />
    </Page>
  );
}

View.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default View;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { BusinessList } from "@/components/app/businesses/BusinessList";
import { Button } from "@/components/atoms/buttons/Button";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({
  isLoading,
  showBusinessCreationBtn,
  businesses,
  deleteBusinesses,
  isDeletingBusinesses,
  businessListActions,
}) {
  return (
    <Page>
      <Header title={COPY["businesses.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        {showBusinessCreationBtn && (
          <>
            <Link className="self-end" to="/businesses/create-business">
              <Button startIcon={<IconAdd />}>
                {COPY["businesses.creation.title"]}
              </Button>
            </Link>
            <Spacing bottom={4} />
          </>
        )}

        <BusinessList
          businesses={businesses}
          businessActions={businessListActions}
          title={COPY["businesses.title"]}
          deleteBusinesses={deleteBusinesses}
          isLoading={isDeletingBusinesses}
        />
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  showBusinessCreationBtn: PropTypes.bool.isRequired,
  businesses: PROP.BUSINESSES,
  deleteBusinesses: PropTypes.func.isRequired,
  isDeletingBusinesses: PropTypes.bool.isRequired,
  businessListActions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default View;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { Button } from "@/components/atoms/buttons/Button";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";

function View({ showBusinessCreationBtn }) {
  return (
    <Page>
      <Header title={COPY["businesses.title"]} />
      <Spacing bottom={8} />

      <Content>
        {showBusinessCreationBtn && (
          <Link className="self-end" to="/businesses/create-business">
            <Button startIcon={<IconAdd />}>
              {COPY["businesses.creation.title"]}
            </Button>
          </Link>
        )}
      </Content>
    </Page>
  );
}

View.propTypes = {
  showBusinessCreationBtn: PropTypes.bool.isRequired,
};

export default View;

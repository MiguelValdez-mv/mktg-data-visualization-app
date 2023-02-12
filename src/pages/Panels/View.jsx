import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { Button } from "@/components/atoms/buttons/Button";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";

function View({ showPanelCreationBtn }) {
  return (
    <Page>
      <Header title={COPY["panels.title"]} />
      <Spacing bottom={8} />

      <Content>
        {showPanelCreationBtn && (
          <>
            <Link className="self-end" to="/panels/create-panel">
              <Button startIcon={<IconAdd />}>
                {COPY["panels.creation.title"]}
              </Button>
            </Link>
            <Spacing bottom={4} />
          </>
        )}
      </Content>
    </Page>
  );
}

View.propTypes = {
  showPanelCreationBtn: PropTypes.bool.isRequired,
};

export default View;

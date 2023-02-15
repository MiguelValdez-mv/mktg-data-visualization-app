import PropTypes from "prop-types";

import { PanelNavbar } from "@/components/app/panels/PanelNavbar";
import { WidgetMenu } from "@/components/app/widgets/WidgetMenu";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({
  widgetMenuIsOpen,
  connectionType,
  setConnectionType,
  isLoading,
  panel,
  openWidgetMenu,
  closeWidgetMenu,
}) {
  return (
    <Page>
      <Header title={COPY["panels.detail.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <PanelNavbar panel={panel} openWidgetMenu={openWidgetMenu} />

        <WidgetMenu
          isOpen={widgetMenuIsOpen}
          close={closeWidgetMenu}
          connectionType={connectionType}
          setConnectionType={setConnectionType}
        />
      </Content>
    </Page>
  );
}

View.propTypes = {
  widgetMenuIsOpen: PropTypes.bool.isRequired,
  connectionType: PropTypes.string,
  setConnectionType: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  panel: PROP.PANEL,
  openWidgetMenu: PropTypes.func.isRequired,
  closeWidgetMenu: PropTypes.func.isRequired,
};

export default View;

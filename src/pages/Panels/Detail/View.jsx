import PropTypes from "prop-types";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { IconMenuRight } from "@/assets/svgs/IconMenuRight";
import { IconSettings } from "@/assets/svgs/IconSettings";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Page } from "@/components/layout/Page";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";

function View({
  panelSettingsPath,
  isLargeScreen,
  isLoading,
  panelName,
  currentUserIsAdmin,
}) {
  return (
    <Page>
      <Header title={COPY["panels.detail.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <Row className="justify-between items-center">
          <Text subtitle bold>
            {panelName}
          </Text>

          {isLargeScreen ? (
            <Row>
              <Link to={panelSettingsPath}>
                <Button variant="outline-primary" startIcon={<IconSettings />}>
                  {COPY["panels.detail.settings"]}
                </Button>
              </Link>

              {currentUserIsAdmin && (
                <>
                  <Spacing left={2} />
                  <Button startIcon={<IconAdd />}>
                    {COPY["panels.detail.addWidget"]}
                  </Button>
                </>
              )}
            </Row>
          ) : (
            <Menu
              trigger={
                <IconButton primary>
                  <IconMenuRight />
                </IconButton>
              }
              position="bottom right"
            >
              {(close) => (
                <>
                  {currentUserIsAdmin && (
                    <MenuOption startIcon={<IconAdd />} close={close}>
                      {COPY["panels.detail.addWidget"]}
                    </MenuOption>
                  )}

                  <MenuOption startIcon={<IconSettings />} close={close}>
                    {COPY["panels.detail.settings"]}
                  </MenuOption>
                </>
              )}
            </Menu>
          )}
        </Row>
      </Content>
    </Page>
  );
}

View.propTypes = {
  panelSettingsPath: PropTypes.string.isRequired,
  isLargeScreen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  panelName: PropTypes.string,
  currentUserIsAdmin: PropTypes.bool.isRequired,
};

export default View;

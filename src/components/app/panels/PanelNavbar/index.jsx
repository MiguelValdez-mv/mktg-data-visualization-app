import PropTypes from "prop-types";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { IconMenuRight } from "@/assets/svgs/IconMenuRight";
import { IconSettings } from "@/assets/svgs/IconSettings";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { useDimensions } from "@/hooks/useDimensions";
import { isAdminUser } from "@/utils/checkUserRole";

export function PanelNavbar({ panel = {}, openWidgetMenu }) {
  const { isLargeScreen } = useDimensions();
  const { user } = useAuth();

  const { _id, name = "" } = panel;
  const panelSettingsPath = `/panels/${_id}/settings`;

  const currentUserIsAdmin = isAdminUser(user);

  const handleClickOnAddWidgetOpt = () => openWidgetMenu();

  return (
    <Row className="justify-between items-center">
      <Text subtitle bold>
        {name}
      </Text>

      {isLargeScreen ? (
        <Row>
          <Link to={panelSettingsPath}>
            <Button variant="outline-primary" startIcon={<IconSettings />}>
              {COPY["panelNavbar.settings"]}
            </Button>
          </Link>

          {currentUserIsAdmin && (
            <>
              <Spacing left={2} />
              <Button
                onClick={handleClickOnAddWidgetOpt}
                startIcon={<IconAdd />}
              >
                {COPY["panelNavbar.addWidget"]}
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
                <MenuOption
                  onClick={handleClickOnAddWidgetOpt}
                  startIcon={<IconAdd />}
                  close={close}
                >
                  {COPY["panelNavbar.addWidget"]}
                </MenuOption>
              )}

              <Link to={panelSettingsPath}>
                <MenuOption startIcon={<IconSettings />} close={close}>
                  {COPY["panelNavbar.settings"]}
                </MenuOption>
              </Link>
            </>
          )}
        </Menu>
      )}
    </Row>
  );
}

PanelNavbar.propTypes = {
  panel: PROP.PANEL,
  openWidgetMenu: PropTypes.func.isRequired,
};

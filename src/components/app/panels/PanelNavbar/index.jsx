import PropTypes from "prop-types";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { IconMenuRight } from "@/assets/svgs/IconMenuRight";
import { IconSave } from "@/assets/svgs/IconSave";
import { IconSettings } from "@/assets/svgs/IconSettings";
import { Link } from "@/components/atoms/Link";
import { Spinner } from "@/components/atoms/Spinner";
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

export function PanelNavbar({ panel = {}, openWidgetMenu, isLoading }) {
  const { isLargeScreen } = useDimensions();
  const { user } = useAuth();

  const { _id, name = "" } = panel;
  const panelSettingsPath = `/panels/${_id}/settings`;

  const currentUserIsAdmin = isAdminUser(user);

  return (
    <Row className="justify-between items-center">
      <Row>
        <Text subtitle bold>
          {name}
        </Text>

        {isLoading && (
          <Spacing left={2}>
            <Spinner primary />
          </Spacing>
        )}
      </Row>

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
              <Button variant="outline-primary" startIcon={<IconSave />}>
                {COPY["panelNavbar.saveChanges"]}
              </Button>

              <Spacing left={2} />
              <Button onClick={openWidgetMenu} startIcon={<IconAdd />}>
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
                <>
                  <MenuOption
                    onClick={openWidgetMenu}
                    startIcon={<IconAdd />}
                    close={close}
                  >
                    {COPY["panelNavbar.addWidget"]}
                  </MenuOption>

                  <MenuOption startIcon={<IconSave />} close={close}>
                    {COPY["panelNavbar.saveChanges"]}
                  </MenuOption>
                </>
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
  isLoading: PropTypes.bool,
};

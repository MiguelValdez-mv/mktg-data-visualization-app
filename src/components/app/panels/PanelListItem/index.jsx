import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { HorizontalMenuIcon } from "@/assets/svgs/HorizontalMenuIcon";
import { IconChartLine } from "@/assets/svgs/IconChartLine";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { isAdminUser } from "@/utils/checkUserRole";

export function PanelListItem({ panel = {}, deletePanel }) {
  const { user } = useAuth();

  const {
    _id,
    name,
    description,
    business: { name: businessName } = {},
  } = panel;

  return (
    <Col className="justify-between">
      {isAdminUser(user) && (
        <>
          <Menu
            trigger={
              <IconButton className="self-end" primary>
                <HorizontalMenuIcon />
              </IconButton>
            }
            position="bottom right"
          >
            {(close) => (
              <MenuOption onClick={() => deletePanel(_id)} close={close}>
                {COPY["panelListItem.delete"]}
              </MenuOption>
            )}
          </Menu>
          <Spacing bottom={2} />
        </>
      )}

      <Col className="h-44 bg-primary justify-center items-center rounded-xl drop-shadow-surface">
        <IconChartLine className="text-white" />
      </Col>
      <Spacing bottom={2} />

      <Col>
        <Text bold>{name}</Text>

        <Text className="sm:truncate" muted>
          {description || "-"}
        </Text>
      </Col>
      <Spacing bottom={2} />

      <Text bold>{COPY["panelListItem.businessName"](businessName)}</Text>
      <Spacing bottom={2} />

      <Link to={`/panels/${_id}`}>
        <Button className="w-full" variant="outline-primary">
          {COPY["panelListItem.viewDetail"]}
        </Button>
      </Link>
    </Col>
  );
}

PanelListItem.propTypes = {
  panel: PROP.PANEL.isRequired,
  deletePanel: PropTypes.func.isRequired,
};

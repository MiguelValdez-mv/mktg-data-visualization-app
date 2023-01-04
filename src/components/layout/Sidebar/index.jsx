import { IconBriefcase } from "@/assets/svgs/IconBriefcase";
import { IconCircleUser } from "@/assets/svgs/IconCircleUser";
import { IconExit } from "@/assets/svgs/IconExit";
import { IconStatsChart } from "@/assets/svgs/IconStatsChart";
import { IconTransitConnection } from "@/assets/svgs/IconTransitConnection";
import { OpenTechLogo } from "@/assets/svgs/OpenTechLogo";
import { Divider } from "@/components/atoms/Divider";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Trigger } from "@/components/layout/Menu/Trigger";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";
import { isUserAdmin } from "@/utils/isUserAdmin";

import { SidebarOption } from "./SidebarOption";

export function Sidebar({ user }) {
  return (
    <Col className="max-w-xs w-full h-screen p-8">
      <Spacing horizontal={4} bottom={3}>
        <OpenTechLogo />
      </Spacing>

      <Divider />

      <Col className="flex-1 justify-around">
        <Col>
          {isUserAdmin(user) && (
            <>
              <SidebarOption
                to="/usuarios"
                name={COPY["app.sidebar.users"]}
                icon={IconCircleUser}
              />
              <Spacing bottom={1} />

              <SidebarOption
                to="/conexiones"
                name={COPY["app.sidebar.connections"]}
                icon={IconTransitConnection}
              />
              <Spacing bottom={1} />
            </>
          )}

          <SidebarOption
            to="/negocios"
            name={COPY["app.sidebar.businesses"]}
            icon={IconBriefcase}
          />
          <Spacing bottom={1} />

          <SidebarOption
            to="/paneles"
            name={COPY["app.sidebar.panels"]}
            icon={IconStatsChart}
          />
        </Col>

        <Menu
          trigger={
            <Trigger
              className="justify-start border-muted text-muted"
              variant="outline"
              renderLeft={
                <>
                  <Row className="bg-muted p-2 rounded-full">
                    <IconCircleUser className="w-6 h-6 text-white" />
                  </Row>
                  <Spacing right={2} />
                </>
              }
            >
              {user.fullName}
            </Trigger>
          }
        >
          <MenuOption
            renderLeft={
              <>
                <IconExit className="w-6 h-6" />
                <Spacing right={2} />
              </>
            }
          >
            {COPY["app.sidebar.logout"]}
          </MenuOption>
        </Menu>
      </Col>
    </Col>
  );
}

Sidebar.propTypes = {
  user: PROP.USER.isRequired,
};

import { useNavigate } from "react-router-dom";

import { IconBriefcase } from "@/assets/svgs/IconBriefcase";
import { IconChevronDoubleLeft } from "@/assets/svgs/IconChevronDoubleLeft";
import { IconCircleUser } from "@/assets/svgs/IconCircleUser";
import { IconExit } from "@/assets/svgs/IconExit";
import { IconStatsChart } from "@/assets/svgs/IconStatsChart";
import { IconTransitConnection } from "@/assets/svgs/IconTransitConnection";
import { OpenTechLogo } from "@/assets/svgs/OpenTechLogo";
import { Button } from "@/components/atoms/Button";
import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { Divider } from "@/components/atoms/Divider";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";
import { COPY } from "@/copy";
import { useAlert } from "@/hooks/useAlert";
import { useDimensions } from "@/hooks/useDimensions";
import { useLogout } from "@/hooks/useLogout";
import { useSidebar } from "@/hooks/useSidebar";
import { isUserAdmin } from "@/utils/isUserAdmin";
import { twMerge } from "@/utils/twMerge";

import { SidebarOption } from "./SidebarOption";

export function Sidebar({ user }) {
  const logoutMutation = useLogout();
  const alert = useAlert();
  const navigate = useNavigate();
  const { isLargeScreen } = useDimensions();
  const { isSidebarOpen, closeSidebar } = useSidebar();

  const onClickLogoutOpt = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        navigate("/");
        closeSidebar();
      },
      onError: (err) => alert.error(err.message),
    });
  };

  return (
    <Col
      className={twMerge(
        "max-w-xs w-full h-screen bg-tertiary p-8 ease-in-out duration-300",
        !isLargeScreen && "fixed top-0 left-0 drop-shadow-surface",
        !isLargeScreen && !isSidebarOpen && "-translate-x-full"
      )}
    >
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
                name={COPY["pages.users.title"]}
                icon={IconCircleUser}
                closeSidebar={closeSidebar}
              />
              <Spacing bottom={1} />

              <SidebarOption
                to="/conexiones"
                name={COPY["pages.connections.title"]}
                icon={IconTransitConnection}
                closeSidebar={closeSidebar}
              />
              <Spacing bottom={1} />
            </>
          )}

          <SidebarOption
            to="/negocios"
            name={COPY["pages.businesses.title"]}
            icon={IconBriefcase}
            closeSidebar={closeSidebar}
          />
          <Spacing bottom={1} />

          <SidebarOption
            to="/paneles"
            name={COPY["pages.panels.title"]}
            icon={IconStatsChart}
            closeSidebar={closeSidebar}
          />
        </Col>

        <Menu
          trigger={
            <Button
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
            </Button>
          }
        >
          <MenuOption
            onClick={onClickLogoutOpt}
            isLoading={logoutMutation.isLoading}
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

      {!isLargeScreen && (
        <Surface className="self-center p-2">
          <ButtonIcon
            iconClassName="w-6 h-6 text-primary"
            onClick={closeSidebar}
            icon={IconChevronDoubleLeft}
          />
        </Surface>
      )}
    </Col>
  );
}

Sidebar.propTypes = {
  user: PROP.USER.isRequired,
};

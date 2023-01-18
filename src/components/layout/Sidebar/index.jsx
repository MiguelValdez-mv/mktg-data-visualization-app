import { useNavigate } from "react-router-dom";

import { IconChevronLeft } from "@/assets/svgs/IconChevronLeft";
import { IconExit } from "@/assets/svgs/IconExit";
import { OpenTechLogo } from "@/assets/svgs/OpenTechLogo";
import { Avatar } from "@/components/atoms/Avatar";
import { Button } from "@/components/atoms/Button";
import { Divider } from "@/components/atoms/Divider";
import { IconButton } from "@/components/atoms/IconButton";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";
import { COPY } from "@/copy";
import { useLogout } from "@/hooks/auth/useLogout";
import { useAlert } from "@/hooks/useAlert";
import { useDimensions } from "@/hooks/useDimensions";
import { useSidebar } from "@/hooks/useSidebar";
import { PAGE_ICONS } from "@/router/config";
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
        "max-w-xs w-full h-screen bg-tertiary p-5 ease-in-out duration-300 z-50",
        !isLargeScreen && "fixed top-0 left-0 drop-shadow-surface",
        !isLargeScreen && !isSidebarOpen && "-translate-x-full"
      )}
    >
      <OpenTechLogo className="w-auto h-auto px-10" />
      <Spacing bottom={3} />

      <Divider />

      <Col className="flex-1 justify-around">
        <Col>
          {isUserAdmin(user) && (
            <>
              <SidebarOption
                to="/users"
                name={COPY["pages.users.title"]}
                icon={PAGE_ICONS.USERS}
                closeSidebar={closeSidebar}
              />
              <Spacing bottom={1} />

              <SidebarOption
                to="/connections"
                name={COPY["pages.connections.title"]}
                icon={PAGE_ICONS.CONNECTIONS}
                closeSidebar={closeSidebar}
              />
              <Spacing bottom={1} />
            </>
          )}

          <SidebarOption
            to="/businesses"
            name={COPY["pages.businesses.title"]}
            icon={PAGE_ICONS.BUSINESSES}
            closeSidebar={closeSidebar}
          />
          <Spacing bottom={1} />

          <SidebarOption
            to="/panels"
            name={COPY["pages.panels.title"]}
            icon={PAGE_ICONS.PANELS}
            closeSidebar={closeSidebar}
          />
        </Col>

        <Menu
          trigger={
            <Button
              className="justify-start border-muted text-muted"
              variant="outline"
              startIcon={<Avatar name={user.name} src={user.avatar} />}
            >
              {user.name}
            </Button>
          }
        >
          <MenuOption
            onClick={onClickLogoutOpt}
            isLoading={logoutMutation.isLoading}
            startIcon={<IconExit />}
          >
            {COPY["sidebar.logout"]}
          </MenuOption>
        </Menu>
      </Col>

      {!isLargeScreen && (
        <Surface className="self-center p-2">
          <IconButton onClick={closeSidebar} primary>
            <IconChevronLeft />
          </IconButton>
        </Surface>
      )}
    </Col>
  );
}

Sidebar.propTypes = {
  user: PROP.USER.isRequired,
};

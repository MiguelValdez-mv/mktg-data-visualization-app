import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { IconBriefcase } from "@/assets/svgs/IconBriefcase";
import { IconCircleUser } from "@/assets/svgs/IconCircleUser";
import { IconExit } from "@/assets/svgs/IconExit";
import { IconStatsChart } from "@/assets/svgs/IconStatsChart";
import { IconTransitConnection } from "@/assets/svgs/IconTransitConnection";
import { OpenTechLogo } from "@/assets/svgs/OpenTechLogo";
import { Button } from "@/components/atoms/Button";
import { Divider } from "@/components/atoms/Divider";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { PROP, QUERY_KEYS } from "@/constants";
import { COPY } from "@/copy";
import { useAuth } from "@/hooks/useAuth";
import { useLogout } from "@/hooks/useLogout";
import { isUserAdmin } from "@/utils/isUserAdmin";

import { SidebarOption } from "./SidebarOption";

export function Sidebar({ user }) {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const logoutMutation = useLogout();
  const queryClient = useQueryClient();

  const onClickLogoutOpt = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        queryClient.invalidateQueries([QUERY_KEYS.DOES_SESSION_EXIST]);
      },
      onError: (err) => alert.error(err.message),
    });
  };

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
    </Col>
  );
}

Sidebar.propTypes = {
  user: PROP.USER.isRequired,
};

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { IconMenu } from "@/assets/svgs/IconMenu";
import { Text } from "@/components/atoms/Text";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { COPY } from "@/copy";
import { useDimensions } from "@/hooks/useDimensions";
import { useSidebar } from "@/hooks/useSidebar";
import { PAGE_ICONS } from "@/router/config";

export function Header({ title, topContent = null, bottomContent = null }) {
  const { openSidebar } = useSidebar();
  const { isLargeScreen } = useDimensions();
  const { pathname } = useLocation();

  const isMainRoute = [
    "/users",
    "/connections",
    "/businesses",
    "/panels",
  ].includes(pathname);
  const [, pathnameBase] = pathname.split("/");

  const Icon = PAGE_ICONS[pathnameBase.toUpperCase()];

  return (
    <Surface className="bg-transparent lg:bg-white lg:flex-row lg:justify-between lg:items-center">
      {topContent && (
        <>
          {topContent}
          <Spacing spacing={1} />
        </>
      )}

      <Row className="justify-between">
        {!isLargeScreen && (
          <IconButton onClick={openSidebar} primary>
            <IconMenu />
          </IconButton>
        )}

        <Col>
          {isLargeScreen && (
            <>
              <Row className="items-center">
                <Icon className="text-muted w-4 h-4" />
                <Spacing right={1} />

                <Text muted bold small>
                  /
                </Text>
                <Spacing right={1} />

                {!isMainRoute && (
                  <>
                    <Text capitalize small>
                      {COPY[`pages.${pathnameBase.toLowerCase()}.title`]}
                    </Text>
                    <Spacing right={1} />

                    <Text muted bold small>
                      /
                    </Text>
                    <Spacing right={1} />
                  </>
                )}

                <Text small>{title}</Text>
              </Row>
              <Spacing bottom={1} />
            </>
          )}

          <Text bold>{title}</Text>
        </Col>
      </Row>

      {bottomContent && (
        <>
          <Spacing spacing={1} />
          {bottomContent}
        </>
      )}
    </Surface>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  topContent: PropTypes.node,
  bottomContent: PropTypes.node,
};

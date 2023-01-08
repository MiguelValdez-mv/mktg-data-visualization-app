import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { IconMenu } from "@/assets/svgs/IconMenu";
import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { useDimensions } from "@/hooks/useDimensions";
import { useSidebar } from "@/hooks/useSidebar";

export function Header({ title, topContent = null, bottomContent = null }) {
  const { openSidebar } = useSidebar();
  const { isLargeScreen } = useDimensions();
  const { pathname } = useLocation();

  const splitPathname = pathname.split("/").filter(Boolean);

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
          <ButtonIcon
            iconClassName="w-6 h-6 text-primary"
            onClick={openSidebar}
            icon={IconMenu}
          />
        )}

        <Col>
          {isLargeScreen && (
            <>
              <Row className="items-center">
                {/* <Icon className="text-muted" />
                <Spacing right={1} /> */}

                {splitPathname.map((s) => (
                  <Row key={s}>
                    <Text muted bold>
                      /
                    </Text>
                    <Spacing right={1} />

                    <Text capitalize>{s}</Text>
                    <Spacing right={1} />
                  </Row>
                ))}
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

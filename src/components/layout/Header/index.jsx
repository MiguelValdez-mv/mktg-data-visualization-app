import PropTypes from "prop-types";

import { IconMenu } from "@/assets/svgs/IconMenu";
import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { useDimensions } from "@/hooks/useDimensions";
import { useSidebar } from "@/hooks/useSidebar";

export function Header({
  pathname,
  icon: Icon,
  title,
  topContent = null,
  bottomContent = null,
}) {
  const { openSidebar } = useSidebar();
  const { isLargeScreen } = useDimensions();

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
            <Row className="items-center">
              <Icon className="text-muted" />
              <Spacing right={1} />

              {pathname.split("/").map((s) => (
                <Row key={s}>
                  <Text muted bold>
                    /
                  </Text>
                  <Spacing right={1} />

                  <Text>{s}</Text>
                  <Spacing right={1} />
                </Row>
              ))}
            </Row>
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
  pathname: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  topContent: PropTypes.node,
  bottomContent: PropTypes.node,
};

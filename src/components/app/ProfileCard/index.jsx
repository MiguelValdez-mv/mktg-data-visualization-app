import PropTypes from "prop-types";

import { IconChevronRight } from "@/assets/svgs/IconChevronRight";
import { Avatar } from "@/components/atoms/Avatar";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";

export function ProfileCard({ name, email, avatar, pressable, onClick }) {
  const content = (
    <Row className="items-center">
      <Avatar name={name} src={avatar} />
      <Spacing right={2} />

      <Col className="justify-center">
        <Text bold>{name}</Text>

        {email && <Text muted>{email}</Text>}
      </Col>
    </Row>
  );

  return pressable ? (
    <Button
      className="justify-between font-normal text-start"
      variant="none"
      onClick={onClick}
      endIcon={<IconChevronRight className="text-muted" />}
    >
      {content}
    </Button>
  ) : (
    content
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string,
  pressable: PropTypes.bool,
  onClick: PropTypes.func,
};

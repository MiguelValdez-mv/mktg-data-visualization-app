import PropTypes from "prop-types";

import { Avatar } from "@/components/atoms/Avatar";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";

export function ProfileCard({ name, email, avatar }) {
  return (
    <Row className="items-center">
      <Avatar name={name} email={email} src={avatar} />
      <Spacing right={2} />

      <Col className="justify-center">
        <Text bold>{name}</Text>

        {email && <Text muted>{email}</Text>}
      </Col>
    </Row>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

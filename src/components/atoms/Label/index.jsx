import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";

export function Label({ children }) {
  return (
    <Col>
      <Text bold>{children}</Text>
      <Spacing bottom={1} />
    </Col>
  );
}

Label.propTypes = {
  children: PROP.CHILDREN.isRequired,
};

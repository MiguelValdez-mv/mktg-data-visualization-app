import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { COPY } from "@/copy";

function View() {
  return (
    <Col className="h-screen justify-around items-center">
      <Text caption bold>
        {COPY["page.login.welcome"]}
      </Text>

      <Surface>
        <Input placeholder={COPY["page.login.email"]} />
        <Spacing bottom={2} />

        <Button>{COPY["page.login.cta"]}</Button>
      </Surface>

      <Text muted small>
        {COPY["page.login.productCreatedBy"]}
      </Text>
    </Col>
  );
}

export default View;

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { COPY } from "@/copy";

function View() {
  return (
    <Col className=" items-center">
      <Text caption bold>
        {COPY["page.login.welcome"]}
      </Text>
      <Spacing bottom={10} />

      <Surface>
        <Input placeholder={COPY["page.login.email"]} />
        <Spacing bottom={4} />

        <Button>
          <Text bold>{COPY["page.login.cta"]}</Text>
        </Button>
      </Surface>
    </Col>
  );
}

export default View;

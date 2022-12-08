import { OpenTechDarkLogo } from "@/assets/svgs/OpenTechDarkLogo";
import { OpenTechLogo } from "@/assets/svgs/OpenTechLogo";
import { IconSquareFacebook } from "@/assets/svgs/reactSvgIcons/IconSquareFacebook";
import { IconSquareInstagram } from "@/assets/svgs/reactSvgIcons/IconSquareInstagram";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { COPY } from "@/copy";

function View() {
  return (
    <Col className="h-screen justify-around items-center">
      <Text caption bold>
        {COPY["page.login.welcome"]}
      </Text>

      <Surface className="py-20">
        <Spacing horizontal={6} bottom={4}>
          <OpenTechLogo />
        </Spacing>

        <Input placeholder={COPY["page.login.email"]} />
        <Spacing bottom={2} />

        <Button>{COPY["page.login.cta"]}</Button>
      </Surface>

      <Col>
        <Row className="justify-center">
          <IconSquareFacebook width={25} height={25} className="fill-third" />
          <Spacing right={1} />

          <IconSquareInstagram width={25} height={25} className="fill-third" />
        </Row>
        <Spacing bottom={2} />

        <Row>
          <Text className="whitespace-nowrap" muted small>
            {COPY["page.login.productCreatedBy"]}
          </Text>
          <Spacing right={1} />

          <OpenTechDarkLogo width={100} />
        </Row>
      </Col>
    </Col>
  );
}

export default View;

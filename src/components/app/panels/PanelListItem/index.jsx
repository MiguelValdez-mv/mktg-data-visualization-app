import { IconChartLine } from "@/assets/svgs/IconChartLine";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

export function PanelListItem({ panel = {} }) {
  const {
    name,
    description,
    business: { name: businessName },
  } = panel;

  return (
    <Col className="justify-between">
      <Col className="h-40 bg-primary justify-center items-center rounded-xl drop-shadow-surface">
        <IconChartLine className="text-white" />
      </Col>
      <Spacing bottom={2} />

      <Col>
        <Text bold>{name}</Text>

        {description && <Text muted>{description}</Text>}
      </Col>
      <Spacing bottom={2} />

      <Text bold>{COPY["panelListItem.businessName"](businessName)}</Text>
      <Spacing bottom={4} />

      <Button variant="outline-primary">
        {COPY["panelListItem.viewDetail"]}
      </Button>
    </Col>
  );
}

PanelListItem.propTypes = {
  panel: PROP.PANEL,
};

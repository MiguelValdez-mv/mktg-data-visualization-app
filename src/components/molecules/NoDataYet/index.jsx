import { IconDocumentList } from "@/assets/svgs/IconDocumentList";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";

export function NoDataYet() {
  return (
    <Col className="items-center">
      <IconDocumentList className="text-muted w-24 h-24" />
      <Spacing bottom={1} />

      <Text bold>{COPY.noDataYet}</Text>
    </Col>
  );
}

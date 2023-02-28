import { PropTypes } from "prop-types";

import { IconDocumentList } from "@/assets/svgs/IconDocumentList";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";
import { twMerge } from "@/utils/twMerge";

export function NoDataYet({
  className,
  icon,
  defaultIconClassName,
  msg = COPY.noDataYet,
}) {
  return (
    <Col className={twMerge("justify-center items-center", className)}>
      {icon ?? (
        <IconDocumentList
          className={twMerge("text-muted w-24 h-24", defaultIconClassName)}
        />
      )}
      <Spacing bottom={1} />

      <Text bold truncate>
        {msg}
      </Text>
    </Col>
  );
}

NoDataYet.propTypes = {
  className: PropTypes.string,
  icon: PROP.CHILDREN,
  defaultIconClassName: PropTypes.string,
  msg: PropTypes.string,
};

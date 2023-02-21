import PropTypes from "prop-types";
import Popup from "reactjs-popup";

import { IconClose } from "@/assets/svgs/IconClose";
import { Text } from "@/components/atoms/Text";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP, BREAKPOINTS } from "@/constants";
import { useDimensions } from "@/hooks/useDimensions";
import { twMerge } from "@/utils/twMerge";

export function Modal({
  breakpoint = BREAKPOINTS.SMALL,
  title,
  trigger,
  nested = false,
  fullScreenOnMobile,
  children,
}) {
  const { isLargeScreen } = useDimensions({ breakpoint });

  return (
    <Popup className="modal" trigger={trigger} nested={nested} modal>
      {(close) => (
        <Surface
          className={twMerge(
            "p-0",
            fullScreenOnMobile && !isLargeScreen && "w-screen h-screen"
          )}
        >
          <Row className="justify-between p-4">
            <Text subtitle bold>
              {title}
            </Text>

            <IconButton onClick={close} muted>
              <IconClose />
            </IconButton>
          </Row>
          <Spacing bottom={2} />

          <Col
            className={twMerge(
              "p-4 overflow-y-auto",
              fullScreenOnMobile && isLargeScreen && "max-h-80"
            )}
          >
            {typeof children === "function" ? children(close) : children}
          </Col>
        </Surface>
      )}
    </Popup>
  );
}

Modal.propTypes = {
  breakpoint: PropTypes.number,
  title: PropTypes.string.isRequired,
  trigger: PROP.CHILDREN.isRequired,
  nested: PropTypes.bool,
  fullScreenOnMobile: PropTypes.bool,
  children: PROP.CHILDREN.isRequired,
};

import PropTypes from "prop-types";
import Popup from "reactjs-popup";

import { IconClose } from "@/assets/svgs/IconClose";
import { Text } from "@/components/atoms/Text";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP, BREAKPOINTS } from "@/constants";
import { useDimensions } from "@/hooks/useDimensions";

export function Modal({
  breakpoint = BREAKPOINTS.SMALL,
  title,
  trigger,
  fullScreenOnMobile,
  children,
}) {
  const { isLargeScreen } = useDimensions({ breakpoint });
  const className =
    fullScreenOnMobile && !isLargeScreen ? "w-screen h-screen" : "";

  return (
    <Popup className="modal" trigger={trigger} modal>
      {(close) => (
        <Surface className={className}>
          <Row className="justify-between">
            <Text subtitle bold>
              {title}
            </Text>

            <IconButton onClick={close} muted>
              <IconClose />
            </IconButton>
          </Row>
          <Spacing bottom={4} />

          {typeof children === "function" ? children(close) : children}
        </Surface>
      )}
    </Popup>
  );
}

Modal.propTypes = {
  breakpoint: PropTypes.number,
  title: PropTypes.string.isRequired,
  trigger: PROP.CHILDREN.isRequired,
  fullScreenOnMobile: PropTypes.bool,
  children: PROP.CHILDREN.isRequired,
};

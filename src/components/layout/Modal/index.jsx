import PropTypes from "prop-types";
import Popup from "reactjs-popup";

import { IconClose } from "@/assets/svgs/IconClose";
import { Text } from "@/components/atoms/Text";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Modal({ title, trigger, fullScreenOnMobile, children }) {
  return (
    <Popup className="modal" trigger={trigger} modal>
      {(close) => (
        <Surface
          className={twMerge(
            fullScreenOnMobile && "w-screen h-screen sm:w-auto sm:h-auto"
          )}
        >
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
  title: PropTypes.string.isRequired,
  trigger: PROP.CHILDREN.isRequired,
  fullScreenOnMobile: PropTypes.bool,
  children: PROP.CHILDREN.isRequired,
};

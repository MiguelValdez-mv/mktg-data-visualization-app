import PropTypes from "prop-types";
import Popup from "reactjs-popup";

import { IconClose } from "@/assets/svgs/IconClose";
import { Text } from "@/components/atoms/Text";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";

export function Modal({ title, trigger, children }) {
  return (
    <Popup className="modal" trigger={trigger} modal>
      {(closeModal) => (
        <Surface>
          <Row className="justify-between">
            <Text subtitle bold>
              {title}
            </Text>

            <IconButton className="self-end" onClick={closeModal} muted>
              <IconClose />
            </IconButton>
          </Row>
          <Spacing bottom={4} />

          {typeof children === "function" ? children(closeModal) : children}
        </Surface>
      )}
    </Popup>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  trigger: PROP.CHILDREN.isRequired,
  children: PROP.CHILDREN.isRequired,
};

import PropTypes from "prop-types";

import { HorizontalMenuIcon } from "@/assets/svgs/HorizontalMenuIcon";
import { Text } from "@/components/atoms/Text";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";
import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { isAdminUser } from "@/utils/checkUserRole";

export function Widget({ idx, widget, onClickEditOpt, onClickDeleteOpt }) {
  const { user } = useAuth();

  const { title } = widget;

  const handleClickEditOpt = () => onClickEditOpt(widget, idx);
  const handleClickDeleteOpt = () => onClickDeleteOpt(widget, idx);

  return (
    <Surface className="w-full h-full">
      <Row className="justify-between">
        {title && <Text bold>{title}</Text>}

        {isAdminUser(user) && (
          <>
            <Spacing left={2} />
            <Menu
              trigger={
                <IconButton className="self-end" primary>
                  <HorizontalMenuIcon />
                </IconButton>
              }
              position="bottom right"
            >
              {(close) => (
                <>
                  <MenuOption onClick={handleClickEditOpt} close={close}>
                    {COPY["widget.edit"]}
                  </MenuOption>

                  <MenuOption onClick={handleClickDeleteOpt} close={close}>
                    {COPY["widget.delete"]}
                  </MenuOption>
                </>
              )}
            </Menu>
          </>
        )}
      </Row>
    </Surface>
  );
}

Widget.propTypes = {
  idx: PropTypes.number.isRequired,
  widget: PROP.WIDGET.isRequired,
  onClickEditOpt: PropTypes.func.isRequired,
  onClickDeleteOpt: PropTypes.func.isRequired,
};

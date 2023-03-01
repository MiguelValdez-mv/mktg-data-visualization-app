import PropTypes from "prop-types";
import { forwardRef } from "react";

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
import { shortenArrayByMaxLength } from "@/utils/shortenArrayByMaxLength";

import { WidgetChart } from "../WidgetChart";

export const Widget = forwardRef(
  ({ widget, onClickEditOpt, onClickDeleteOpt, children, ...rest }, ref) => {
    const { user } = useAuth();

    const {
      title,
      metricName,
      chartType,
      dimensionName,
      report: { rows, error },
    } = widget;

    let content = null;
    if (rows.length) {
      const data = shortenArrayByMaxLength(rows).map((row) => ({
        metric: row[metricName],
        ...(dimensionName && { dimension: row[dimensionName] }),
      }));

      const width = parseInt(rest.style.width, 10) - 60;
      const height = parseInt(rest.style.height, 10) - 60;

      content = (
        <WidgetChart
          type={chartType}
          data={data}
          width={width}
          height={height}
        />
      );
    } else {
      content = (
        <Text bold truncate>
          {COPY[`widget.${error ? "anErrorHasOcurred" : "noData"}`]}
        </Text>
      );
    }

    return (
      <div ref={ref} {...rest}>
        <Surface className="w-full h-full">
          <Row className="justify-between items-center">
            {title && (
              <Text bold truncate>
                {title}
              </Text>
            )}

            {isAdminUser(user) && (
              <>
                <Spacing left={2} />
                <Menu
                  trigger={
                    <IconButton primary>
                      <HorizontalMenuIcon />
                    </IconButton>
                  }
                  position="bottom right"
                >
                  {(close) => (
                    <>
                      <MenuOption onClick={onClickEditOpt} close={close}>
                        {COPY["widget.edit"]}
                      </MenuOption>

                      <MenuOption onClick={onClickDeleteOpt} close={close}>
                        {COPY["widget.delete"]}
                      </MenuOption>
                    </>
                  )}
                </Menu>
              </>
            )}
          </Row>
          <Spacing bottom={2} />

          {content}
        </Surface>

        {children}
      </div>
    );
  }
);

Widget.propTypes = {
  widget: PROP.WIDGET.isRequired,
  onClickEditOpt: PropTypes.func.isRequired,
  onClickDeleteOpt: PropTypes.func.isRequired,
  children: PROP.CHILDREN.isRequired,
};

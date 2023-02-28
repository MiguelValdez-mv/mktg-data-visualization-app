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

import { Chart } from "../Chart";

export function Widget({ idx, widget, onClickEditOpt, onClickDeleteOpt }) {
  const { user } = useAuth();

  const {
    title,
    metricName,
    chartType,
    dimensionName,
    report: { rows, error },
  } = widget;

  let content = null;
  if (error) {
    content = (
      <Text bold truncate>
        {COPY["widget.anErrorHasOcurred"]}
      </Text>
    );
  } else if (!rows.length) {
    content = (
      <Text bold truncate>
        {COPY["widget.noData"]}
      </Text>
    );
  } else {
    const data = rows.reduce(
      (acum, curr) => ({
        metricValues: [...acum.metricValues, curr[metricName]],
        dimensionValues: [
          ...acum.dimensionValues,
          ...(dimensionName ? [curr[dimensionName]] : []),
        ],
      }),
      { metricValues: [], dimensionValues: [] }
    );

    content = <Chart type={chartType} {...data} />;
  }

  const handleClickEditOpt = () => onClickEditOpt(widget, idx);
  const handleClickDeleteOpt = () => onClickDeleteOpt(widget, idx);

  return (
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
      <Spacing bottom={2} />

      {content}
    </Surface>
  );
}

Widget.propTypes = {
  idx: PropTypes.number.isRequired,
  widget: PROP.WIDGET.isRequired,
  onClickEditOpt: PropTypes.func.isRequired,
  onClickDeleteOpt: PropTypes.func.isRequired,
};

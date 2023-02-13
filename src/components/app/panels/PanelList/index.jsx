import PropTypes from "prop-types";

import { Text } from "@/components/atoms/Text";
import { GridContainer } from "@/components/layout/GridContainer";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";

import { PanelListItem } from "../PanelListItem";

export function PanelList({ title, panels = [] }) {
  return (
    <Surface>
      <Text subtitle bold>
        {title}
      </Text>
      <Spacing bottom={2} />

      <GridContainer className="gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {panels.map((panel) => (
          <PanelListItem key={panel._id} panel={panel} />
        ))}
      </GridContainer>
    </Surface>
  );
}

PanelList.propTypes = {
  title: PropTypes.string.isRequired,
  panels: PROP.PANELS,
};

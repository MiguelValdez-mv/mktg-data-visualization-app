import PropTypes from "prop-types";

import { Text } from "@/components/atoms/Text";
import { GridContainer } from "@/components/layout/GridContainer";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { NoDataYet } from "@/components/molecules/NoDataYet";
import { PROP } from "@/constants";

import { PanelListItem } from "../PanelListItem";

export function PanelList({ title, panels = [] }) {
  return (
    <Surface>
      <Text subtitle bold>
        {title}
      </Text>
      <Spacing bottom={2} />

      {panels.length ? (
        <GridContainer className="gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {panels.map((panel) => (
            <PanelListItem key={panel._id} panel={panel} />
          ))}
        </GridContainer>
      ) : (
        <NoDataYet />
      )}
    </Surface>
  );
}

PanelList.propTypes = {
  title: PropTypes.string.isRequired,
  panels: PROP.PANELS,
};

import PropTypes from "prop-types";

import { Spinner } from "@/components/atoms/Spinner";
import { Text } from "@/components/atoms/Text";
import { GridContainer } from "@/components/layout/GridContainer";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { NoDataYet } from "@/components/molecules/NoDataYet";
import { PROP } from "@/constants";

import { PanelListItem } from "../PanelListItem";

export function PanelList({ title, panels = [], isLoading, deletePanel }) {
  return (
    <Surface>
      <Row>
        <Text subtitle bold>
          {title}
        </Text>

        {isLoading && (
          <Spacing left={2}>
            <Spinner primary />
          </Spacing>
        )}
      </Row>

      <Spacing bottom={2} />

      {panels.length ? (
        <GridContainer className="gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
          {panels.map((panel) => (
            <PanelListItem
              key={panel._id}
              panel={panel}
              deletePanel={deletePanel}
            />
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
  isLoading: PropTypes.bool.isRequired,
  deletePanel: PropTypes.func.isRequired,
};

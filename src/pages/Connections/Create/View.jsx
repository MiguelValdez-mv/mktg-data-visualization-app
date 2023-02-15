import PropTypes from "prop-types";

import { GoogleAnalyticsLogo } from "@/assets/svgs/GoogleAnalyticsLogo";
import { IconSquareFacebook } from "@/assets/svgs/IconSquareFacebook";
import { Spinner } from "@/components/atoms/Spinner";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { Content } from "@/components/layout/Content";
import { GridContainer } from "@/components/layout/GridContainer";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";

function View({ isLoading, authenticateWithGoogle, authenticateWithFacebook }) {
  return (
    <Page>
      <Header title={COPY["connections.creation.title"]} />
      <Spacing bottom={8} />

      <Content>
        <Row className="items-center">
          <Text subtitle bold>
            {COPY["connections.creation.title"]}
          </Text>

          {isLoading && (
            <Spacing left={2}>
              <Spinner primary />
            </Spacing>
          )}
        </Row>
        <Spacing bottom={4} />

        <GridContainer className="gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Button
            className="p-4"
            variant="surface"
            startIcon={<GoogleAnalyticsLogo />}
            onClick={authenticateWithGoogle}
          >
            {COPY["connections.creation.google_analytics"]}
          </Button>

          <Button
            className="p-4"
            variant="surface"
            startIcon={<IconSquareFacebook className="text-primary" />}
            onClick={authenticateWithFacebook}
          >
            {COPY["connections.creation.facebook_ads"]}
          </Button>
        </GridContainer>
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  authenticateWithGoogle: PropTypes.func.isRequired,
  authenticateWithFacebook: PropTypes.func.isRequired,
};

export default View;

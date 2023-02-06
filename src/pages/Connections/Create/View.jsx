import FacebookLogin from "@greatsumini/react-facebook-login";

import { FacebookAdsLogo } from "@/assets/svgs/FacebookAdsLogo";
import { GoogleAnalyticsLogo } from "@/assets/svgs/GoogleAnalyticsLogo";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { Content } from "@/components/layout/Content";
import { GridContainer } from "@/components/layout/GridContainer";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { ENV } from "@/constants";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header title={COPY["connections.creation.title"]} />
      <Spacing bottom={8} />

      <Content>
        <Text subtitle bold>
          {COPY["connections.creation.title"]}
        </Text>
        <Spacing bottom={4} />

        <GridContainer className="gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Button
            className="p-4"
            variant="surface"
            startIcon={<GoogleAnalyticsLogo />}
          >
            {COPY["connections.creation.googleAnalytics"]}
          </Button>

          <FacebookLogin
            appId={ENV.FACEBOOK_APP_ID}
            render={({ onClick }) => (
              <Button
                className="p-4"
                variant="surface"
                onClick={onClick}
                startIcon={<FacebookAdsLogo />}
              >
                {COPY["connections.creation.facebookAds"]}
              </Button>
            )}
          />
        </GridContainer>
      </Content>
    </Page>
  );
}

export default View;

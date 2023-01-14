import { Link } from "react-router-dom";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { SearchBar } from "@/components/app/SearchBar";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header
        title={COPY["pages.users.title"]}
        bottomContent={
          <SearchBar
            id="searchUser"
            placeholder={COPY["pages.users.searchUser"]}
          />
        }
      />
      <Spacing bottom={8} />

      <Col>
        <Link className="self-end" to="/users/create-user">
          <Button startIcon={<IconAdd />}>
            {COPY["pages.users.creation.title"]}
          </Button>
        </Link>
        <Spacing bottom={4} />

        <Surface>
          <Text bold>{COPY["pages.users.title"]}</Text>
        </Surface>
      </Col>
    </Page>
  );
}

export default View;

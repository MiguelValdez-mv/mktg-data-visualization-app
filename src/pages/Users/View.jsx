import { Link } from "react-router-dom";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { SearchBar } from "@/components/app/SearchBar";
import { Button } from "@/components/atoms/Button";
import { Col } from "@/components/layout/Col";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
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
      <Spacing bottom={10} />

      <Col>
        <Link className="self-end" to="/users/create-user">
          <Button startIcon={<IconAdd />}>
            {COPY["pages.users.create.title"]}
          </Button>
        </Link>
      </Col>
    </Page>
  );
}

export default View;

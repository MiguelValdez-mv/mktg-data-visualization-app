import { Link } from "react-router-dom";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { Button } from "@/components/atoms/buttons/Button";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header title={COPY["connections.title"]} />
      <Spacing bottom={8} />

      <Content>
        <Link className="self-end" to="/connections/create-connection">
          <Button startIcon={<IconAdd />}>
            {COPY["connections.creation.title"]}
          </Button>
        </Link>
      </Content>
    </Page>
  );
}

export default View;

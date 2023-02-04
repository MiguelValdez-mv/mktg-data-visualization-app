import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header title={COPY["connections.creation.title"]} />
    </Page>
  );
}

export default View;

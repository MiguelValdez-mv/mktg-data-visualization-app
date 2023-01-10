import { SearchBar } from "@/components/app/SearchBar";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header
        title={COPY["pages.connections.title"]}
        bottomContent={
          <SearchBar
            id="searchConnection"
            placeholder={COPY["pages.connections.searchConnection"]}
          />
        }
      />
    </Page>
  );
}

export default View;

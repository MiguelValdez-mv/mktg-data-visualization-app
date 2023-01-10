import { SearchBar } from "@/components/app/SearchBar";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header
        title={COPY["pages.panels.title"]}
        bottomContent={
          <SearchBar
            id="searchPanel"
            placeholder={COPY["pages.panels.searchPanel"]}
          />
        }
      />
    </Page>
  );
}

export default View;

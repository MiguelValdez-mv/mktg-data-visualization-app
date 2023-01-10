import { SearchBar } from "@/components/app/SearchBar";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header
        title={COPY["pages.businesses.title"]}
        bottomContent={
          <SearchBar
            id="searchBusiness"
            placeholder={COPY["pages.businesses.searchBusiness"]}
          />
        }
      />
    </Page>
  );
}

export default View;

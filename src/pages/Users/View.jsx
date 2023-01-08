import { SearchBar } from "@/components/app/SearchBar";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header
        title={COPY["pages.users.title"]}
        bottomContent={
          <SearchBar placeholder={COPY["forms.placeholder.searchUser"]} />
        }
      />
    </Page>
  );
}

export default View;

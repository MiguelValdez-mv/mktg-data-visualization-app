import { IconSearch } from "@/assets/svgs/IconSearch";
import { TextInput } from "@/components/atoms/inputs/TextInput";
import { COPY } from "@/copy";

export function SearchBar(props) {
  return (
    <TextInput
      id="search-bar"
      startAdornment={<IconSearch className="text-primary" />}
      placeholder={COPY["searchBar.placeholder"]}
      {...props}
    />
  );
}

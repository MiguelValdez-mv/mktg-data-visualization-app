import { IconSearch } from "@/assets/svgs/IconSearch";
import { TextInput } from "@/components/atoms/TextInput";

export function SearchBar(props) {
  return (
    <TextInput
      startAdornment={<IconSearch className="text-primary w-6 h-6" />}
      {...props}
    />
  );
}

import { Text } from "@/components/atoms/Text";
import { PROP } from "@/constants";

export function UserListItem({ user }) {
  const { name } = user;

  return <Text>{name}</Text>;
}

UserListItem.propTypes = {
  user: PROP.USER.isRequired,
};

import FlatList from "flatlist-react";

import { PROP } from "@/constants";

import { UserListItem } from "../UserListItem";

export function UserList({ users = [] }) {
  return (
    <FlatList
      list={users}
      renderItem={(user, idx) => <UserListItem key={idx} user={user} />}
    />
  );
}

UserList.propTypes = {
  users: PROP.USERS,
};

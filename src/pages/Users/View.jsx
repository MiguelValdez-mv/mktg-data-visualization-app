import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { UserList } from "@/components/app/users/UserList";
import { Button } from "@/components/atoms/buttons/Button";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({ isLoading, users, isDeletingUsers, deleteUsers }) {
  return (
    <Page>
      <Header title={COPY["users.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <Link className="self-end" to="/users/create-user">
          <Button startIcon={<IconAdd />}>
            {COPY["users.creation.title"]}
          </Button>
        </Link>
        <Spacing bottom={4} />

        <UserList
          users={users}
          title={COPY["users.title"]}
          deleteUsers={deleteUsers}
          isLoading={isDeletingUsers}
        />
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  users: PROP.USERS,
  isDeletingUsers: PropTypes.bool.isRequired,
  deleteUsers: PropTypes.func.isRequired,
};

export default View;

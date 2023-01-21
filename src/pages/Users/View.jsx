import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { UserList } from "@/components/app/users/UserList";
import { Button } from "@/components/atoms/buttons/Button";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({ users, isLoading }) {
  return (
    <Page>
      <Header title={COPY["users.title"]} />
      <Spacing bottom={4} />

      <Content isLoading={isLoading}>
        <Link className="self-end" to="/users/create-user">
          <Button startIcon={<IconAdd />}>
            {COPY["users.creation.title"]}
          </Button>
        </Link>
        <Spacing bottom={4} />

        <Surface>
          <UserList title={COPY["users.title"]} users={users} />
        </Surface>
      </Content>
    </Page>
  );
}

View.propTypes = {
  users: PROP.USERS,
  isLoading: PropTypes.bool.isRequired,
};

export default View;

import PropTypes from "prop-types";

import { UserForm } from "@/components/app/users/UserForm";
import { Text } from "@/components/atoms/Text";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { FORM_SCHEMES } from "@/constants";
import { COPY } from "@/copy";

function View({ isLoading, initialValues, handleUserCreationFormSubmit }) {
  return (
    <Page>
      <Header title={COPY["users.creation.title"]} />
      <Spacing bottom={8} />

      <Content>
        <Surface>
          <Text subtitle bold>
            {COPY["users.creation.title"]}
          </Text>
          <Spacing bottom={4} />

          <UserForm
            initialValues={initialValues}
            validationSchema={FORM_SCHEMES.USER_CREATION}
            onSubmit={handleUserCreationFormSubmit}
            isLoading={isLoading}
          />
        </Surface>
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialValues: PropTypes.object.isRequired,
  handleUserCreationFormSubmit: PropTypes.func.isRequired,
};

export default View;

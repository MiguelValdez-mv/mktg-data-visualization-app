import PropTypes from "prop-types";

import { UserForm } from "@/components/app/users/UserForm";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { FORM_SCHEMES } from "@/constants";
import { COPY } from "@/copy";

function View({
  isLoading,
  isUpdatingUser,
  userRegistrationDate,
  initialValues,
  handleUserUpdateFormSubmit,
}) {
  return (
    <Page>
      <Header title={COPY["users.detail.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <Surface>
          <Col className="sm:flex-row sm:justify-between">
            <Text subtitle bold>
              {COPY["users.detail.title"]}
            </Text>
            <Spacing bottom={2} />

            <Col className="self-end sm:self-auto">
              <Text bold end>
                {COPY["users.detail.userRegistrationDate"]}:
              </Text>

              <Text muted bold capitalize>
                {userRegistrationDate}
              </Text>
            </Col>
          </Col>
          <Spacing bottom={4} />

          <UserForm
            action="update"
            initialValues={initialValues}
            validationSchema={FORM_SCHEMES.USER_UPDATE}
            onSubmit={handleUserUpdateFormSubmit}
            isLoading={isUpdatingUser}
          />
        </Surface>
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isUpdatingUser: PropTypes.bool.isRequired,
  userRegistrationDate: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  handleUserUpdateFormSubmit: PropTypes.func.isRequired,
};

export default View;
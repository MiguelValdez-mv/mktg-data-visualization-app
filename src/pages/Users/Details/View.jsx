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
  isUpdating,
  userRegistrationDate,
  initialValues,
  handleUserUpdateFormSubmit,
}) {
  return (
    <Page>
      <Header title={COPY["users.details.title"]} />
      <Spacing bottom={4} />

      <Content isLoading={isLoading}>
        <Surface>
          <Col className="sm:flex-row sm:justify-between">
            <Text subtitle bold>
              {COPY["users.details.title"]}
            </Text>
            <Spacing bottom={2} />

            <Col className="self-end sm:self-auto">
              <Text bold end>
                {COPY["users.details.userRegistrationDate"]}:
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
            isLoading={isUpdating}
          />
        </Surface>
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  userRegistrationDate: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  handleUserUpdateFormSubmit: PropTypes.func.isRequired,
};

export default View;

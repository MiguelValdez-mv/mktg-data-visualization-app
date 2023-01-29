import PropTypes from "prop-types";

import { BusinessList } from "@/components/app/businesses/BusinessList";
import { UserForm } from "@/components/app/users/UserForm";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { FORM_SCHEMES, PROP } from "@/constants";
import { COPY } from "@/copy";

function View({
  isLoading,
  businesses,
  isUpdatingUser,
  userRegistrationDate,
  initialValues,
  showBusinessList,
  allowedActions,
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
        <Spacing bottom={8} />

        {showBusinessList && (
          <BusinessList
            businesses={businesses}
            allowedActions={allowedActions}
            title={COPY["user.details.businessList.title"]}
          />
        )}
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  businesses: PROP.BUSINESSES,
  isUpdatingUser: PropTypes.bool.isRequired,
  userRegistrationDate: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  showBusinessList: PropTypes.bool.isRequired,
  allowedActions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleUserUpdateFormSubmit: PropTypes.func.isRequired,
};

export default View;

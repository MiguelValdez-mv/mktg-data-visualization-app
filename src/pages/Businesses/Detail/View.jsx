import PropTypes from "prop-types";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { ProfileCard } from "@/components/app/ProfileCard";
import { BusinessForm } from "@/components/app/businesses/BusinessForm";
import { EmployeeList } from "@/components/app/users/EmployeeList";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { Col } from "@/components/layout/Col";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Modal } from "@/components/layout/Modal";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({
  businessEmployees,
  nonBusinessEmployees,
  owners,
  isUpdatingBusiness,
  isAddingEmployee,
  isDeletingEmployees,
  isLoading,
  businessRegistrationDate,
  initialValues,
  businessEmployeeListActions,
  handleBusinessUpdateFormSubmit,
  addEmployeeToBusiness,
  deleteBusinessEmployees,
  authUserIsAdmin,
}) {
  return (
    <Page>
      <Header title={COPY["businesses.detail.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <Surface>
          <Col className="sm:flex-row sm:justify-between">
            <Text subtitle bold>
              {COPY["businesses.detail.title"]}
            </Text>
            <Spacing bottom={2} />

            <Col className="self-end sm:self-auto">
              <Text bold end>
                {COPY["businesses.detail.businessRegistrationDate"]}:
              </Text>

              <Text muted bold capitalize>
                {businessRegistrationDate}
              </Text>
            </Col>
          </Col>
          <Spacing bottom={4} />

          <BusinessForm
            action="update"
            initialValues={initialValues}
            onSubmit={handleBusinessUpdateFormSubmit}
            owners={owners}
            isLoading={isUpdatingBusiness}
            disabledForm={!authUserIsAdmin}
          />
        </Surface>
        <Spacing bottom={8} />

        {authUserIsAdmin && (
          <>
            <Modal
              title={COPY["businesses.detail.addEmployee.modal.title"]}
              trigger={
                <Button className="self-end" startIcon={<IconAdd />}>
                  {COPY["businesses.detail.addEmployee"]}
                </Button>
              }
              fullScreenOnMobile
            >
              {(close) =>
                nonBusinessEmployees.length ? (
                  nonBusinessEmployees.map((employee) => (
                    <ProfileCard
                      key={employee._id}
                      onClick={() => {
                        addEmployeeToBusiness(employee);
                        close();
                      }}
                      pressable
                      {...employee}
                    />
                  ))
                ) : (
                  <Text>
                    {COPY["businesses.detail.addEmployee.modal.noEmployees"]}
                  </Text>
                )
              }
            </Modal>
            <Spacing bottom={4} />
          </>
        )}

        <EmployeeList
          employees={businessEmployees}
          selectEmployees={authUserIsAdmin}
          employeeActions={businessEmployeeListActions}
          title={COPY["businesses.detail.employees"]}
          deleteEmployees={deleteBusinessEmployees}
          isLoading={isAddingEmployee || isDeletingEmployees}
        />
      </Content>
    </Page>
  );
}

View.propTypes = {
  businessEmployees: PROP.USERS,
  nonBusinessEmployees: PROP.USERS,
  owners: PROP.USERS,
  isUpdatingBusiness: PropTypes.bool.isRequired,
  isAddingEmployee: PropTypes.bool.isRequired,
  isDeletingEmployees: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  businessRegistrationDate: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  businessEmployeeListActions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleBusinessUpdateFormSubmit: PropTypes.func.isRequired,
  addEmployeeToBusiness: PropTypes.func.isRequired,
  deleteBusinessEmployees: PropTypes.func.isRequired,
  authUserIsAdmin: PropTypes.bool.isRequired,
};

export default View;

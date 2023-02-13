import { Formik } from "formik";
import PropTypes from "prop-types";

import { IconBxErrorCircle } from "@/assets/svgs/IconBxErrorCircle";
import { Form } from "@/components/atoms/Form";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import { ToggleMenuIcon } from "@/components/atoms/ToggleMenuIcon";
import { Button } from "@/components/atoms/buttons/Button";
import { AvatarInput } from "@/components/atoms/inputs/AvatarInput";
import { TextInput } from "@/components/atoms/inputs/TextInput";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Modal } from "@/components/layout/Modal";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { ProfileCard } from "@/components/molecules/ProfileCard";
import { BUSINESS_TYPES, FORM_SCHEMES, PROP, USER_ROLES } from "@/constants";
import { COPY } from "@/copy";

export function BusinessForm({
  action = "create",
  initialValues,
  onSubmit,
  owners = [],
  isLoading,
  disabledForm,
}) {
  const createBusiness = action === "create";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FORM_SCHEMES.BUSINESS}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
        dirty,
      }) => (
        <Form onSubmit={handleSubmit}>
          <TextInput
            id="name"
            label={COPY["businessForm.name"]}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
            disabled={disabledForm}
          />
          <Spacing bottom={2} />

          <Text bold>{COPY["businessForm.type"]}</Text>
          <Spacing bottom={1} />

          <Menu
            trigger={(isOpen) => (
              <Button
                className="justify-between font-normal"
                variant="outline-primary"
                endIcon={!disabledForm && <ToggleMenuIcon isOpen={isOpen} />}
              >
                {COPY[`businessForm.type.${values.type.toLowerCase()}`]}
              </Button>
            )}
            disabled={disabledForm}
          >
            {(close) =>
              Object.values(BUSINESS_TYPES).map((opt) => (
                <MenuOption
                  key={opt}
                  onClick={() => setFieldValue("type", opt)}
                  close={close}
                >
                  {COPY[`businessForm.type.${opt.toLowerCase()}`]}
                </MenuOption>
              ))
            }
          </Menu>
          <Spacing bottom={2} />

          <TextInput
            id="description"
            label={COPY["businessForm.description"]}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && errors.description}
            disabled={disabledForm}
          />
          <Spacing bottom={2} />

          <Text bold>{COPY["businessForm.owner"]}</Text>
          <Spacing bottom={1} />

          {owners.length ? (
            <Col className="sm:flex-row sm:justify-between sm:items-center">
              <ProfileCard {...values.owner} />

              {!disabledForm && (
                <>
                  <Spacing top={1} />
                  <Modal
                    title={COPY["businessForm.owner.modal.title"]}
                    trigger={
                      <Button variant="outline-primary" spacing>
                        {COPY["businessForm.owner.change"]}
                      </Button>
                    }
                    fullScreenOnMobile
                  >
                    {(close) =>
                      owners.map((owner) => (
                        <ProfileCard
                          key={owner._id}
                          onClick={() => {
                            setFieldValue("owner", owner);
                            close();
                          }}
                          pressable
                          {...owner}
                        />
                      ))
                    }
                  </Modal>
                </>
              )}
            </Col>
          ) : (
            <Col className="justify-between sm:items-center sm:flex-row">
              <Row>
                <IconBxErrorCircle className="text-primary" />
                <Spacing right={1} />

                <Text>{COPY["businessForm.owner.noOwners"]}</Text>
              </Row>
              <Spacing bottom={1} />

              <Link to={`/users/create-user?role=${USER_ROLES.OWNER}`}>
                <Button className="w-full sm:w-auto" variant="outline-primary">
                  {COPY["businessForm.owner.addOwner"]}
                </Button>
              </Link>
            </Col>
          )}

          {touched.owner && !!errors.owner && (
            <>
              <Spacing top={1} />
              <Text error>{errors.owner}</Text>
            </>
          )}
          <Spacing bottom={2} />

          <AvatarInput
            id="avatar"
            label={COPY["businessForm.avatar"]}
            avatar={values.avatar}
            name={values.name}
            onChange={(e) =>
              setFieldValue("avatar", e.currentTarget.files[0] ?? "")
            }
            disabled={disabledForm}
          />
          <Spacing bottom={4} />

          {!disabledForm && (
            <Button
              className="sm:self-end"
              type="submit"
              isLoading={isLoading}
              disabled={createBusiness ? isLoading : isLoading || !dirty}
              spacing
            >
              {COPY[`userForm.${createBusiness ? "add" : "save"}`]}
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
}

BusinessForm.propTypes = {
  action: PropTypes.oneOf(["create", "update"]),
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  onSubmit: PropTypes.func.isRequired,
  owners: PROP.USERS,
  isLoading: PropTypes.bool,
  disabledForm: PropTypes.bool,
};

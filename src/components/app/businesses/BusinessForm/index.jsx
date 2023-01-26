import { Formik } from "formik";
import PropTypes from "prop-types";

import { ProfileCard } from "@/components/app/ProfileCard";
import { Divider } from "@/components/atoms/Divider";
import { Form } from "@/components/atoms/Form";
import { Text } from "@/components/atoms/Text";
import { ToggleMenuIcon } from "@/components/atoms/ToggleMenuIcon";
import { Button } from "@/components/atoms/buttons/Button";
import { AvatarInput } from "@/components/atoms/inputs/AvatarInput";
import { TextInput } from "@/components/atoms/inputs/TextInput";
import { Col } from "@/components/layout/Col";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Modal } from "@/components/layout/Modal";
import { Spacing } from "@/components/layout/Spacing";
import { BUSINESS_TYPES, FORM_SCHEMES, PROP } from "@/constants";
import { COPY } from "@/copy";

export function BusinessForm({
  action = "create",
  initialValues,
  onSubmit,
  owners,
  isLoading,
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
          />
          <Spacing bottom={2} />

          <Text bold>{COPY["businessForm.type"]}</Text>
          <Spacing bottom={1} />

          <Menu
            trigger={(menuIsOpen) => (
              <Button
                className="justify-between font-normal"
                variant="outline-primary"
                endIcon={<ToggleMenuIcon menuIsOpen={menuIsOpen} />}
              >
                {COPY[`businessForm.type.${values.type.toLowerCase()}`]}
              </Button>
            )}
          >
            {(closeMenu) =>
              Object.values(BUSINESS_TYPES).map((opt) => (
                <MenuOption
                  key={opt}
                  onClick={() => setFieldValue("type", opt)}
                  closeMenu={closeMenu}
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
          />
          <Spacing bottom={2} />

          <Text bold>{COPY["businessForm.owner"]}</Text>
          <Spacing bottom={1} />

          <Col className="sm:flex-row sm:justify-between sm:items-center">
            <ProfileCard {...values.owner} />
            <Spacing bottom={1} />

            <Modal
              title={COPY["businessForm.owner.modal.title"]}
              trigger={
                <Button variant="outline-primary" spacing>
                  {COPY["businessForm.avatar.change"]}
                </Button>
              }
            >
              {(closeModal) =>
                owners.map((owner, idx) => (
                  <Col key={owner._id}>
                    <ProfileCard
                      onClick={() => {
                        setFieldValue("owner", owner);
                        closeModal();
                      }}
                      pressable
                      {...owner}
                    />

                    {idx !== owners.length - 1 && (
                      <Spacing vertical={1}>
                        <Divider />
                      </Spacing>
                    )}
                  </Col>
                ))
              }
            </Modal>
          </Col>
          <Spacing bottom={2} />

          <AvatarInput
            id="avatar"
            label={COPY["businessForm.avatar"]}
            avatar={values.avatar}
            name={values.name}
            onChange={(e) => setFieldValue("avatar", e.currentTarget.files[0])}
          />
          <Spacing bottom={2} />

          <Button
            className="sm:self-end"
            type="submit"
            isLoading={isLoading}
            disabled={createBusiness ? isLoading : isLoading || !dirty}
            spacing
          >
            {COPY[`userForm.${createBusiness ? "add" : "save"}`]}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

BusinessForm.propTypes = {
  action: PropTypes.oneOf(["create", "update"]),
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  onSubmit: PropTypes.func.isRequired,
  owners: PROP.USERS.isRequired,
  isLoading: PropTypes.bool,
};

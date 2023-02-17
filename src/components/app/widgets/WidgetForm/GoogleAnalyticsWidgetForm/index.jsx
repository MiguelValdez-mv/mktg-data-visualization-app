import { Formik } from "formik";
import PropTypes from "prop-types";

import { Form } from "@/components/atoms/Form";
import { Text } from "@/components/atoms/Text";
import { ToggleMenuIcon } from "@/components/atoms/ToggleMenuIcon";
import { Button } from "@/components/atoms/buttons/Button";
import { TextInput } from "@/components/atoms/inputs/TextInput";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { ResponsiveMenu } from "@/components/layout/ResponsiveMenu";
import { Spacing } from "@/components/layout/Spacing";
import { CHARTS, TIMESPANS } from "@/constants";
import { COPY } from "@/copy";

export function GoogleAnalyticsWidgetForm({
  action = "create",
  initialValues,
  onSubmit,
  isLoading,
}) {
  const createWidget = action === "create";

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
        dirty,
      }) => {
        const { Icon: SelectedChartIcon } = values.chart;

        return (
          <Form onSubmit={handleSubmit}>
            <Text bold>{COPY["googleAnalyticsWidgetForm.chart"]}</Text>
            <Spacing bottom={1} />

            <ResponsiveMenu
              title={COPY["googleAnalyticsWidgetForm.chart"]}
              trigger={(isOpen) => (
                <Button
                  className="justify-between font-normal text-left"
                  variant="outline-primary"
                  startIcon={<SelectedChartIcon />}
                  endIcon={<ToggleMenuIcon isOpen={isOpen} />}
                >
                  <Text className="flex-1">{values.chart.copy}</Text>
                </Button>
              )}
            >
              {(close) =>
                CHARTS.map((chart) => {
                  const { Icon: CurrChartIcon } = chart;

                  return (
                    <MenuOption
                      key={chart.name}
                      startIcon={<CurrChartIcon />}
                      onClick={() => setFieldValue("chart", chart)}
                      close={close}
                    >
                      {chart.copy}
                    </MenuOption>
                  );
                })
              }
            </ResponsiveMenu>
            <Spacing bottom={2} />

            <Text bold>{COPY["googleAnalyticsWidgetForm.timespan"]}</Text>
            <Spacing bottom={1} />

            <ResponsiveMenu
              title={COPY["googleAnalyticsWidgetForm.timespan"]}
              trigger={(isOpen) => (
                <Button
                  className="justify-between font-normal"
                  variant="outline-primary"
                  endIcon={<ToggleMenuIcon isOpen={isOpen} />}
                >
                  {values.timespan.copy}
                </Button>
              )}
            >
              {(close) =>
                TIMESPANS.map((timespan) => (
                  <MenuOption
                    key={timespan.id}
                    onClick={() => setFieldValue("timespan", timespan)}
                    close={close}
                  >
                    {timespan.copy}
                  </MenuOption>
                ))
              }
            </ResponsiveMenu>
            <Spacing bottom={2} />

            <TextInput
              id="title"
              label={COPY["googleAnalyticsWidgetForm.title"]}
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && errors.title}
            />
            <Spacing bottom={4} />

            <Button
              className="sm:self-end"
              type="submit"
              isLoading={isLoading}
              disabled={createWidget ? isLoading : isLoading || !dirty}
              spacing
            >
              {
                COPY[
                  `googleAnalyticsWidgetForm.${createWidget ? "add" : "save"}`
                ]
              }
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

GoogleAnalyticsWidgetForm.propTypes = {
  action: PropTypes.oneOf(["create", "update"]),
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

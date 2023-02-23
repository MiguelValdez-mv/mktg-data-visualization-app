/* eslint-disable react/forbid-prop-types */
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

import { FilterInput } from "../../FilterInput";

export function GoogleAnalyticsWidgetForm({
  action = "create",
  selectors,
  metrics,
  dimensions,
  initialValues,
  onSubmit,
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
      }) => (
        <Form onSubmit={handleSubmit}>
          <Text bold>{COPY["googleAnalyticsWidgetForm.property"]}</Text>
          <Spacing bottom={1} />

          <ResponsiveMenu
            title={COPY["googleAnalyticsWidgetForm.property.modal.title"]}
            trigger={(isOpen) => (
              <Button
                className="justify-between font-normal"
                variant="outline-primary"
                endIcon={<ToggleMenuIcon isOpen={isOpen} />}
              >
                {values.selector.name}
              </Button>
            )}
          >
            {(close) =>
              selectors.map((selector) => (
                <MenuOption
                  key={selector.id}
                  onClick={() => setFieldValue("selector", selector)}
                  close={close}
                >
                  {selector.name}
                </MenuOption>
              ))
            }
          </ResponsiveMenu>
          <Spacing bottom={2} />

          <Text bold>{COPY["googleAnalyticsWidgetForm.metric"]}</Text>
          <Spacing bottom={1} />

          <ResponsiveMenu
            title={COPY["googleAnalyticsWidgetForm.metric.modal.title"]}
            trigger={(isOpen) => (
              <Button
                className="justify-between font-normal"
                variant="outline-primary"
                endIcon={<ToggleMenuIcon isOpen={isOpen} />}
              >
                <Text className="truncate">{values.metric.copy.spanish}</Text>
              </Button>
            )}
          >
            {(close) =>
              metrics.map((metric) => (
                <MenuOption
                  key={metric.name}
                  onClick={() => setFieldValue("metric", metric)}
                  close={close}
                >
                  <Text className="text-inherit truncate">
                    {metric.copy.spanish}
                  </Text>
                </MenuOption>
              ))
            }
          </ResponsiveMenu>
          <Spacing bottom={2} />

          <Text bold>{COPY["googleAnalyticsWidgetForm.chartType"]}</Text>
          <Spacing bottom={1} />

          <ResponsiveMenu
            title={COPY["googleAnalyticsWidgetForm.chartType.modal.title"]}
            trigger={(isOpen) => (
              <Button
                className="justify-between font-normal"
                variant="outline-primary"
                startIcon={values.chart.icon}
                endIcon={<ToggleMenuIcon isOpen={isOpen} />}
              >
                <Text className="flex-1 text-left">{values.chart.copy}</Text>
              </Button>
            )}
          >
            {(close) =>
              CHARTS.map((chart) => (
                <MenuOption
                  key={chart.name}
                  startIcon={chart.icon}
                  onClick={() => setFieldValue("chart", chart)}
                  close={close}
                >
                  {chart.copy}
                </MenuOption>
              ))
            }
          </ResponsiveMenu>
          <Spacing bottom={2} />

          <Text bold>{COPY["googleAnalyticsWidgetForm.dimension"]}</Text>
          <Spacing bottom={1} />

          <ResponsiveMenu
            title={COPY["googleAnalyticsWidgetForm.dimension.modal.title"]}
            trigger={(isOpen) => (
              <Button
                className="justify-between font-normal"
                variant="outline-primary"
                endIcon={<ToggleMenuIcon isOpen={isOpen} />}
              >
                <Text className="truncate">
                  {values.dimension.copy.spanish}
                </Text>
              </Button>
            )}
          >
            {(close) =>
              dimensions.map((dimension) => (
                <MenuOption
                  key={dimension.name}
                  onClick={() => setFieldValue("dimension", dimension)}
                  close={close}
                >
                  <Text className="text-inherit truncate">
                    {dimension.copy.spanish}
                  </Text>
                </MenuOption>
              ))
            }
          </ResponsiveMenu>
          <Spacing bottom={2} />

          <Text bold>{COPY["googleAnalyticsWidgetForm.timespan"]}</Text>
          <Spacing bottom={1} />

          <ResponsiveMenu
            title={COPY["googleAnalyticsWidgetForm.timespan.modal.title"]}
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
          <Spacing bottom={2} />

          <FilterInput
            fields={dimensions}
            filters={values.filters}
            setFilters={(filters) => setFieldValue("filters", filters)}
          />
          <Spacing bottom={4} />

          <Button className="sm:self-end" type="submit" spacing>
            {COPY[`googleAnalyticsWidgetForm.${createWidget ? "add" : "save"}`]}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

GoogleAnalyticsWidgetForm.propTypes = {
  action: PropTypes.oneOf(["create", "update"]),
  selectors: PropTypes.array.isRequired,
  metrics: PropTypes.array.isRequired,
  dimensions: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

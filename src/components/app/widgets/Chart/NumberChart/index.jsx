import PropTypes from "prop-types";

import { Text } from "@/components/atoms/Text";

export function NumberChart({ value }) {
  return (
    <Text title bold truncate>
      {value}
    </Text>
  );
}

NumberChart.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

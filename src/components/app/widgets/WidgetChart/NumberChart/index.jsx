import { Text } from "@/components/atoms/Text";
import { PROP } from "@/constants";

export function NumberChart({ data }) {
  const [{ metric }] = data;

  return (
    <Text title bold truncate>
      {metric}
    </Text>
  );
}

NumberChart.propTypes = {
  data: PROP.CHART_DATA.isRequired,
};

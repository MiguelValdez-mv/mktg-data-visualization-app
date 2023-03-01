import { Text } from "@/components/atoms/Text";
import { PROP } from "@/constants";
import { formatNumber } from "@/utils/formatNumber";

export function NumberChart({ data }) {
  const [{ metric }] = data;

  return (
    <Text caption bold truncate>
      {formatNumber(metric)}
    </Text>
  );
}

NumberChart.propTypes = {
  data: PROP.CHART_DATA.isRequired,
};

import { IconBarChartHorizontalFill } from "@/assets/svgs/IconBarChartHorizontalFill";
import { IconChartDonut } from "@/assets/svgs/IconChartDonut";
import { IconChartLineVariant } from "@/assets/svgs/IconChartLineVariant";
import { IconNumber } from "@/assets/svgs/IconNumber";
import { IconStatsChart } from "@/assets/svgs/IconStatsChart";
import { COPY } from "@/copy";

export const CHARTS = [
  {
    name: "NUMBER",
    copy: COPY["charts.number"],
    icon: <IconNumber />,
  },
  {
    name: "LINE",
    copy: COPY["charts.line"],
    icon: <IconChartLineVariant />,
  },
  {
    name: "VERTICAL_BAR",
    copy: COPY["charts.verticalBar"],
    icon: <IconStatsChart />,
  },
  {
    name: "HORIZONTAL_BAR",
    copy: COPY["charts.horizontalBar"],
    icon: <IconBarChartHorizontalFill />,
  },
  {
    name: "DOUGHNUT",
    copy: COPY["charts.doughnut"],
    icon: <IconChartDonut />,
  },
];

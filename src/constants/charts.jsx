import { IconBarChartHorizontalFill } from "@/assets/svgs/IconBarChartHorizontalFill";
import { IconChartDonut } from "@/assets/svgs/IconChartDonut";
import { IconChartLineVariant } from "@/assets/svgs/IconChartLineVariant";
import { IconNumber } from "@/assets/svgs/IconNumber";
import { IconStatsChart } from "@/assets/svgs/IconStatsChart";
import { COPY } from "@/copy";

export const CHARTS = [
  {
    type: "NUMBER",
    copy: COPY["charts.number"],
    icon: <IconNumber />,
  },
  {
    type: "LINE",
    copy: COPY["charts.line"],
    icon: <IconChartLineVariant />,
  },
  {
    type: "VERTICAL_BAR",
    copy: COPY["charts.verticalBar"],
    icon: <IconStatsChart />,
  },
  {
    type: "HORIZONTAL_BAR",
    copy: COPY["charts.horizontalBar"],
    icon: <IconBarChartHorizontalFill />,
  },
  {
    type: "DOUGHNUT",
    copy: COPY["charts.doughnut"],
    icon: <IconChartDonut />,
  },
];

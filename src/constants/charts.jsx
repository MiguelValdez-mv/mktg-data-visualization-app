import { IconAreaChart } from "@/assets/svgs/IconAreaChart";
import { IconChartLineVariant } from "@/assets/svgs/IconChartLineVariant";
import { IconNumber } from "@/assets/svgs/IconNumber";
import { IconStatsChart } from "@/assets/svgs/IconStatsChart";
import { IconTable } from "@/assets/svgs/IconTable";
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
    type: "BAR",
    copy: COPY["charts.bar"],
    icon: <IconStatsChart />,
  },
  {
    type: "AREA",
    copy: COPY["charts.area"],
    icon: <IconAreaChart />,
  },
  {
    type: "TABLE",
    copy: COPY["charts.table"],
    icon: <IconTable />,
  },
];

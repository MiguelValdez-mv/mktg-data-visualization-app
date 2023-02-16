import { COPY } from "@/copy";

const TIME_UNITS = {
  DAY: "DAY",
  WEEK: "WEEK",
  MONTH: "MONTH",
  YEAR: "YEAR",
};

export const TIMESPANS = [
  {
    id: "7_DAY",
    copy: COPY["timespans.past7Days"],
    amount: 7,
    unit: TIME_UNITS.DAY,
  },
  {
    id: "14_DAY",
    copy: COPY["timespans.past14Days"],
    amount: 14,
    unit: TIME_UNITS.DAY,
  },
  {
    id: "28_DAY",
    copy: COPY["timespans.past28Days"],
    amount: 28,
    unit: TIME_UNITS.DAY,
  },
  {
    id: "30_DAY",
    copy: COPY["timespans.past30Days"],
    amount: 30,
    unit: TIME_UNITS.DAY,
  },
  {
    id: "90_DAY",
    copy: COPY["timespans.past90Days"],
    amount: 90,
    unit: TIME_UNITS.DAY,
  },
  {
    id: "1_WEEK",
    copy: COPY["timespans.thisWeek"],
    amount: 1,
    unit: TIME_UNITS.WEEK,
  },
  {
    id: "1_MONTH",
    copy: COPY["timespans.thisMonth"],
    amount: 1,
    unit: TIME_UNITS.MONTH,
  },
  {
    id: "1_YEAR",
    copy: COPY["timespans.thisYear"],
    amount: 1,
    unit: TIME_UNITS.YEAR,
  },
];

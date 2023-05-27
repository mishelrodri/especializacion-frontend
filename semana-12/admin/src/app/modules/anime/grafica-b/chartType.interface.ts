import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis } from "ng-apexcharts";

// Chart data
export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

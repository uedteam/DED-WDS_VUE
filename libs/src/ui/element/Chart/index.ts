export { default as BaseChart } from './BaseChart.vue';
export { default as LineChart } from './LineChart.vue';
export { default as PieChart } from './PieChart.vue';
export { default as DonutChart } from './DonutChart.vue';
export { default as ColumnChart } from './ColumnChart.vue';
export { default as AreaChart } from './AreaChart.vue';

// 型別定義導出
export interface ChartDataPoint {
  name: string;
  data: number[] | { name: string; y: number; color?: string }[];
  color?: string;
  fillOpacity?: number;
}

export interface PieDataPoint {
  name: string;
  y: number;
  color?: string;
}

export interface BaseChartConfig {
  type: 'line' | 'column' | 'bar' | 'pie' | 'area';
  height?: number;
  title?: string;
  backgroundColor?: string;
}

export interface AxisConfig {
  categories?: string[];
  title?: string;
  min?: number;
  max?: number;
}

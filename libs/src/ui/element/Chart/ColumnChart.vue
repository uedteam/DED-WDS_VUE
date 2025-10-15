<template>
  <BaseChart
    :config="chartConfig"
    :xAxis="xAxisConfig"
    :yAxis="yAxisConfig"
    :series="seriesData"
    :tooltip="tooltipConfig"
    :legend="legendConfig"
    :plotOptions="plotOptionsConfig"
  />
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import BaseChart from './BaseChart.vue';

// 柱狀圖資料介面
interface ColumnChartDataPoint {
  name: string;
  data: number[];
  color?: string;
}

// Props 定義
const props = defineProps({
  title: {
    type: String,
    default: '柱狀圖表',
  },
  height: {
    type: Number,
    default: 300,
  },
  categories: {
    type: Array as PropType<string[]>,
    required: true,
  },
  series: {
    type: Array as PropType<ColumnChartDataPoint[]>,
    required: true,
  },
  xAxisTitle: {
    type: String,
    default: '',
  },
  yAxisTitle: {
    type: String,
    default: '',
  },
  tooltipSuffix: {
    type: String,
    default: '',
  },
  showLegend: {
    type: Boolean,
    default: true,
  },
  showDataLabels: {
    type: Boolean,
    default: false,
  },
  showGridLines: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String as PropType<'column' | 'bar'>,
    default: 'column',
  },
});

// 圖表配置
const chartConfig = computed(() => ({
  type: props.type,
  height: props.height,
  title: props.title,
}));

const xAxisConfig = computed(() => ({
  categories: props.categories,
  title: props.xAxisTitle,
  gridLineWidth: props.showGridLines ? 0 : 0, // x軸網格線通常保持關閉
}));

const yAxisConfig = computed(() => ({
  min: 0,
  title: props.yAxisTitle,
  gridLineWidth: props.showGridLines ? 1 : 0,
}));

const seriesData = computed(() => props.series);

const tooltipConfig = computed(() => ({
  valueSuffix: props.tooltipSuffix,
}));

const legendConfig = computed(() => ({
  enabled: props.showLegend,
  align: 'center',
  verticalAlign: 'bottom',
  layout: 'horizontal',
}));

const plotOptionsConfig = computed(() => ({
  [props.type]: {
    dataLabels: {
      enabled: props.showDataLabels,
    },
  },
}));
</script>

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

// 面積圖資料介面
interface AreaChartDataPoint {
  name: string;
  data: number[];
  color?: string;
  fillOpacity?: number;
}

// Props 定義
const props = defineProps({
  title: {
    type: String,
    default: '面積圖表',
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
    type: Array as PropType<AreaChartDataPoint[]>,
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
  yAxisMax: {
    type: Number,
    default: undefined,
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
  fillOpacity: {
    type: Number,
    default: 0.5,
  },
});

// 圖表配置
const chartConfig = computed(() => ({
  type: 'area' as const,
  height: props.height,
  title: props.title,
}));

const xAxisConfig = computed(() => ({
  categories: props.categories,
  title: props.xAxisTitle,
  gridLineWidth: props.showGridLines ? 0 : 0, // x軸網格線通常保持關閉
}));

const yAxisConfig = computed(() => ({
  title: props.yAxisTitle,
  max: props.yAxisMax,
  gridLineWidth: props.showGridLines ? 1 : 0,
}));

const seriesData = computed(() =>
  props.series.map((item) => ({
    ...item,
    fillOpacity: item.fillOpacity ?? props.fillOpacity,
  }))
);

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
  area: {
    fillOpacity: props.fillOpacity,
    dataLabels: {
      enabled: props.showDataLabels,
    },
  },
}));
</script>

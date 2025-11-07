<template>
  <BaseChart
    :config="chartConfig"
    :series="seriesData"
    :tooltip="tooltipConfig"
    :legend="legendConfig"
    :plotOptions="plotOptionsConfig"
  />
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import BaseChart from './BaseChart.vue';

// 甜甜圈圖資料介面
interface DonutChartDataPoint {
  name: string;
  y: number;
  color?: string;
}

// Props 定義
const props = defineProps({
  title: {
    type: String,
    default: '甜甜圈圖',
  },
  height: {
    type: Number,
    default: 400,
  },
  data: {
    type: Array as PropType<DonutChartDataPoint[]>,
    required: true,
  },
  seriesName: {
    type: String,
    default: '數據',
  },
  showDataLabels: {
    type: Boolean,
    default: true,
  },
  allowPointSelect: {
    type: Boolean,
    default: true,
  },
  showLegend: {
    type: Boolean,
    default: true,
  },
  innerSize: {
    type: [String, Number],
    default: '60%', // Donut 內圈大小
  },
});

// 圖表配置
const chartConfig = computed(() => ({
  type: 'pie' as const,
  height: props.height,
  title: props.title,
}));

const seriesData = computed(() => [
  {
    name: props.seriesName,
    data: props.data,
    innerSize: props.innerSize,
  },
]);

const tooltipConfig = computed(() => ({
  pointFormat: `{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)`,
}));

const legendConfig = computed(() => ({
  enabled: props.showLegend,
  align: 'center',
  verticalAlign: 'bottom',
  layout: 'horizontal',
}));

const plotOptionsConfig = computed(() => ({
  pie: {
    allowPointSelect: props.allowPointSelect,
    cursor: 'pointer',
    dataLabels: {
      enabled: props.showDataLabels,
      format: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f}%)',
    },
    innerSize: props.innerSize,
  },
}));
</script>

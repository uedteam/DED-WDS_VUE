<template>
  <div class="chart-container">
    <highcharts :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

// 基礎圖表配置介面
interface BaseChartConfig {
  type: 'line' | 'column' | 'bar' | 'pie' | 'area';
  height?: number;
  title?: string;
  backgroundColor?: string;
}

// 軸配置介面
interface AxisConfig {
  categories?: string[];
  title?: string;
  min?: number;
  max?: number;
  gridLineWidth?: number;
}

// 系列資料介面
interface SeriesData {
  name: string;
  data: number[] | { name: string; y: number; color?: string }[];
  color?: string;
  fillOpacity?: number;
}

// Props 定義
const props = defineProps({
  config: {
    type: Object as PropType<BaseChartConfig>,
    required: true,
  },
  xAxis: {
    type: Object as PropType<AxisConfig>,
    default: () => ({}),
  },
  yAxis: {
    type: Object as PropType<AxisConfig>,
    default: () => ({}),
  },
  series: {
    type: Array as PropType<SeriesData[]>,
    required: true,
  },
  tooltip: {
    type: Object,
    default: () => ({}),
  },
  legend: {
    type: Object,
    default: () => ({ enabled: true }),
  },
  plotOptions: {
    type: Object,
    default: () => ({}),
  },
});

// 計算圖表選項
const chartOptions = computed(() => {
  // 計算是否需要旋轉 x 軸標籤
  const categories = props.xAxis.categories || [];
  const maxLabelLength = Math.max(
    ...categories.map((cat) => cat?.toString().length || 0)
  );
  const shouldRotateLabels = maxLabelLength > 8 || categories.length > 6;

  // 計算是否有長系列名稱
  const hasLongSeriesNames = props.series.some(
    (s) => s.name && s.name.length > 10
  );

  // 動態調整間距
  const dynamicMarginBottom =
    props.legend.enabled !== false
      ? shouldRotateLabels
        ? hasLongSeriesNames
          ? 160
          : 140 // 長系列名稱需要更多空間
        : hasLongSeriesNames
        ? 140
        : 120
      : shouldRotateLabels
      ? 100
      : 80;

  const defaultConfig = {
    chart: {
      type: props.config.type,
      height: props.config.height || 300,
      backgroundColor: props.config.backgroundColor || 'transparent',
      marginBottom: dynamicMarginBottom,
      marginLeft: 70, // 增加左側間距，為y軸標籤和標題預留更多空間
      marginRight: 30, // 增加右側留白
      marginTop: 60, // 增加頂部間距，為圖表標題預留空間
    },
    title: {
      text: props.config.title || '',
      margin: 30, // 增加圖表標題的底部間距
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#374151',
      },
    },
    xAxis: {
      categories: props.xAxis.categories || [],
      title: {
        text: props.xAxis.title || '',
        margin: 25, // 進一步增加 x軸標題與標籤的間距
        style: {
          fontSize: '12px',
          fontWeight: '600',
          color: '#374151',
        },
      },
      labels: {
        style: {
          fontSize: '12px',
          color: '#6b7280',
        },
        rotation: shouldRotateLabels ? -45 : 0, // 根據標籤長度決定是否旋轉
        staggerLines: shouldRotateLabels ? 1 : 2, // 標籤分行顯示
        step: 1, // 顯示所有標籤
        overflow: 'justify', // 允許標籤延伸到圖表區域外
        y: shouldRotateLabels ? 20 : 15, // 為旋轉標籤增加更多垂直空間
        maxStaggerLines: 2, // 限制最大分行數
        autoRotation: shouldRotateLabels ? [-45] : false, // 自動旋轉設定
      },
      gridLineWidth:
        props.xAxis.gridLineWidth !== undefined ? props.xAxis.gridLineWidth : 0,
    },
    yAxis: {
      title: {
        text: props.yAxis.title || '',
        margin: 20, // 增加 y軸標題與標籤的間距
        style: {
          fontSize: '12px',
          fontWeight: '600',
          color: '#374151',
        },
      },
      labels: {
        style: {
          fontSize: '12px',
          color: '#6b7280',
        },
      },
      min: props.yAxis.min,
      max: props.yAxis.max,
      gridLineWidth:
        props.yAxis.gridLineWidth !== undefined ? props.yAxis.gridLineWidth : 1,
      gridLineColor:
        props.yAxis.gridLineWidth === 0 ? 'transparent' : '#e6e6e6',
      minorGridLineWidth: props.yAxis.gridLineWidth === 0 ? 0 : 1,
    },
    series: props.series,
    tooltip: {
      ...props.tooltip,
    },
    legend: {
      enabled: props.legend.enabled !== undefined ? props.legend.enabled : true,
      align: props.legend.align || 'center',
      verticalAlign: props.legend.verticalAlign || 'bottom',
      layout: props.legend.layout || 'horizontal',
      margin: 30, // 進一步增加圖例與圖表的間距
      itemMarginTop: 10, // 增加圖例項目的上間距
      itemMarginBottom: 10, // 增加圖例項目的下間距
      itemDistance: 20, // 增加圖例項目之間的間距
      floating: false, // 確保圖例不會浮動覆蓋圖表
      itemStyle: {
        fontSize: '12px',
        color: '#374151',
        fontWeight: '500',
      },
      itemWrap: true, // 允許圖例項目換行
      maxHeight: hasLongSeriesNames ? 80 : 60, // 為長系列名稱預留更多高度
      ...props.legend,
    },
    plotOptions: props.plotOptions,
  };

  return defaultConfig;
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>

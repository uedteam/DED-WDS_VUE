# 圖表組件使用說明

本文件說明如何使用新創建的圖表組件系統。

## 組件列表

### 1. BaseChart

基礎圖表組件，其他所有圖表組件都基於此組件構建。

### 2. LineChart (線圖)

用於顯示趨勢數據。

**基本用法：**

```vue
<template>
  <LineChart
    title="銷售趨勢"
    :categories="['1月', '2月', '3月', '4月', '5月', '6月']"
    :series="[
      {
        name: '2024年',
        data: [120, 135, 150, 142, 168, 175],
        color: '#3B82F6',
      },
      {
        name: '2023年',
        data: [100, 115, 130, 125, 140, 155],
        color: '#10B981',
      },
    ]"
    xAxisTitle="月份"
    yAxisTitle="銷售額 (萬元)"
    tooltipSuffix=" 萬元"
  />
</template>
```

**參數說明：**

- `title`: 圖表標題
- `categories`: X 軸分類
- `series`: 數據系列陣列
- `xAxisTitle`: X 軸標題
- `yAxisTitle`: Y 軸標題
- `tooltipSuffix`: 提示框後綴
- `showLegend`: 是否顯示圖例 (預設: true)
- `height`: 圖表高度 (預設: 300)

### 3. PieChart (圓餅圖)

用於顯示分布數據。

**基本用法：**

```vue
<template>
  <PieChart
    title="客戶分布"
    :data="[
      { name: '活躍客戶', y: 856, color: '#10B981' },
      { name: '潛在客戶', y: 284, color: '#F59E0B' },
      { name: '非活躍客戶', y: 108, color: '#EF4444' },
    ]"
    seriesName="客戶數量"
  />
</template>
```

**參數說明：**

- `title`: 圖表標題
- `data`: 圓餅圖數據陣列
- `seriesName`: 系列名稱
- `showDataLabels`: 是否顯示數據標籤 (預設: true)
- `allowPointSelect`: 是否允許點選 (預設: true)
- `showLegend`: 是否顯示圖例 (預設: true)
- `height`: 圖表高度 (預設: 300)

### 4. ColumnChart (柱狀圖/條形圖)

用於比較不同類別的數據。

**基本用法：**

```vue
<template>
  <ColumnChart
    title="銷售渠道表現"
    :categories="['線上商店', '實體門市', '電話銷售', '合作夥伴', '直銷']"
    :series="[
      {
        name: '本月',
        data: [450, 320, 180, 240, 150],
        color: '#3B82F6',
      },
      {
        name: '上月',
        data: [380, 285, 165, 220, 135],
        color: '#8B5CF6',
      },
    ]"
    xAxisTitle="銷售渠道"
    yAxisTitle="銷售額 (萬元)"
    tooltipSuffix=" 萬元"
    type="column"
  />
</template>
```

**參數說明：**

- `title`: 圖表標題
- `categories`: X 軸分類
- `series`: 數據系列陣列
- `xAxisTitle`: X 軸標題
- `yAxisTitle`: Y 軸標題
- `tooltipSuffix`: 提示框後綴
- `type`: 圖表類型 ('column' 或 'bar')
- `showDataLabels`: 是否顯示數據標籤 (預設: false)
- `showLegend`: 是否顯示圖例 (預設: true)
- `height`: 圖表高度 (預設: 300)

### 5. AreaChart (面積圖)

用於顯示隨時間變化的趨勢，特別適合顯示百分比或比例數據。

**基本用法：**

```vue
<template>
  <AreaChart
    title="轉換率趨勢"
    :categories="['第1週', '第2週', '第3週', '第4週', '第5週', '第6週']"
    :series="[
      {
        name: '轉換率',
        data: [22.5, 24.1, 25.8, 23.2, 26.4, 24.8],
        color: '#06B6D4',
        fillOpacity: 0.3,
      },
    ]"
    xAxisTitle="時間"
    yAxisTitle="轉換率 (%)"
    :yAxisMax="100"
    tooltipSuffix="%"
  />
</template>
```

**參數說明：**

- `title`: 圖表標題
- `categories`: X 軸分類
- `series`: 數據系列陣列
- `xAxisTitle`: X 軸標題
- `yAxisTitle`: Y 軸標題
- `yAxisMax`: Y 軸最大值
- `tooltipSuffix`: 提示框後綴
- `fillOpacity`: 填充透明度 (預設: 0.5)
- `showLegend`: 是否顯示圖例 (預設: true)
- `height`: 圖表高度 (預設: 300)

## 使用 useChartData Composable

為了更好地管理圖表資料，我們提供了 `useChartData` composable：

```vue
<script setup>
import { useChartData } from '@/libs/src/composable/useChartData';

const { chartConfigs, updateSalesTrendData, updateCustomerDistributionData } =
  useChartData();

// 使用預設配置
const salesConfig = chartConfigs.value.salesTrend;

// 更新銷售趨勢資料
updateSalesTrendData({
  series: [
    {
      name: '新數據',
      data: [200, 250, 300, 280, 320, 350],
      color: '#FF6B6B',
    },
  ],
});
</script>

<template>
  <LineChart v-bind="salesConfig" />
</template>
```

## 型別定義

所有圖表組件都有完整的 TypeScript 型別支援：

```typescript
interface ChartDataPoint {
  name: string;
  data: number[] | { name: string; y: number; color?: string }[];
  color?: string;
  fillOpacity?: number;
}

interface PieDataPoint {
  name: string;
  y: number;
  color?: string;
}

interface BaseChartConfig {
  type: 'line' | 'column' | 'bar' | 'pie' | 'area';
  height?: number;
  title?: string;
  backgroundColor?: string;
}
```

## 客製化

每個圖表組件都可以透過 props 進行客製化。如果需要更深度的客製化，可以直接使用 `BaseChart` 組件並傳入完整的 Highcharts 配置。

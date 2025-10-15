# Highcharts 整合指南

## 概述

本專案已成功整合 Highcharts，提供豐富的圖表功能。您可以在 CRM 系統和專門的圖表展示頁面中看到各種圖表類型。

## 已安裝的套件

```json
{
  "highcharts": "^12.4.0",
  "highcharts-vue": "^2.0.1"
}
```

## 專案結構

```
src/
├── plugins/
│   └── highcharts.ts          # Highcharts 全域配置
├── pages/
│   └── ChartsDemo.vue         # 圖表展示頁面
├── template/
│   └── CRM.vue               # CRM 系統（包含圖表）
└── main.ts                   # 主應用程式入口
```

## 功能特色

### 1. 全域配置 (`src/plugins/highcharts.ts`)

- 中文語言包設定
- 自定義顏色主題
- 隱藏 Highcharts 浮水印
- Vue 3 Composition API 整合

### 2. 支援的圖表類型

#### 線型圖 (Line Chart)
- 銷售趨勢分析
- 多系列數據比較
- 交互式提示框

#### 圓餅圖 (Pie Chart)
- 市場佔有率分析
- 客戶分布展示
- 可選取數據點

#### 柱狀圖 (Column Chart)
- 月度、季度比較
- 多年度數據對比
- 圓角柱狀效果

#### 面積圖 (Area Chart)
- 用戶增長趨勢
- 堆疊面積展示
- 透明度填充

#### 橫向柱狀圖 (Bar Chart)
- 產品銷量排行
- 數據標籤顯示
- 水平方向展示

#### 組合圖 (Combination Chart)
- 銷售額 + 利潤率
- 雙 Y 軸設計
- 柱狀圖 + 線型圖結合

### 3. 互動功能

- **數據更新**：動態更新圖表數據
- **隨機化數據**：產生隨機測試數據
- **主題切換**：深色/淺色主題切換
- **響應式設計**：適配各種屏幕尺寸

## 使用方法

### 基本用法

```vue
<template>
  <div>
    <highcharts :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const chartOptions = ref({
  chart: {
    type: 'line',
    height: 300
  },
  title: {
    text: '我的圖表'
  },
  series: [{
    name: '數據系列',
    data: [1, 2, 3, 4, 5]
  }]
})
</script>
```

### 進階配置

```vue
<script setup lang="ts">
const advancedChartOptions = ref({
  chart: {
    type: 'column',
    backgroundColor: 'transparent'
  },
  title: {
    text: '高級圖表配置',
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#374151'
    }
  },
  xAxis: {
    categories: ['一月', '二月', '三月'],
    crosshair: true
  },
  yAxis: {
    title: {
      text: '數值'
    }
  },
  series: [{
    name: '2024',
    data: [100, 150, 200],
    color: '#3B82F6'
  }],
  tooltip: {
    shared: true,
    crosshairs: true
  },
  plotOptions: {
    column: {
      borderRadius: 4
    }
  },
  credits: { enabled: false }
})
</script>
```

### 動態數據更新

```vue
<script setup lang="ts">
const updateData = () => {
  // 更新圖表數據
  const newData = generateRandomData()
  chartOptions.value.series[0].data = newData
  
  // 觸發重新渲染
  chartOptions.value = { ...chartOptions.value }
}
</script>
```

## 頁面導航

1. **首頁**: `/` - 包含導航連結
2. **圖表展示**: `/charts` - 專門的圖表演示頁面
3. **CRM 系統**: `/crm` - 實際應用中的圖表整合

## 自定義主題

Highcharts 已配置使用 Tailwind CSS 色彩系統：

```typescript
colors: [
  '#3B82F6', // blue-500
  '#10B981', // green-500
  '#F59E0B', // yellow-500
  '#EF4444', // red-500
  '#8B5CF6', // purple-500
  '#06B6D4', // cyan-500
  '#F97316', // orange-500
  '#84CC16', // lime-500
]
```

## 性能優化

- 使用 `backgroundColor: 'transparent'` 避免不必要的背景渲染
- 合理設置圖表高度避免佈局抖動
- 使用 `credits: { enabled: false }` 隱藏版權信息
- 響應式設計確保在各種設備上良好顯示

## 開發建議

1. **模組化配置**：將圖表配置提取到單獨的 composables 中
2. **類型定義**：為圖表選項創建 TypeScript 接口
3. **錯誤處理**：添加圖表載入失敗的錯誤處理
4. **可訪問性**：使用 Highcharts 的可訪問性功能
5. **測試**：為圖表組件編寫單元測試

## 故障排除

### 常見問題

1. **圖表不顯示**
   - 檢查是否正確安裝 `highcharts` 和 `highcharts-vue`
   - 確認在 `main.ts` 中正確註冊插件

2. **圖表樣式問題**
   - 檢查 CSS 是否有衝突
   - 確認容器有適當的高度和寬度

3. **數據更新不生效**
   - 使用展開運算符觸發響應式更新：`chartOptions.value = { ...chartOptions.value }`

## 後續擴展

可以考慮添加以下功能：

- 更多圖表類型（熱力圖、散點圖等）
- 圖表導出功能
- 實時數據更新
- 圖表動畫效果
- 自定義圖表主題系統

## 參考資源

- [Highcharts 官方文檔](https://www.highcharts.com/docs)
- [Highcharts Vue 文檔](https://github.com/highcharts/highcharts-vue)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
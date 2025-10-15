# 圖表間距修復報告 - 完整版

## 問題描述

在多個頁面和組件中，`xAxisTitle` 與 `series` 的 `name` 資訊會在視覺上重疊，導致圖表顯示不清晰。

## 問題分析

1. **原始問題**：

   - `xAxisTitle` 設置為簡短的描述（如："月份"、"銷售渠道"）
   - `series` 中的 `name` 也是描述性文字（如："2024年"、"2023年"）
   - 當圖表渲染時，x軸標題與圖例的系列名稱可能在視覺上重疊或混淆

2. **影響範圍**：
   - `libs/src/composable/useChartData.js` - 圖表資料管理
   - `src/template/CRM.vue` - 使用 useChartData
   - `src/pages/ChartsDemo.vue` - 硬編碼的 xAxisTitle

## 解決方案

### 1. 優化 useChartData.js 中的 xAxisTitle 命名

修改 `libs/src/composable/useChartData.js` 中的 `chartConfigs`：

```javascript
// 修改前 → 修改後
salesTrend: {
  xAxisTitle: '月份' → '時間軸 (月份)',
},
salesChannel: {
  xAxisTitle: '銷售渠道' → '渠道類型',
},
conversionRate: {
  xAxisTitle: '時間' → '時間週期',
},
quarterlyPerformance: {
  xAxisTitle: '季度' → '季度區間',
},
productSales: {
  xAxisTitle: '產品' → '產品類別',
},
```

### 2. 修復 ChartsDemo.vue 硬編碼問題

修改 `src/pages/ChartsDemo.vue` 中的硬編碼 xAxisTitle：

```javascript
// 修改前 → 修改後
xAxisTitle="月份" → xAxisTitle="時間軸 (月份)"
xAxisTitle="季度" → xAxisTitle="季度區間"
xAxisTitle="產品" → xAxisTitle="產品類別"
xAxisTitle="時間點" → xAxisTitle="時間序列"
yAxisTitle="數值" → yAxisTitle="數值範圍"
```

### 3. 優化圖表間距設定

修改 `libs/src/ui/element/Chart/BaseChart.vue`：

#### 增加 x 軸標題間距和樣式

```javascript
xAxis: {
  title: {
    text: props.xAxis.title || '',
    margin: 20, // 從 15 增加到 20
    style: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#374151',
    },
  },
  // ...
}
```

#### 調整底部間距

```javascript
marginBottom:
  props.legend.enabled !== false
    ? shouldRotateLabels
      ? 120  // 從 100 增加到 120
      : 100  // 從 80 增加到 100
    : shouldRotateLabels
    ? 90   // 從 80 增加到 90
    : 70,  // 從 60 增加到 70
```

#### 優化圖例設定

```javascript
legend: {
  margin: 25, // 從 20 增加到 25
  itemMarginTop: 8, // 從 5 增加到 8
  itemMarginBottom: 8, // 從 5 增加到 8
  itemStyle: {
    fontSize: '12px',
    color: '#374151',
    fontWeight: '500', // 新增字重
  },
  // ...
}
```

### 4. 創建測試頁面

建立 `src/test/chart/TestChartSpacingFixed.vue` 來驗證修復效果。

## 修復效果

1. **x軸標題更具描述性**：避免與系列名稱產生語義重疊
2. **增加視覺間距**：確保各元素之間有足夠的空間
3. **改善字體樣式**：讓文字層次更清晰
4. **適應性調整**：根據標籤旋轉狀態動態調整間距
5. **統一修復**：解決了所有頁面的重疊問題

## 測試方式

1. 啟動開發伺服器：`npm run start`
2. 瀏覽以下測試頁面：
   - `/chart-spacing-test` - 原始問題演示
   - `/chart-spacing-fixed` - 修復後效果
   - `/crm` - CRM 頁面的修復效果
   - `/charts` - ChartsDemo 頁面的修復效果

## 修復文件清單

### 核心修復文件

- `libs/src/composable/useChartData.js` - 圖表資料配置
- `libs/src/ui/element/Chart/BaseChart.vue` - 基礎圖表組件

### 頁面修復文件

- `src/pages/ChartsDemo.vue` - 圖表展示頁面
- `src/template/CRM.vue` - 自動受益於 useChartData 修復

### 測試文件

- `src/test/chart/TestChartSpacingFixed.vue` - 測試頁面
- `src/router/index.ts` - 路由配置

## 結論

通過系統性地優化 x軸標題命名和調整圖表間距設定，成功解決了整個專案中 `xAxisTitle` 與 `series` 的 `name` 資訊重疊問題。修復涵蓋了：

- **useChartData composable**：統一的資料管理修復
- **ChartsDemo 頁面**：硬編碼問題修復
- **BaseChart 組件**：底層間距和樣式優化
- **所有使用圖表的頁面**：間接受益於基礎修復

這確保了整個應用程式的圖表顯示品質和一致性。

## 解決方案

### 1. 優化 xAxisTitle 命名

修改 `libs/src/composable/useChartData.js` 中的 `chartConfigs`：

```javascript
// 修改前
salesTrend: {
  xAxisTitle: '月份',
  // ...
},

// 修改後
salesTrend: {
  xAxisTitle: '時間軸 (月份)',
  // ...
},
```

**主要改善**：

- `xAxisTitle: '月份'` → `xAxisTitle: '時間軸 (月份)'`
- `xAxisTitle: '銷售渠道'` → `xAxisTitle: '渠道類型'`
- `xAxisTitle: '時間'` → `xAxisTitle: '時間週期'`
- `xAxisTitle: '季度'` → `xAxisTitle: '季度區間'`
- `xAxisTitle: '產品'` → `xAxisTitle: '產品類別'`

### 2. 優化圖表間距設定

修改 `libs/src/ui/element/Chart/BaseChart.vue`：

#### 增加 x 軸標題間距和樣式

```javascript
xAxis: {
  title: {
    text: props.xAxis.title || '',
    margin: 20, // 從 15 增加到 20
    style: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#374151',
    },
  },
  // ...
}
```

#### 調整底部間距

```javascript
marginBottom:
  props.legend.enabled !== false
    ? shouldRotateLabels
      ? 120  // 從 100 增加到 120
      : 100  // 從 80 增加到 100
    : shouldRotateLabels
    ? 90   // 從 80 增加到 90
    : 70,  // 從 60 增加到 70
```

#### 優化圖例設定

```javascript
legend: {
  margin: 25, // 從 20 增加到 25
  itemMarginTop: 8, // 從 5 增加到 8
  itemMarginBottom: 8, // 從 5 增加到 8
  itemStyle: {
    fontSize: '12px',
    color: '#374151',
    fontWeight: '500', // 新增字重
  },
  // ...
}
```

### 3. 創建測試頁面

建立 `src/test/chart/TestChartSpacingFixed.vue` 來驗證修復效果。

## 修復效果

1. **x軸標題更具描述性**：避免與系列名稱產生語義重疊
2. **增加視覺間距**：確保各元素之間有足夠的空間
3. **改善字體樣式**：讓文字層次更清晰
4. **適應性調整**：根據標籤旋轉狀態動態調整間距

## 測試方式

1. 啟動開發伺服器：`npm run start`
2. 瀏覽以下測試頁面：
   - `/chart-spacing-test` - 原始問題演示
   - `/chart-spacing-fixed` - 修復後效果

## 相關檔案

- `libs/src/composable/useChartData.js` - 圖表資料配置
- `libs/src/ui/element/Chart/BaseChart.vue` - 基礎圖表組件
- `src/test/chart/TestChartSpacingFixed.vue` - 測試頁面
- `src/router/index.ts` - 路由配置

## 結論

通過優化 x軸標題命名和調整圖表間距設定，成功解決了 `xAxisTitle` 與 `series` 的 `name` 資訊重疊問題，提升了圖表的可讀性和視覺效果。

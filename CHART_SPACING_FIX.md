# 圖表間距修復記錄

## 問題描述

折線圖和長條圖的 x 軸標籤與底部圖例資訊發生重疊，影響了圖表的可讀性。

## 根本原因

`BaseChart.vue` 組件中的 `marginBottom` 設定不足，無法為 x 軸標籤和圖例提供足夠的空間。

## 解決方案

### 1. 增加底部間距

- 顯示圖例時：從 60px 增加到 80px (或更多，根據標籤長度動態調整)
- 隱藏圖例時：從 40px 增加到 60px

### 2. 優化軸標籤配置

- 為 x 軸和 y 軸標題添加適當的 margin (15px)
- 改善標籤樣式，包括字體大小和顏色
- 添加標籤溢出處理 (overflow: 'justify')

### 3. 智能標籤旋轉

- 當分類名稱過長 (>8 個字元) 或分類數量過多 (>6 個) 時，自動將 x 軸標籤旋轉 -45 度
- 根據是否旋轉標籤動態調整底部間距

### 4. 圖例間距優化

- 增加圖例與圖表的間距 (margin: 20px)
- 為圖例項目添加上下間距 (itemMarginTop/Bottom: 5px)

## 修改檔案

- `/libs/src/ui/element/Chart/BaseChart.vue`

## 測試檔案

- `/src/test/chart/TestChartSpacing.vue` (新增)

## 影響範圍

由於所有圖表組件 (LineChart、ColumnChart、AreaChart、PieChart) 都使用 BaseChart，此修復會自動應用到所有圖表類型。

## 測試方式

1. 啟動開發服務器：`npm run start`
2. 訪問 ChartsControlDemo 頁面測試各種圖表類型
3. 測試不同的標籤長度和圖例顯示 / 隱藏狀態

## 預期效果

- x 軸標籤與圖例不再重疊
- 長標籤會自動旋轉以節省空間
- 圖表整體佈局更加美觀和易讀

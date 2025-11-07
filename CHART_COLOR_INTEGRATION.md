# 圖表顏色系統整合

## 概述

圖表顏色現在直接引用 `_default_variable.scss` 中定義的 Light 支援色票，通過 CSS 自定義屬性實現，避免重複定義。

## 實作方式

### 1. SCSS 變數轉 CSS 自定義屬性

在 `libs/src/style/theme/_default_variable.scss` 中，Light 支援色票定義後添加：

```scss
// 將 Light 支援色票和主題色票導出為 CSS 自定義屬性
:root {
  --chart-primary: #{$light-color-primary};
  --chart-secondary: #{$light-color-secondary};
  --chart-tertiary: #{$light-color-tertiary};
  --chart-success: #{$light-color-success};
  --chart-warning: #{$light-color-warning};
  --chart-error: #{$light-color-error};
  --chart-info: #{$light-color-info};
}
```

### 2. JavaScript 引用函數

在 `libs/src/composable/useChartData.js` 中：

```javascript
// 獲取 CSS 自定義屬性值的函數，引用 _default_variable.scss 中的顏色
const getChartColor = (colorName) => {
  if (typeof window !== 'undefined') {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(`--chart-${colorName}`).trim();
  }
  // 服務端渲染時的後備值，需要與 SCSS 變數保持同步
  const fallbackColors = {
    primary: '#533BD4FF', // $light-color-primary
    success: '#28C76FFF', // $light-color-success
    warning: '#FF9F43FF', // $light-color-warning
    error: '#FF4C51FF', // $light-color-error
    info: '#00BAD1FF', // $light-color-info
    secondary: '#4ADCFFFF', // $light-color-secondary
    tertiary: '#F96CC0FF', // $light-color-tertiary
  };
  return fallbackColors[colorName] || '#533BD4FF';
};
```

### 3. 圖表資料使用方式

所有圖表資料現在使用 `getChartColor()` 函數：

```javascript
color: getChartColor('primary'),  // 主色調
color: getChartColor('success'),  // 成功色
color: getChartColor('warning'),  // 警告色
color: getChartColor('error'),    // 錯誤色
color: getChartColor('info'),     // 資訊色
color: getChartColor('secondary'), // 次要色調
color: getChartColor('tertiary'),  // 第三色調
```

## 顏色對應表

| 函數調用                     | SCSS 變數                | 顏色值    | 用途            |
| ---------------------------- | ------------------------ | --------- | --------------- |
| `getChartColor('primary')`   | `$light-color-primary`   | #533BD4FF | 主色調          |
| `getChartColor('success')`   | `$light-color-success`   | #28C76FFF | 成功/活躍狀態   |
| `getChartColor('warning')`   | `$light-color-warning`   | #FF9F43FF | 警告/潛在狀態   |
| `getChartColor('error')`     | `$light-color-error`     | #FF4C51FF | 錯誤/非活躍狀態 |
| `getChartColor('info')`      | `$light-color-info`      | #00BAD1FF | 資訊/次要數據   |
| `getChartColor('secondary')` | `$light-color-secondary` | #4ADCFFFF | 次要色調        |
| `getChartColor('tertiary')`  | `$light-color-tertiary`  | #F96CC0FF | 第三色調        |

## 優點

1. **單一來源**：所有顏色都來自 `_default_variable.scss`，無重複定義
2. **動態更新**：修改 SCSS 變數會自動影響所有圖表
3. **SSR 支援**：提供後備值確保服務端渲染正常運作
4. **維護性**：統一的顏色管理，易於維護和更新
5. **一致性**：確保所有圖表使用相同的顏色規範

## 更新的檔案

- `libs/src/style/theme/_default_variable.scss` - 添加 CSS 自定義屬性
- `libs/src/composable/useChartData.js` - 更新所有圖表顏色引用

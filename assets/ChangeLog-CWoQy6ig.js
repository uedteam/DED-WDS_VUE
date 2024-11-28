import{af as n,ag as a,ah as s}from"./index-CpXODxke.js";import{u as d}from"./index-B_GVI8Qi.js";import"./iframe-DRgkzw6m.js";import"../sb-preview/runtime.js";import"./index-i39XpuQg.js";import"./index-DrFu-skq.js";const l=`## V1.0.0 (2024-11-28)

---

🆙update：Image

- class name 太通用可能衝突，改「ded-image-cover」

🆙update：Avatar

- class name 太通用可能衝突，改「ded-image-cover」
- 頭像形狀把狀態依據 kevin 方式加上 (20241126 done)

🆙update：Breadcrumb

- 標籤 「ul」改「ol」 (20241126 done)

🆙update：Button

- 套用 width 時，滿版的 class 名稱應該是「ded-button-fluid」，目前使用了「ded-button-full」(20241126 done)
- HTML 結構請採用 Kevin 的，添加 ded-icon-size ded-text-size (20241126 done)

🆙update：Checkbox

- svg 色彩 inline style 移除   (20241126 done)

🆙update：Dropdown

- Dropdonw vscode 異常提示需修正，需注意 Ref 使用方式 (只改 style 裡面的，HTML @click 後面的不用加 .value)(20241126 done)
- 點擊空白處需要收合 (20241126 done)
- 架構部分參照 kevin 的做法（有問題請 kevin 說明） (20241126 done)

🆙update：LineProgress

- 缺少父層容器 class 「ded-progress-line-container 」

🆙update：Slider

- CSS 採用 kevin 的寫法 (20241126 done)
- 修正 transform 顯示問題 (20241126 done)
- 刪除 v-model 資料 (20241126 done)

🆙update：Tab

- ded-tab class name 出現兩次(20241126 done)
- class name 缺少前綴字(20241126 done)

🆙update：Tag

- 語意按照 kevin 的修改，並對應 class name(改用 button 去包叉叉)(20241126 done)

🆙update：Textarea

- Default => Placeholder...(20241126 done)
- Control => Placeholder...(20241126 done)
- limit Default => 0 (20241126 done)
- limit Control => 500 (20241126 done)

🆙update：Toggle

- 移除 inline style，設定到 class 內(20241126 done)

🆙update：storybook setting

---
`;function t(e){const o={h1:"h1",...d(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(a,{title:"Changelog"}),`
`,n.jsx(o.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(s,{children:l})]})}function g(e={}){const{wrapper:o}={...d(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{g as default};

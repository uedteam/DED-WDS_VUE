import{af as n,ag as r,ah as s}from"./index-9V37bt3a.js";import{u as a}from"./index-on8jUH_q.js";import"./iframe-DS6YppJf.js";import"../sb-preview/runtime.js";import"./index-i39XpuQg.js";import"./index-DrFu-skq.js";const i=`## V1.0.0 (2024-10-14)

✨ New Feature

- Add Button Story

---

🆙update

- Dialog.vue, Dialog.stories.js
- Breadcrumb.stories.js 資料修改深度監聽問題
- Toast.stories.js 調動元件顯示順序
- Radio RadioGroup 拆成 radio, radioGroup 兩個元件分別顯示
- Checkbox 拆成 Checkbox, CheckboxGroup 兩個元件
- Textarea 修改 limit 設為 0 表示不限制字符數
- Badge 修改 props 參數名稱 label 成 value，修飾 value, maxValue 說明文字，避免混淆

---

🪲 Bug Fix

- 解除安裝 storybook plugin & pnpm
- preview.js 創建 toastContainer, dialogContainer 容器，解決彈窗無法顯示於最上層問題
`;function t(o){const e={h1:"h1",...a(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(r,{title:"Changelog"}),`
`,n.jsx(e.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(s,{children:i})]})}function x(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{x as default};

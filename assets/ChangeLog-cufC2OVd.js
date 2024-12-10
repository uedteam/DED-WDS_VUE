import{af as n,ag as d,ah as r}from"./index-DnT1Oyno.js";import{u as a}from"./index-BrUI6XHB.js";import"./iframe-CBdo9rD4.js";import"../sb-preview/runtime.js";import"./index-i39XpuQg.js";import"./index-DrFu-skq.js";const i=`## V1.0.0 (2024-12-10)

---

🆙update：Accordion

- 同步學長 CSS
- 改寫新的 HTML 結構（Amos 版）
- 重寫 storybook

🆙update：AvatarGroup

- class name 多了 text-large  (20241209 done)
- 程式運作方式，要改成跟 kevin 一樣變數 number 不轉 string (20241209 done)
- 採用 list 組件，請參考 Kevin 的 HTML 結構 (20241209 done)

🆙update：Dialog

- 參考 Kevin 的呈現方式 (20241209 done)
- class 變更 (20241209 done)
- 變更色彩為 primary (20241209 done) -「Title」不用給標題標籤 (20241209 done)
- 點擊按鈕後跳出 alert 讓開發者可以知道目前點擊到的項目，避免誤解是其他物件的事件導致關閉 dialog (20241209 done)
- 改「header」，描述改「標題」 (20241209 done)
- 改「content」，描述改「內容」 (20241209 done)
- 改「footer」，描述改「附註」 (20241209 done)
- 參照 kevin 的參數製作 (20241209 done) (vue 版 isOpen 統一由 compoasable 控制 因此不會出現在 props 中～～ )

🆙update：Divider

- 同步學長 CSS
- None 的 N 改 小寫「n」 (20241209 done)
- 直式的把線添加 min-height: 5em (20241209 done)

🆙update：List

- dataSource 加上必填星號 (20241209 done)
- 選單樣式壞了，請修正 (20241209 done)

🆙update：Input

- 輸入資料後這邊的行為應該會一致出現「Ｘ」，但密碼則會出現「刪除及眼睛」圖示(20241209 done)

---
`;function t(e){const o={h1:"h1",...a(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(d,{title:"Introduction/Changelog"}),`
`,n.jsx(o.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(r,{children:i})]})}function h(e={}){const{wrapper:o}={...a(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{h as default};

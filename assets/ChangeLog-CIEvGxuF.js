import{af as n,ag as t,ah as l}from"./index-pNvhJXsC.js";import{u as a}from"./index-vIx3wMi9.js";import"./iframe-CeK3pwPU.js";import"../sb-preview/runtime.js";import"./index-i39XpuQg.js";import"./index-DrFu-skq.js";const d=`## V1.0.0 (2024-11-22)\r
\r
## ✨feat：新增 Layout 元件\r
\r
🆙update：Datepicker\r
\r
- label 描述欄位文字改為「標題」(20241122 ok)\r
- label 預設欄位文字改為「空值」(20241122 ok)\r
- label 控制欄位文字改為「Label」(20241122 ok)\r
- placeholder 描述欄位文字改為「輸入提示」(20241122 ok)\r
- placeholder 預設欄位文字改為「空值」(20241122 ok)\r
- placeholder 控制欄位文字改為「YYYY-MM-DD」(20241122 ok)\r
- size 描述欄位文字改為「尺寸」(20241122 ok)\r
- language 描述欄位文字改為「語系」(20241122 ok)\r
- 添加參數「className」(20241122 ok)\r
\r
  🆙update：Accordion\r
\r
- 預覽區文案修改成「Accordion title」、「Accordion content」(20241122 ok)\r
\r
  🆙update：AvatarGroup\r
\r
- 修復 AvatarGroup 顯示問題\r
\r
  🆙update：Image\r
\r
- alt 預設欄位文字改為「空值」(20241122 ok)\r
- 添加參數「className」(20241122 ok)\r
\r
  🆙update：Dropdown\r
\r
- label 控制欄位文字改為「Label」(20241122 ok)\r
- label 預設欄位文字改為「””」(20241122 ok)\r
- placeholderl 預設欄位文字改為「Placeholder…」(20241122 ok)\r
- placeholderl 控制欄位文字改為「Placeholder…」(20241122 ok)\r
\r
  🆙update：Input\r
\r
- placeholderl 預設欄位文字改為「Placeholder…」(20241122 ok)\r
\r
  🆙update：Password\r
\r
- 隱藏 (20241122 ok)\r
\r
  🆙update：Search\r
\r
- 隱藏 (20241122 ok)\r
\r
  🆙update：Toast\r
\r
- 添加參數「themeColor」 (20241122 已添加)\r
- 添加參數「durationTime」 (20241122 已添加)\r
- 添加參數「className」 (20241122 已添加)\r
\r
🔧 tool: 新增 DOMPurify 過濾 HTML，防範 XSS 攻擊\r
\r
🆙update：Dialog\r
\r
- 同步學長ＣＳＳ，還有一些東西待開會確認 (20241122 ok)\r
- 彈出視窗版面照學長的 (20241122 ok)\r
- 彈出視窗參數照學長的 title(必), content(必) confirmText, CancelText, className (20241122 ok)\r
- 安裝 Dompurify 確保安全性，在 dialogHeader 的輸入欄位故意添加 攻擊性 HTML(經測試可被過濾) (20241122 ok)\r
- 添加參數「className」(20241122 ok)\r
\r
  🆙update：Toast\r
\r
- 添加參數「themeColor」 (20241122 已添加)\r
- 添加參數「durationTime」 (20241122 已添加)\r
- 添加參數「className」 (20241122 已添加)\r
\r
  🆙update：Badge\r
\r
- 調整參數順序 (20241122 ok)\r
- themeColor 描述欄位文字改為「主題顏色」(20241122 ok)\r
- isDot 改成 Type (20241122 ok)\r
- isDot 描述欄位文字改為「顯示方式」(20241122 ok)\r
- isDot 控制欄位改為下拉選單 (20241122 ok)\r
- Value 描述欄位文字改為「數值」(20241122 ok)\r
- Value 描述欄位參數類型僅保留「number」(20241122 ok)\r
- Value 控制欄位輸入方式改成 input:number 方式 (20241122 ok)\r
- maxValue 改為「limit」(20241122 ok)\r
- maxValue 描述欄位文字改為「數值上限」(20241122 ok)\r
- maxValue 控制欄位輸入方式改成 input:number 方式 (20241122 ok)\r
- 移除「withIcon」、「position」參數 (20241122 ok)\r
\r
  🆙update：Slider\r
\r
- 修改 HTML SCSS\r
\r
🆙update：Divider\r
\r
- 刪除 content 之後的留白空間 無值無留白\r
\r
---\r
\r
//-- SCSS 待討論 --//\r
\r
-\r
`;function o(r){const e={h1:"h1",...a(),...r.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(t,{title:"Changelog"}),`
`,n.jsx(e.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(l,{children:d})]})}function m(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{m as default};

import{af as n,ag as l,ah as r}from"./index-CiYbun_N.js";import{u as t}from"./index-CT-J4WKU.js";import"./iframe-CYxoECph.js";import"../sb-preview/runtime.js";import"./index-i39XpuQg.js";import"./index-DrFu-skq.js";const d=`## V1.0.0 (2024-11-22)

## ✨feat：新增 Layout 元件

🆙update：Datepicker

- label 描述欄位文字改為「標題」(20241122 ok)
- label 預設欄位文字改為「空值」(20241122 ok)
- label 控制欄位文字改為「Label」(20241122 ok)
- placeholder 描述欄位文字改為「輸入提示」(20241122 ok)
- placeholder 預設欄位文字改為「空值」(20241122 ok)
- placeholder 控制欄位文字改為「YYYY-MM-DD」(20241122 ok)
- size 描述欄位文字改為「尺寸」(20241122 ok)
- language 描述欄位文字改為「語系」(20241122 ok)
- 添加參數「className」(20241122 ok)

  🆙update：Accordion

- 預覽區文案修改成「Accordion title」、「Accordion content」(20241122 ok)

  🆙update：AvatarGroup

- 修復 AvatarGroup 顯示問題

  🆙update：Image

- alt 預設欄位文字改為「空值」(20241122 ok)
- 添加參數「className」(20241122 ok)

  🆙update：Dropdown

- label 控制欄位文字改為「Label」(20241122 ok)
- label 預設欄位文字改為「””」(20241122 ok)
- placeholderl 預設欄位文字改為「Placeholder…」(20241122 ok)
- placeholderl 控制欄位文字改為「Placeholder…」(20241122 ok)

  🆙update：Input

- placeholderl 預設欄位文字改為「Placeholder…」(20241122 ok)

  🆙update：Password

- 隱藏 (20241122 ok)

  🆙update：Search

- 隱藏 (20241122 ok)

  🆙update：Toast

- 添加參數「themeColor」 (20241122 已添加)
- 添加參數「durationTime」 (20241122 已添加)
- 添加參數「className」 (20241122 已添加)

🔧 tool: 新增 DOMPurify 過濾 HTML，防範 XSS 攻擊

🆙update：Dialog

- 同步學長ＣＳＳ，還有一些東西待開會確認 (20241122 ok)
- 彈出視窗版面照學長的 (20241122 ok)
- 彈出視窗參數照學長的 title(必), content(必) confirmText, CancelText, className (20241122 ok)
- 安裝 Dompurify 確保安全性，在 dialogHeader 的輸入欄位故意添加 攻擊性 HTML(經測試可被過濾) (20241122 ok)
- 添加參數「className」(20241122 ok)

  🆙update：Toast

- 添加參數「themeColor」 (20241122 已添加)
- 添加參數「durationTime」 (20241122 已添加)
- 添加參數「className」 (20241122 已添加)

  🆙update：Badge

- 調整參數順序 (20241122 ok)
- themeColor 描述欄位文字改為「主題顏色」(20241122 ok)
- isDot 改成 Type (20241122 ok)
- isDot 描述欄位文字改為「顯示方式」(20241122 ok)
- isDot 控制欄位改為下拉選單 (20241122 ok)
- Value 描述欄位文字改為「數值」(20241122 ok)
- Value 描述欄位參數類型僅保留「number」(20241122 ok)
- Value 控制欄位輸入方式改成 input:number 方式 (20241122 ok)
- maxValue 改為「limit」(20241122 ok)
- maxValue 描述欄位文字改為「數值上限」(20241122 ok)
- maxValue 控制欄位輸入方式改成 input:number 方式 (20241122 ok)
- 移除「withIcon」、「position」參數 (20241122 ok)

  🆙update：Slider

- 修改 HTML SCSS

🆙update：Divider

- 刪除 content 之後的留白空間 無值無留白

---

//-- SCSS 待討論 --//

-
`;function a(e){const o={h1:"h1",...t(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(l,{title:"Changelog"}),`
`,n.jsx(o.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(r,{children:d})]})}function m(e={}){const{wrapper:o}={...t(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(a,{...e})}):a(e)}export{m as default};

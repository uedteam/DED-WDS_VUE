import{af as n,ag as t,ah as o}from"./index-BYc5RKIr.js";import{u as S}from"./index-CLSCE-fD.js";import"./iframe-DDUDfrN7.js";import"../sb-preview/runtime.js";import"./index-i39XpuQg.js";import"./index-DrFu-skq.js";const a=`## V1.0.0 (2024-11-20 SCSS 同步版)\r
\r
---\r
\r
🆙update：Avatar (同步 SCSS)\r
\r
- 同步 SCSS\r
- 加 ded- 前綴\r
\r
🆙update：AvatarGroup (同步 SCSS)\r
\r
- 同步 SCSS\r
- 加 ded- 前綴\r
\r
🆙update：breadcrumb (同步 SCSS)\r
\r
- 同步 SCSS\r
- 加 ded- 前綴\r
\r
🆙update：Button (同步 SCSS)\r
\r
- 同步 SCSS\r
- 加 ded- 前綴\r
\r
🆙update：Checkbox (同步 SCSS)\r
\r
- 同步 SCSS\r
- 加 ded- 前綴\r
\r
🆙update：Divider (同步 SCSS)\r
\r
- 同步 SCSS (要請學長同步我的)\r
- 加 ded- 前綴\r
\r
🆙update：Dropdown (同步 SCSS)\r
\r
- 同步 SCSS (要請學長同步我的)\r
- 加 ded- 前綴\r
\r
🆙update：Input (同步 SCSS)\r
\r
- 同步 SCSS\r
- 加 ded- 前綴\r
\r
🆙update：Menu (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：ProgressCircle (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：ProgressLine (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Radio (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Slider (同步 SCSS)\r
\r
- 加 ded- 前綴\r
- 待確認 &-center 必要性(學)\r
- 需請學長加 #20 #23\r
\r
🆙update：SliderControl (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Tabs (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Textarea (同步 SCSS)\r
\r
- 加 ded- 前綴\r
- 全英文\r
\r
🆙update：Title (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Toggle (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Toast (同步 SCSS)(ing)\r
\r
- 加 ded- 前綴\r
\r
🆙update：tooltip (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Image (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Accordion (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Datepicker (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：Tag (同步 SCSS)\r
\r
- 加 ded- 前綴\r
\r
🆙update：theme 基礎 SCSS\r
\r
---\r
\r
//-- SCSS 待討論 --//\r
\r
- Avatar: &:not(:first-child) {margin-inline-start: -20px;} 建議加在 avatarGroup 比較適合\r
\r
- Divider: 與老師合作修正完新的 SCSS (需請學長同步我這版)\r
- Dropdown: (需請學長同步我這版)\r
\r
- Input: jony> 有 ded-clear-button（用來刪除按鈕樣式）\r
  學長> 有 ded-input-container (經 jony 判斷可不需要)\r
\r
- Menu: jony> 有 ded-nav{width: 100%;} (學長寫在 inline style)\r
  學長> 有 margin-inline 8px (經 jony 判斷可不需要)\r
\r
- Radio: 記得之前說要改點點\r
  jony> #43~#48 (點點設定動畫)\r
\r
- Slider:\r
  jony> ded-tooltip 改 ded-slider-tooltip (避免與 ded-tooltip 相衝)\r
  jony> #22 #25 (ded-slider-tooltip 對其居中用)\r
  學長> #32 (建議可刪)\r
\r
- Tooltip: 記得之前說要改點點\r
  jony> #10~#16 (可刪除已沒作用)\r
  \\_map.scss \\_tooltip arrow 位置 'left-top' 'left-bottom' 'right-top' 'right-bottom' top: 50%\r
`;function d(r){const e={h1:"h1",...S(),...r.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(t,{title:"Changelog"}),`
`,n.jsx(e.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(o,{children:a})]})}function c(r={}){const{wrapper:e}={...S(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{c as default};

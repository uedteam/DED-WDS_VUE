import{af as n,ag as t,ah as a}from"./index-nf9dErNS.js";import{u as d}from"./index-CezX4Bbv.js";import"./iframe-D0L_qX37.js";import"../sb-preview/runtime.js";import"./index-i39XpuQg.js";import"./index-DrFu-skq.js";const l=`## V1.0.0 (2024-11-16)\r
\r
---\r
\r
🆙update：Avatar\r
\r
- 頭像形狀參數 string 改 「circle、square」 (20241116 done)\r
- Avatar 尺寸改成「尺寸」 (20241116 done)\r
- Avatar 尺寸 string 顯示 可用值清單 (20241116 done)\r
- 頭像尺寸 control 欄位預設 「large」 (20241116 done)\r
- 狀態參數值改成內容清單   (20241116 done)\r
- 狀態參數預設值改成「none」 (20241116 done)\r
- userName 加上必填的「星號」 (20241116 done)\r
- userName 必填值 default 需拿掉 (20241116 done)\r
\r
🆙update：AvatarGroup\r
\r
- dataSource 加上必填的 」星號 」 (20241116 done)\r
- dataSource 給 「五筆資料 」 (20241116 done)\r
- dataSource 只留   「userName 」 &  「src  」 (20241116 done)\r
- dataSource 下方 size 參數，預設為 「 large 」 (20241116 done)\r
- limit 參數描述改為 展開數量上限   (20241116 done)\r
- limit 參數 control 設定為 2  (20241116 done)\r
- dataSource { src: 值為空字串 }  (20241116 done)\r
\r
🆙update：Breadcrumb\r
\r
- dataSource 加上必填星號 (20241116 done)\r
- dataSource 預設欄位改成顯示 - 號 (20241116 done)\r
- dataSource 預設改 5 筆資料 (20241116 done)\r
\r
🆙update：Button\r
\r
- variant 加上必填星號 (20241116 done)\r
- variant 描述欄位顯示 可用值清單 (20241116 done)\r
- 按鈕預設不顯示 prefix 圖示 (20241116 done)\r
- size 描述欄位顯示 可用值清單 (20241116 done)\r
- 按鈕寬度的設定改成固定值，選項有   「fit  、 fluid 」 (20241116 done)\r
\r
🆙update：Checkbox\r
\r
- dataSource 加上必填 「星號 」 (20241116 done)\r
- dataSource 顯示 3 筆資料   (20241116 done)\r
- dataSource 描述欄位移除與 kevin 差異內容   (20241116 done)\r
- dataSource 資料內容英文化，首字母大寫   (20241116 done)\r
- initValue 加上必填 「星號 」 (20241116 done)\r
- initValue 預設勾選 1 跟 3  (20241116 done)\r
\r
🆙update：Divider\r
\r
- themeColor 參數 描述欄位改成   「主題顏色 」 (20241116 done)\r
- width 參數 描述欄位改成   「線條寬度」 (20241116 done)\r
- width 參數 control 欄位移除 2px 這種內容   (20241116 done)\r
- type 參數 描述欄位改成   「線條樣式」 (20241116 done)\r
- direction 參數 描述欄位改成   「線條方向」 (20241116 done)\r
- align 參數 描述欄位改成   「文字位置」 (20241116 done)\r
- align 參數 預設為 「center」 (20241116 done)\r
- className 參數 描述欄位補上中文 「客製化樣式」 (20241116 done)\r
\r
🆙update：Input\r
\r
- initValue 參數加上「必填的星號」 (20241116 done)\r
- initValue 參數 描述欄位補上 「初始值」 (20241116 done)\r
- label 參數 control 欄位改 「label」(20241116 done)\r
- placeholder 參數 control 欄位改「placeholder…」(20241116 done)\r
- hint 參數 control 欄位改「prompt message」(20241116 done)\r
- hint 參數 control 欄位改「prompt message」(20241116 done)\r
- 必填值 default 需拿掉 (20241116 done)\r
- 提示訊息 description 刪除 [ ] (20241116 done)\r
\r
🆙update：Menu\r
\r
- sataSource 參數 加上「必填的星號」(20241116 done)\r
- sataSource 參數 顯示 3 筆資料 (20241116 done)\r
- sataSource 參數 第 2 筆資料顯示可展開項目 (20241116 done)\r
- 提示訊息 description 刪除 [ ] (20241116 done)\r
\r
🆙update：Progress Circle\r
\r
- label 參數 預設欄位顯示為「 Label」(20241116 done)\r
- label 參數 control 欄位設定為「 Label」(20241116 done)\r
- percent 參數 control 欄位設定為   「65 」(20241116 done)\r
\r
🆙update：Progress Line\r
\r
- label 參數 control 欄位設定為「 Label」(20241116 done)\r
- percent 參數 control 欄位設定為   「65 」(20241116 done)\r
\r
🆙update：Radio\r
\r
- dataSource 參數加上必填的「星號」(20241116 done)\r
- dataSource 參數 預設值欄位顯示 - 號 (20241116 done)\r
- dataSource 參數 描述欄位移除   「name 」 (20241116 done)\r
- dataSource 參數中 label 值都改成英文「Option」 (20241116 done)\r
- initValue 參數加上必填的「星號」(20241116 done)\r
- initValue 參數 預設勾選第一筆 (20241116 done)\r
\r
🆙update：Slider\r
\r
- step 參數 描述欄位移除「string」(20241116 done)\r
- initValue 參數加上必填的「星號」(20241116 done)\r
- unit 參數改名為「label」(20241116 done)\r
- unit 參數 預設值為空字串 (20241116 done)\r
\r
🆙update：SliderControl\r
\r
- step 參數 描述欄位移除「string」(20241116 done)\r
- initValue 參數加上必填的「星號」(20241116 done)\r
- unit 參數改名為「label」(20241116 done)\r
- unit 參數 預設值為空字串(20241116 done)\r
- 必填預設值為 - (20241116 done)\r
\r
🆙update：Tabs\r
\r
- dataSource 參數 加入必填的「星號」(20241116 done)\r
- dataSource 參數 描述欄位改「資料來源」(20241116 done)\r
- dataSource 參數 預設欄位顯示 - 號 (20241116 done)\r
- dataSource 參數 title 值改 「Tab」(20241116 done)\r
- dataSource 參數 content 值改 「Content」(20241116 done)\r
\r
🆙update：Tag\r
\r
- themeColor 參數 描述欄位改成「主題顏色」(20241116 done)\r
- label 參數 加入必填的「星號」(20241116 done)\r
- label 參數 描述欄位改成「標籤文字」(20241116 done)\r
- label 參數 預設欄位改成「Tag」(20241116 done)\r
- label 參數 control 欄位改成「Tag」(20241116 done)\r
- prefix 參數 移除「null」(20241116 done)\r
- prefix 參數 預設不顯示圖示(20241116 done)\r
- closable 參數 預設「True」(20241116 done)\r
- closable 參數 control 欄位預設「True」(20241116 done)\r
\r
🆙update：Textarea\r
\r
- initValue 參數 加入必填的「星號」(20241116 done)\r
- initValue 參數 control 欄位預設為空 (20241116 done)\r
- label 參數 control 欄位改「Label」(20241116 done)\r
- placeholder 參數 control 欄位改「Description…」(20241116 done)\r
- limit 參數 預設欄位改成「500」(20241116 done)\r
- hint 參數 description  改為「prompt message」(20241116 done)\r
\r
🆙update：Title\r
\r
- themeColor 參數 改「主題顏色」(20241116 done)\r
- level 參數 預設欄位改數值 0 (20241116 done)\r
- default 參數 control 欄位改「Title」(20241116 done)\r
\r
🆙update：Tooltip\r
\r
- content 參數 control 欄位改「good day」(20241116 done)\r
\r
---\r
`;function o(r){const e={h1:"h1",...d(),...r.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(t,{title:"Changelog"}),`
`,n.jsx(e.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(a,{children:l})]})}function S(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{S as default};

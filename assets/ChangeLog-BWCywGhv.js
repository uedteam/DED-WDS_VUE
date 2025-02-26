import{j as n,M as a,e as i}from"./index-j7rfBO8z.js";import{useMDXComponents as r}from"./index-CDsjsRSY.js";import"./iframe-CnNad3L_.js";import"./index-CEXj7t9i.js";import"./index-DrFu-skq.js";const s=`## V1.0.0 (2025-02-26)

### 🆙 Updates

- 檢整有微細疑慮的路徑，修改 storybook 將所有 ./元件.vue 的路徑改成 import Avatar from "@/ui/element/元件/元件.vue";

- 修改 packge.json 參考學長 script 加入
    "artifactregistry-login": "npx google-artifactregistry-auth",
    "print-access-token": "gcloud auth application-default print-access-token"

- 修改 gitignore 允許 .npmrc 檔上傳
`;function o(t){const e={h1:"h1",...r(),...t.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(a,{title:"Introduction/Changelog"}),`
`,n.jsx(e.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx(i,{children:s})]})}function l(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{l as default};

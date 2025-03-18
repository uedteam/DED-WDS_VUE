import{j as n,M as o,e as a}from"./index-DksOfvjM.js";import{useMDXComponents as t}from"./index-C9baTBqA.js";import"./iframe-BBVWMe-O.js";import"./index-CEXj7t9i.js";import"./index-DrFu-skq.js";const i=`# 關於 Web Design system Storybook\r
\r
## 關於 AUO Design system\r
\r
AUO Design system 是一套跨設計與程式的設計系統，採用原子化設計架構，透過拆解與建構的方法達成高擴充性的元件組成與應用。AUO Design system 透過簡單的安裝即可直接使用。\r
\r
## 安裝前確認\r
\r
### 確認相容於以下版本\r
\r
1. "node": "^18.20.7"\r
2. "vue": "^3.4.37"\r
3. "sass": "^1.81.0"\r
4. "vite-svg-loader": "^5.1.0"\r
\r
## 安裝方式\r
\r
### 步驟一：建立開發環境\r
\r
- 創建專案資料夾。\r
\r
\`\`\`shell\r
npm create vite@latest\r
\`\`\`\r
\r
- 設定專案資料夾名稱\r
\r
\`\`\`\r
Project name: my_project\r
\`\`\`\r
\r
- 選擇使用的框架\r
\r
\`\`\`\r
vue\r
\`\`\`\r
\r
- 選擇開發語言\r
\r
\`\`\`\r
javascript\r
\`\`\`\r
\r
- 進入專案資料夾\r
\r
\`\`\`shell\r
cd my_project\r
\`\`\`\r
\r
### 步驟二：安裝套件\r
\r
- 開啟建立的專案\r
\r
- 開啟 package.json 設定檔並新增 SASS 及 SVG Loader 到 devDependencies :\r
\r
\`\`\`json\r
"sass": "^1.81.0",\r
"vite-svg-loader": "^5.1.0"\r
\`\`\`\r
\r
- 執行安裝命令，下載相依套件：\r
\r
\`\`\`shell\r
npm install\r
\`\`\`\r
\r
- 建立 .npmrc 設定檔\r
\r
- 開啟 .npmrc 檔貼上 registry 路徑，並儲存\r
\r
\`\`\`shell\r
@ded-wds-vue:registry=https://asia-east1-npm.pkg.dev/auo-ded/npm-hub-uat/\r
//asia-east1-npm.pkg.dev/auo-ded/npm-hub-uat/:always-auth=true\r
\`\`\`\r
\r
- 執行 npm install 安裝 WDS 套件\r
\r
\`\`\`shell\r
npm install @ded-wds-vue/ui@latest\r
\`\`\`\r
\r
- 增加 vite config plugins svgLoader() 項目\r
\r
\`\`\`js\r
import svgLoader from 'vite-svg-loader'; //👈 加入這行\r
\r
export default defineConfig({\r
  plugins: [\r
    svgLoader({ defaultExport: 'component' }), //👈 加入這行\r
  ],\r
});\r
\`\`\`\r
\r
### 步驟三：放入相關資源並引用 SCSS 檔\r
\r
- 下載 [source.zip](https://storage.googleapis.com/ded-wds-bucket/uat/wds/source.zip)\r
\r
- 移除專案預設樣式 (App.css、index.css)、移除預設匯入 css 檔 (App.css、index.css)\r
\r
- 複製 source/vue 內相關資料夾至 src 資料夾並且取代\r
\r
- 在進入點的檔案 main.js 全局引用 globals.scss 及匯入 icons\r
\r
\`\`\`js\r
\r
import { createApp } from 'vue';\r
import './style.css'; //🗑️ 刪除這行\r
import './style/globals.scss'; //👈 加入這行\r
import App from './app.vue';\r
import icons from "./assets/icons/icons.js"; // 👈 加入這行匯入 icons.js\r
\r
const app = createApp(App); //👈 加入這行\r
app.provide("icons", icons); //👈 加入這行提供全域 icons\r
app.mount("#app"); //👈 加入這行\r
\r
\`\`\`\r
\r
### 步驟四：開始開發\r
\r
- 執行 npm 開啟環境進行開發\r
\r
\`\`\`shell\r
npm run dev\r
\`\`\`\r
\r
- 打開 Design system Storybook（Vue 版、React 版）選擇所需\r
\r
## 相關套件、資源\r
\r
Design system 為提供便利的功能，部分常見元件採用功能完善的第三方套件以加快開發時程。\r
\r
- 日期選取器： [Vanilla JS Datepicker](https://github.com/mymth/vanillajs-datepicker?tab=readme-ov-file)\r
\r
- 檔案上傳： [uppy file upload](https://uppy.io/)\r
\r
- 圖示： [Google material icons](https://fonts.google.com/icons)\r
\r
- SASS CSS 預處理器： [SASS](https://sass-lang.com/)\r
\r
## 第三方套件使用\r
\r
如需使用其他相關開發工具，請搭配適合的版本避免出現非預期的錯誤\r
\r
- TailwindCSS: [TailwindCSS v3.4.17](https://v3.tailwindcss.com/)\r
\r
## 範例下載\r
\r
## 使用方式\r
`;function e(r){const s={h1:"h1",...t(),...r.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(o,{title:"Introduction/Installation"}),`
`,n.jsx(s.h1,{id:"installation",children:"Installation"}),`
`,n.jsx(a,{children:i})]})}function u(r={}){const{wrapper:s}={...t(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(e,{...r})}):e(r)}export{u as default};

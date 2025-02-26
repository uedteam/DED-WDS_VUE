import{j as n,M as o,e as i}from"./index-CPdNL8Op.js";import{useMDXComponents as s}from"./index-CHnblcMu.js";import"./iframe-DQQgPdQs.js";import"./index-CEXj7t9i.js";import"./index-DrFu-skq.js";const p=`# 🚀 AUO Design System Storybook 安裝與使用指南\r
\r
AUO Design system 是一套跨設計與程式的設計系統，採用原子化設計架構，透過拆解與建構的方法達成高擴充性的元件組成與應用。AUO Design system 透過簡單的安裝即可直接使用。\r
\r
## ✅ 1. 安裝前確認\r
\r
請確保您的環境符合以下相容版本：\r
\r
- **"node"** "^18.20.7"\r
- **"vue"** "^3.4.37"\r
- **"sass"** "^1.77.8"\r
- **"vite-svg-loader"** "^5.1.0"\\*\\*\r
\r
## 🛠️ 2. 安裝方式\r
\r
### **步驟一：建立開發環境**\r
\r
- 使用 Vite 建立一個 Vue 專案。\r
\r
  \`\`\`shell\r
  npm create vite@latest my_project -- --template vue\r
  \`\`\`\r
\r
- 進入專案資料夾。\r
\r
  \`\`\`shell\r
  cd my_project\r
  \`\`\`\r
\r
### **步驟二：安裝開發工具與相依套件**\r
\r
- 開啟 \`package.json\`，新增以下 \`devDependencies\`：\r
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
### **步驟三：GCP 註冊設定**\r
\r
- 在專案資料夾內建立 \`.npmrc\` 設定檔。 並在檔案內貼上以下內容後儲存：\r
\r
  \`\`\`js\r
  @ded-wds-vue:registry=https://asia-east1-npm.pkg.dev/auo-ded/npm-hub-dev/\r
  \`\`\`\r
\r
### **步驟四：安裝 \`ded-wds-vue\` 套件**\r
\r
- 在專案目錄下執行以下指令安裝 WDS 套件：\r
\r
  \`\`\`shell\r
  npm install @ded-wds-vue/ui@latest\r
  \`\`\`\r
\r
- 修改 \`vite.config.js\`，加入 \`svgLoader\` 插件：\r
\r
  \`\`\`js\r
  import svgLoader from 'vite-svg-loader'; //👈 加入這行\r
  import { defineConfig } from 'vite';\r
\r
  export default defineConfig({\r
    plugins: [\r
      svgLoader({ defaultExport: 'component' }), //👈 加入這行\r
    ],\r
  });\r
  \`\`\`\r
\r
### **步驟五：放入相關資源並引用 SCSS 檔**\r
\r
- 移除預設樣式： 刪除 \`src/style.css\`\r
- 下載並解壓縮 \`source.zip\`（需請學長更新 Vue 專用版本）：\r
  [點此下載](https://storage.googleapis.com/ded-wds-bucket/source.zip)\r
- 複製 \`source\` 資料夾內的內容到 \`src\` 並取代\r
- 在 \`main.js\` 全局引用 \`globals.scss\`\r
\r
  \`\`\`js\r
  import { createApp } from 'vue';\r
  import './style/globals.scss'; //👈 加入這行\r
  import App from './App.vue';\r
\r
  createApp(App).mount('#app');\r
  \`\`\`\r
\r
## 🎨 3. 開始使用 \`ded-wds-vue\` 套件\r
\r
- 打開 [Design System Storybook](https://uedteam.github.io/DED-WDS_VUE/)\r
- 左側菜單 component 子選單中選擇任一元件\r
- 點擊展示區右下角的 \`showCode\` 按鈕展開程式碼，並複製\r
- 在 Vue 單文件組件（SFC）內貼上程式碼並使用，例如：\r
\r
  \`\`\`html\r
  <script setup>\r
    import { Button } from '@ded-wds-vue/ui';\r
  <\/script>\r
\r
  <template>\r
    <button\r
      themeColor="primary"\r
      variant="filled"\r
      prefix="SvgHome"\r
      size="medium"\r
      width="fit"\r
      borderWidth="1px"\r
      radius="4px"\r
    >\r
      Button\r
    </button>\r
  </template>\r
\r
  <style scope></style>\r
  \`\`\`\r
\r
- 於專案路徑下執行下列命令開啟環境進行開發\r
\r
  \`\`\`shell\r
  npm run dev\r
  \`\`\`\r
\r
## 🔗 4. 相關套件與資源\r
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
- SVGR: [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)\r
\r
## 📌 5. 範例下載與使用方式\r
\r
## 使用方式\r
`;function t(r){const e={h1:"h1",...s(),...r.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(o,{title:"Introduction/Installation"}),`
`,n.jsx(e.h1,{id:"installation",children:"Installation"}),`
`,n.jsx(i,{children:p})]})}function c(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{c as default};

import{j as n,M as i,e as p}from"./index-j7rfBO8z.js";import{useMDXComponents as o}from"./index-CDsjsRSY.js";import"./iframe-CnNad3L_.js";import"./index-CEXj7t9i.js";import"./index-DrFu-skq.js";const r=`# 🚀 AUO Design System Storybook 安裝與使用指南

AUO Design system 是一套跨設計與程式的設計系統，採用原子化設計架構，透過拆解與建構的方法達成高擴充性的元件組成與應用。AUO Design system 透過簡單的安裝即可直接使用。

## ✅ 1. 安裝前確認

請確保您的環境符合以下相容版本：

- **"node"** "^18.20.7"
- **"vue"** "^3.4.37"
- **"sass"** "^1.77.8"
- **"vite-svg-loader"** "^5.1.0"\\*\\*

## 🛠️ 2. 安裝方式

### **步驟一：建立開發環境**

- 使用 Vite 建立一個 Vue 專案。

  \`\`\`shell
  npm create vite@latest my_project -- --template vue
  \`\`\`

- 進入專案資料夾。

  \`\`\`shell
  cd my_project
  \`\`\`

### **步驟二：安裝開發工具與相依套件**

- 開啟 \`package.json\`，新增以下 \`devDependencies\`：

  \`\`\`json
  "sass": "^1.81.0",
  "vite-svg-loader": "^5.1.0"
  \`\`\`

- 執行安裝命令，下載相依套件：

  \`\`\`shell
  npm install
  \`\`\`

### **步驟三：GCP 註冊設定**

- 在專案資料夾內建立 \`.npmrc\` 設定檔。 並在檔案內貼上以下內容後儲存：

  \`\`\`js
  @ded-wds-vue:registry=https://asia-east1-npm.pkg.dev/auo-ded/npm-hub-dev/
  \`\`\`

### **步驟四：安裝 \`ded-wds-vue\` 套件**

- 在專案目錄下執行以下指令安裝 WDS 套件：

  \`\`\`shell
  npm install @ded-wds-vue/ui@latest
  \`\`\`

- 修改 \`vite.config.js\`，加入 \`svgLoader\` 插件：

  \`\`\`js
  import svgLoader from 'vite-svg-loader'; //👈 加入這行
  import { defineConfig } from 'vite';

  export default defineConfig({
    plugins: [
      svgLoader({ defaultExport: 'component' }), //👈 加入這行
    ],
  });
  \`\`\`

### **步驟五：放入相關資源並引用 SCSS 檔**

- 移除預設樣式： 刪除 \`src/style.css\`
- 下載並解壓縮 \`source.zip\`（需請學長更新 Vue 專用版本）：
  [點此下載](https://storage.googleapis.com/ded-wds-bucket/source.zip)
- 複製 \`source\` 資料夾內的內容到 \`src\` 並取代
- 在 \`main.js\` 全局引用 \`globals.scss\`

  \`\`\`js
  import { createApp } from 'vue';
  import './style/globals.scss'; //👈 加入這行
  import App from './App.vue';

  createApp(App).mount('#app');
  \`\`\`

## 🎨 3. 開始使用 \`ded-wds-vue\` 套件

- 打開 [Design System Storybook](https://uedteam.github.io/DED-WDS_VUE/)
- 左側菜單 component 子選單中選擇任一元件
- 點擊展示區右下角的 \`showCode\` 按鈕展開程式碼，並複製
- 在 Vue 單文件組件（SFC）內貼上程式碼並使用，例如：

  \`\`\`html
  <script setup>
    import { Button } from '@ded-wds-vue/ui';
  <\/script>

  <template>
    <button
      themeColor="primary"
      variant="filled"
      prefix="SvgHome"
      size="medium"
      width="fit"
      borderWidth="1px"
      radius="4px"
    >
      Button
    </button>
  </template>

  <style scope></style>
  \`\`\`

- 於專案路徑下執行下列命令開啟環境進行開發

  \`\`\`shell
  npm run dev
  \`\`\`

## 🔗 4. 相關套件與資源

Design system 為提供便利的功能，部分常見元件採用功能完善的第三方套件以加快開發時程。

- 日期選取器： [Vanilla JS Datepicker](https://github.com/mymth/vanillajs-datepicker?tab=readme-ov-file)

- 檔案上傳： [uppy file upload](https://uppy.io/)

- 圖示： [Google material icons](https://fonts.google.com/icons)

- SASS CSS 預處理器： [SASS](https://sass-lang.com/)

- SVGR: [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)

## 📌 5. 範例下載與使用方式

## 使用方式
`;function s(e){const t={h1:"h1",...o(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(i,{title:"Introduction/Installation"}),`
`,n.jsx(t.h1,{id:"installation",children:"Installation"}),`
`,n.jsx(p,{children:r})]})}function c(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{c as default};

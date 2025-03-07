## V1.0.0 (2025-03-07)

### 🆙 Updates: (@ded-wds-vue/ui)
- 刪除 globIcons.js
- 修改 Icon.vue
  1. 改用 inject 注入 icons。需在 main.js 全域提供
  2. 刻意加一個判斷是不是接收 base64 的方法(測試)
- 修改 icons.js
  1. assets/icons 下新增 import export
- 修改 main.js
  1. 全域提供 icons 來源，需請使用者修改本機的 main.js 設定
- 修改 storybook/preview.js
  1. 讓 storybook 可以使用 provide inject
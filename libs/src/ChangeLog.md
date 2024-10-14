## V1.0.0 (2024-10-14)

✨ New Feature

- Add ui/utility/FakeContent 用做標示區域示意

---

🆙update

- Dialog.vue, Dialog.stories.js
- Breadcrumb.stories.js 資料修改深度監聽問題
- Toast.stories.js 調動元件顯示順序
- Radio RadioGroup 拆成 radio, radioGroup 兩個元件分別顯示
- Checkbox 拆成 Checkbox, CheckboxGroup 兩個元件
- Textarea 修改 limit 設為 0 表示不限制字符數
- Badge 修改 props 參數名稱 label 成 value，修飾 value, maxValue 說明文字，避免混淆
- 移動 useDialog.js 位置
- 移動 useToast.js 位置

---

🪲 Bug Fix

- 解除安裝 storybook plugin & pnpm
- preview.js 創建 toastContainer, dialogContainer 容器，解決彈窗無法顯示於最上層問題
- AvatarGroup.vue 補上鍵值 :key="index"
- 修復 LineProgress themeColor 無法調色問題

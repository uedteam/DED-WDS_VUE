## V1.0.0 (2025-03-03)

### 🆙 Updates: (@ded-wds-vue/ui)

- 移動 icons.js 至 ui/element/Icon 資料夾並更名為 globIcons.js
- 修改 Icon.vue import 路徑

### 🆙 Updates: (Amos簡報#10)

- 修改 Menu 元件 storybook 同步學長 dataSource 的 order 型別為 number
- 修改 List 元件 storybook dataSource 內容為無值時不顯示，例如 href=”” 或是 isDisabled 不設定時，就不會顯示在storybook control 列表上
- 修改 Navbar 元件 props.path 改成 prop.href
- 修改 SideNav 元件 storybook 同步學長的  dataSource key 改排列 label, prefix, path, order, children? [ label path order ]

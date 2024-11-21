## V1.0.0 (2024-11-20 SCSS 同步版)

---

🆙update：Avatar (同步 SCSS)

- 同步 SCSS
- 加 ded- 前綴

🆙update：AvatarGroup (同步 SCSS)

- 同步 SCSS
- 加 ded- 前綴

🆙update：breadcrumb (同步 SCSS)

- 同步 SCSS
- 加 ded- 前綴

🆙update：Button (同步 SCSS)

- 同步 SCSS
- 加 ded- 前綴

🆙update：Checkbox (同步 SCSS)

- 同步 SCSS
- 加 ded- 前綴

🆙update：Divider (同步 SCSS)

- 同步 SCSS (要請學長同步我的)
- 加 ded- 前綴

🆙update：Dropdown (同步 SCSS)

- 同步 SCSS (要請學長同步我的)
- 加 ded- 前綴

🆙update：Input (同步 SCSS)

- 同步 SCSS
- 加 ded- 前綴

🆙update：Menu (同步 SCSS)

- 加 ded- 前綴

🆙update：ProgressCircle (同步 SCSS)

- 加 ded- 前綴

🆙update：ProgressLine (同步 SCSS)

- 加 ded- 前綴

🆙update：Radio (同步 SCSS)

- 加 ded- 前綴

🆙update：Slider (同步 SCSS)

- 加 ded- 前綴
- 待確認 &-center 必要性(學)
- 需請學長加 #20 #23

🆙update：SliderControl (同步 SCSS)

- 加 ded- 前綴

🆙update：Tabs (同步 SCSS)

- 加 ded- 前綴

🆙update：Textarea (同步 SCSS)

- 加 ded- 前綴
- 全英文

🆙update：Title (同步 SCSS)

- 加 ded- 前綴

🆙update：Toggle (同步 SCSS)

- 加 ded- 前綴

🆙update：Toast (同步 SCSS)(ing)

- 加 ded- 前綴

🆙update：tooltip (同步 SCSS)

- 加 ded- 前綴

🆙update：Image (同步 SCSS)

- 加 ded- 前綴

🆙update：Accordion (同步 SCSS)

- 加 ded- 前綴

🆙update：Datepicker (同步 SCSS)

- 加 ded- 前綴

🆙update：Tag (同步 SCSS)

- 加 ded- 前綴

🆙update：theme 基礎 SCSS

---

//-- SCSS 待討論 --//

- Avatar: &:not(:first-child) {margin-inline-start: -20px;} 建議加在 avatarGroup 比較適合

- Divider: 與老師合作修正完新的 SCSS (需請學長同步我這版)
- Dropdown: (需請學長同步我這版)

- Input: jony> 有 ded-clear-button（用來刪除按鈕樣式）
  學長> 有 ded-input-container (經 jony 判斷可不需要)

- Menu: jony> 有 ded-nav{width: 100%;} (學長寫在 inline style)
  學長> 有 margin-inline 8px (經 jony 判斷可不需要)

- Radio: 記得之前說要改點點
  jony> #43~#48 (點點設定動畫)

- Slider:
  jony> ded-tooltip 改 ded-slider-tooltip (避免與 ded-tooltip 相衝)
  jony> #22 #25 (ded-slider-tooltip 對其居中用)
  學長> #32 (建議可刪)

- Tooltip: 記得之前說要改點點
  jony> #10~#16 (可刪除已沒作用)
  \_map.scss \_tooltip arrow 位置 'left-top' 'left-bottom' 'right-top' 'right-bottom' top: 50%

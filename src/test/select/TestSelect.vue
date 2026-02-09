<script setup>
import Select from '@/ui/element/Select/Select.vue';
import { ref, onMounted, nextTick, computed } from 'vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';

// Select 屬性
const dataSource = ref([
  { label: '選項 1', value: 'option1' },
  { label: '選項 2', value: 'option2' },
  { label: '選項 3', value: 'option3' },
  { label: '選項 4', value: 'option4' },
  { label: '選項 5', value: 'option5' },
]);
const placeholder = ref('請選擇選項');
const suffix = ref('SvgArrowDropDown');
const isDisabled = ref(false);
const className = ref('');
const selectedValue = ref('');
const selectRef = ref(null);

// 狀態顯示
const status = computed(() => ({
  選項數量: dataSource.value.length,
  提示文字: placeholder.value,
  後綴圖標: suffix.value || '無',
  選擇值: selectedValue.value || '無',
  選擇標籤: getSelectedLabel(),
  禁用狀態: isDisabled.value ? '禁用' : '啟用',
  自訂樣式: className.value || '無',
}));

// 操作訊息顯示
const operationMessage = ref('');
const showOperationMessage = (message) => {
  operationMessage.value = message;
  setTimeout(() => {
    operationMessage.value = '';
  }, 3000);
};

// 取得選擇項目的標籤
function getSelectedLabel() {
  const selectedItem = dataSource.value.find(
    (item) => item.value === selectedValue.value,
  );
  return selectedItem ? selectedItem.label : '無';
}

// 事件處理
function handleSelectChange() {
  showOperationMessage(`已選擇: ${getSelectedLabel()}`);
}

// 控制函數
const availableIcons = ['SvgArrowDropDown', 'SvgArrowDown', ''];
function toggleDisabled() {
  isDisabled.value = !isDisabled.value;
  showOperationMessage(`選擇框已${isDisabled.value ? '禁用' : '啟用'}`);
}
function toggleIcon() {
  const currentIndex = availableIcons.indexOf(suffix.value);
  suffix.value = availableIcons[(currentIndex + 1) % availableIcons.length];
  showOperationMessage(`圖標已切換到: ${suffix.value || '無圖標'}`);
}
function changePlaceholder() {
  const placeholders = [
    '請選擇選項',
    'Select an option',
    '選択してください',
    '請選取項目',
  ];
  const currentIndex = placeholders.indexOf(placeholder.value);
  placeholder.value = placeholders[(currentIndex + 1) % placeholders.length];
  showOperationMessage(`提示文字已切換到: ${placeholder.value}`);
}
function addOption() {
  const newIndex = dataSource.value.length + 1;
  dataSource.value.push({
    label: `新選項 ${newIndex}`,
    value: `new_option_${newIndex}`,
  });
  showOperationMessage(`已新增選項: 新選項 ${newIndex}`);
}
function removeLastOption() {
  if (dataSource.value.length > 1) {
    const removedOption = dataSource.value.pop();
    if (selectedValue.value === removedOption.value) {
      selectedValue.value = '';
    }
    showOperationMessage(`已移除選項: ${removedOption.label}`);
  } else {
    showOperationMessage('至少需要保留一個選項');
  }
}
function selectFirstOption() {
  if (dataSource.value.length > 0) {
    selectedValue.value = dataSource.value[0].value;
    showOperationMessage(`已選擇第一個選項: ${dataSource.value[0].label}`);
  }
}
function selectLastOption() {
  if (dataSource.value.length > 0) {
    const lastOption = dataSource.value[dataSource.value.length - 1];
    selectedValue.value = lastOption.value;
    showOperationMessage(`已選擇最後一個選項: ${lastOption.label}`);
  }
}
function clearSelection() {
  selectedValue.value = '';
  showOperationMessage('已清除選擇');
}
function resetOptions() {
  dataSource.value = [
    { label: '選項一', value: 'option1' },
    { label: '選項二', value: 'option2' },
    { label: '選項三', value: 'option3' },
    { label: '選項四', value: 'option4' },
    { label: '選項五', value: 'option5' },
  ];
  selectedValue.value = '';
  showOperationMessage('已重設選項');
}
function toggleCustomClass() {
  className.value = className.value ? '' : 'custom-select-class';
  showOperationMessage(`自訂樣式: ${className.value || '無'}`);
}

// 程式碼範例區塊
const isCodeCollapsed = ref(true);
const codeExample = computed(() => {
  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';
  return (
    scriptStart +
    `\nimport { ref } from 'vue';\nimport { Select } from '@ded-wds-vue/ui';\n\nconst dataSource = [\n  { label: '選項 1', value: 'option1' },\n  { label: '選項 2', value: 'option2' },\n  { label: '選項 3', value: 'option3' },\n  { label: '選項 4', value: 'option4' },\n  { label: '選項 5', value: 'option5' },\n];\nconst placeholder = ref('請選擇選項');\nconst suffix = ref('SvgArrowDropDown');\nconst isDisabled = ref(false);\nconst className = ref('custom-select-class');\nconst selectedValue = ref('');\n` +
    scriptEnd +
    `\n\n<template>\n  <Select\n    :dataSource="dataSource"\n    :placeholder="placeholder"\n    :suffix="suffix"\n    :isDisabled="isDisabled"\n    :className="className"\n    v-model="selectedValue"\n  />\n</template>`
  );
});
function toggleCodeCollapse() {
  isCodeCollapsed.value = !isCodeCollapsed.value;
}

onMounted(() => {
  // 組件掛載時可執行初始化
});
</script>

<template>
  <div class="test-select-container">
    <Select
      :ref="selectRef"
      :dataSource="dataSource"
      :placeholder="placeholder"
      :suffix="suffix"
      :isDisabled="isDisabled"
      :className="className"
      v-model="selectedValue"
      @update:modelValue="handleSelectChange"
    />

    <div class="select-controls">
      <p class="settings-title">當前選擇器設定:</p>
      <div class="settings-grid">
        <div class="setting-item" v-for="(val, key) in status" :key="key">
          <span class="setting-label">{{ key }}:</span>
          <strong class="setting-value">{{ val }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 外觀樣式控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀樣式</h4>
          <div class="control-buttons">
            <button @click="toggleIcon" class="control-button primary">
              切換圖標
            </button>
            <button @click="changePlaceholder" class="control-button primary">
              切換提示文字
            </button>
            <button @click="toggleCustomClass" class="control-button primary">
              {{ className ? '移除' : '添加' }}自訂樣式
            </button>
          </div>
        </div>
        <!-- 功能設定控制組 -->
        <div class="control-group">
          <h4 class="group-title">功能設定</h4>
          <div class="control-buttons">
            <button @click="addOption" class="control-button secondary">
              新增選項
            </button>
            <button @click="removeLastOption" class="control-button secondary">
              移除最後選項
            </button>
            <button @click="resetOptions" class="control-button secondary">
              重設選項
            </button>
          </div>
        </div>
        <!-- 狀態控制組 -->
        <div class="control-group">
          <h4 class="group-title">狀態控制</h4>
          <div class="control-buttons">
            <button @click="toggleDisabled" class="control-button accent">
              {{ isDisabled ? '啟用選擇器' : '禁用選擇器' }}
            </button>
            <button @click="selectFirstOption" class="control-button accent">
              選擇第一項
            </button>
            <button @click="selectLastOption" class="control-button accent">
              選擇最後一項
            </button>
            <button @click="clearSelection" class="control-button accent">
              清除選擇
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 程式碼範例區塊 -->
    <div class="code-example-section">
      <div class="code-section-header">
        <button
          @click="toggleCodeCollapse"
          class="toggle-code-button"
          :class="{ collapsed: isCodeCollapsed }"
          :title="isCodeCollapsed ? '顯示程式碼' : '隱藏程式碼'"
        >
          <div class="toggle-icon-container">
            <svg
              class="toggle-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          <span class="button-text">{{
            isCodeCollapsed ? '顯示程式碼' : '隱藏程式碼'
          }}</span>
        </button>
      </div>
      <transition name="slide-down">
        <div v-show="!isCodeCollapsed" class="code-container">
          <CodeBlock
            :code="codeExample"
            language="vue"
            title="Select 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* 參考 TestInput.vue 統一樣式 */
.test-select-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-select-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.operation-message {
  margin: 10px 0;
  padding: 8px 12px;
  background-color: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 4px;
  color: #1976d2;
  font-size: 14px;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.select-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.settings-title {
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 16px;
  color: #2c3e50;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 20px;
  margin-bottom: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.setting-item:hover {
  background: #e9ecef;
  transform: translateX(2px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.setting-label {
  font-size: 15px;
  color: #495057;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

.setting-value {
  font-size: 16px;
  color: #007bff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  word-break: break-word;
  text-align: right;
}

@media (max-width: 640px) {
  .settings-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}

.control-groups {
  display: grid;
  gap: 20px;
  margin-top: 15px;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .control-groups {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .control-groups {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (min-width: 1024px) {
  .control-groups {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .control-buttons {
    grid-template-columns: 1fr;
  }

  .control-button {
    padding: 12px 16px;
    font-size: 14px;
  }
}

.control-group {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
}

.control-group .control-buttons {
  flex: 1;
  align-content: start;
}

.group-title {
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: #495057;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.control-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}

.control-button {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-align: center;
  white-space: nowrap;
}

.control-button.primary {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
}

.control-button.primary:hover {
  background: linear-gradient(135deg, #0056b3, #004085);
  transform: translateY(-1px);
}

.control-button.secondary {
  background: linear-gradient(135deg, #6c757d, #495057);
  color: white;
}

.control-button.secondary:hover {
  background: linear-gradient(135deg, #495057, #343a40);
  transform: translateY(-1px);
}

.control-button.accent {
  background: linear-gradient(135deg, #28a745, #1e7e34);
  color: white;
}

.control-button.accent:hover {
  background: linear-gradient(135deg, #1e7e34, #155724);
  transform: translateY(-1px);
}

/* 自訂樣式示例 */
.test-select-container :deep(.custom-select-class) {
  border: 2px solid #ff6b35;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
  border-radius: 8px;
}
.test-select-container :deep(.custom-select-class .ded-select) {
  border: none;
  background-color: rgba(255, 107, 53, 0.05);
}

/* 程式碼範例區塊樣式，參考 TestTabs.vue */
.code-example-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #e0e0e0;
}
.code-section-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
}
.toggle-code-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.toggle-code-button:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.toggle-code-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.toggle-code-button.collapsed {
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
}
.toggle-code-button.collapsed:hover {
  background: linear-gradient(135deg, #718096 0%, #4a5568 100%);
}
.toggle-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}
.toggle-svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  stroke-width: 2.5;
}
.toggle-code-button.collapsed .toggle-svg {
  transform: rotate(-90deg);
}
.toggle-code-button:hover .toggle-svg {
  transform: scale(1.1);
}
.toggle-code-button.collapsed:hover .toggle-svg {
  transform: rotate(-90deg) scale(1.1);
}
.button-text {
  font-weight: 500;
  letter-spacing: 0.025em;
}
.code-container {
  overflow: hidden;
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-20px);
}
.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 1000px;
  transform: translateY(0);
}
</style>

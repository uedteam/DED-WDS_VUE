<script setup>
import Input from '@/ui/element/Input/Input.vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';
import { ref, onMounted, computed } from 'vue';

// 定義 Input 元件的各種屬性
const inputValue = ref('');
const label = ref('測試輸入框');
const type = ref('text');
const hasClear = ref(true);
const placeholder = ref('請輸入內容');
const prefix = ref('SvgSearch');
const size = ref('medium');
const maxLimit = ref(20);
const hint = ref({
  error: '',
  description: '這是一個測試輸入框',
});
const isDisabled = ref(false);
const className = ref('custom-input');

// 參考到 Input 元件實例
const inputRef = ref(null);

// CodeBlock 收合狀態
const isCodeCollapsed = ref(true);

// 可用的輸入類型列表
const availableTypes = ['text', 'password', 'email', 'number'];

// 事件處理函數
const handleClear = () => {
  console.log('Input cleared');
};

// 收合/展開程式碼
const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};

// 控制函數
const toggleError = () => {
  hint.value.error = hint.value.error ? '' : '輸入格式有誤';
};

const toggleType = () => {
  const currentIndex = availableTypes.indexOf(type.value);
  type.value = availableTypes[(currentIndex + 1) % availableTypes.length];
};

const toggleSize = () => {
  const sizes = ['small', 'medium', 'large'];
  const currentIndex = sizes.indexOf(size.value);
  size.value = sizes[(currentIndex + 1) % sizes.length];
};

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
};

const togglePrefix = () => {
  prefix.value = prefix.value ? '' : 'SvgSearch';
};

const toggleClear = () => {
  hasClear.value = !hasClear.value;
};

const focusInput = () => {
  inputRef.value?.input?.focus();
};

// 產生動態程式碼範例
const codeExample = computed(() => {
  const disabledAttr = isDisabled.value ? '\n    :isDisabled="true"' : '';
  const clearAttr = !hasClear.value ? '\n    :hasClear="false"' : '';
  const prefixAttr = prefix.value ? `\n    prefix="${prefix.value}"` : '';
  const maxLimitAttr =
    maxLimit.value !== 20 ? `\n    :maxLimit="${maxLimit.value}"` : '';
  const hintAttr =
    hint.value.error || hint.value.description !== '這是一個測試輸入框'
      ? `\n    :hint="{ error: '${hint.value.error}', description: '${hint.value.description}' }"`
      : '';

  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';

  return (
    scriptStart +
    `
import { Input } from '@ded-wds-vue/ui';

const inputValue = ref('');

const handleClear = () => {
  console.log('Input cleared');
};
` +
    scriptEnd +
    `

<template>
  <Input
    v-model="inputValue"
    label="${label.value}"
    type="${type.value}"
    size="${size.value}"
    placeholder="${placeholder.value}"${prefixAttr}${clearAttr}${maxLimitAttr}${hintAttr}${disabledAttr}
    @clearDatePicker="handleClear"
  />
</template>`
  );
});

onMounted(() => {
  console.log('Input component mounted');
  // 初始輸入框獲得焦點
  inputRef.value?.input?.focus();
});
</script>

<template>
  <div class="test-input-container">
    <Input
      ref="inputRef"
      v-model="inputValue"
      :label="label"
      :type="type"
      :hasClear="hasClear"
      :placeholder="placeholder"
      :prefix="prefix"
      :size="size"
      :maxLimit="maxLimit"
      :hint="hint"
      :isDisabled="isDisabled"
      :className="className"
      @clearDatePicker="handleClear"
    />

    <div class="input-controls">
      <p class="settings-title">當前輸入框設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">輸入值:</span>
          <strong class="setting-value">{{ inputValue || '(空)' }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">輸入類型:</span>
          <strong class="setting-value">{{ type }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">尺寸:</span>
          <strong class="setting-value">{{ size }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">前綴圖標:</span>
          <strong class="setting-value">{{ prefix || '(無)' }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">清除按鈕:</span>
          <strong class="setting-value">{{
            hasClear ? '啟用' : '禁用'
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">狀態:</span>
          <strong class="setting-value">{{
            isDisabled ? '禁用' : '啟用'
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">字數限制:</span>
          <strong class="setting-value">{{ maxLimit }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">提示訊息:</span>
          <strong class="setting-value">{{
            hint.error || hint.description
          }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 外觀樣式控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀樣式</h4>
          <div class="control-buttons">
            <button @click="toggleType" class="control-button primary">
              切換類型
            </button>
            <button @click="toggleSize" class="control-button primary">
              切換尺寸
            </button>
            <button @click="togglePrefix" class="control-button primary">
              切換前綴
            </button>
          </div>
        </div>

        <!-- 功能設定控制組 -->
        <div class="control-group">
          <h4 class="group-title">功能設定</h4>
          <div class="control-buttons">
            <button @click="toggleClear" class="control-button secondary">
              {{ hasClear ? '禁用清除' : '啟用清除' }}
            </button>
            <button @click="toggleError" class="control-button secondary">
              {{ hint.error ? '移除錯誤' : '顯示錯誤' }}
            </button>
            <button
              @click="maxLimit = maxLimit === 20 ? 50 : 20"
              class="control-button secondary"
            >
              切換字數限制
            </button>
          </div>
        </div>

        <!-- 狀態控制組 -->
        <div class="control-group">
          <h4 class="group-title">狀態控制</h4>
          <div class="control-buttons">
            <button @click="toggleDisabled" class="control-button accent">
              {{ isDisabled ? '啟用輸入框' : '禁用輸入框' }}
            </button>
            <button @click="focusInput" class="control-button accent">
              聚焦輸入框
            </button>
            <button
              @click="inputValue = inputValue ? '' : '測試內容'"
              class="control-button accent"
            >
              {{ inputValue ? '清空內容' : '填入內容' }}
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
            title="Input 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.test-input-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-input-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.input-controls {
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

/* 滑動展開/收合動畫 */
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

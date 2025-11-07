<script setup>
import Textarea from '@/ui/element/Textarea/Textarea.vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';
import { ref, onMounted, nextTick, computed } from 'vue';

// 定義 Textarea 元件的各種屬性
const label = ref('Label');
const placeholder = ref('Placeholder');
const limit = ref(30);
const hint = ref({ error: '', description: '' });
const isDisabled = ref(false);
const className = ref('');
const modelValue = ref('');

// 參考到 Textarea 元件實例
const textareaRef = ref(null);

// CodeBlock 收合狀態
const isCodeCollapsed = ref(true);

// 事件處理函數
const handleInput = (event) => {
  console.log('Textarea input:', event.target.value);
};

// 收合/展開程式碼
const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};

// 控制函數
const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
};

const updateHintError = () => {
  hint.value.error = hint.value.error ? '' : 'This is an error message.';
};

const updateHintDescription = () => {
  hint.value.description = hint.value.description
    ? ''
    : 'This is a description message.';
};

const increaseLimit = () => {
  limit.value += 10;
};

const decreaseLimit = () => {
  if (limit.value > 0) {
    limit.value -= 10;
  }
};

const focusTextarea = () => {
  // 使用 nextTick 確保 DOM 已更新，然後直接查找 textarea 元素
  nextTick(() => {
    // 方法1：透過 ref 查找
    let textareaElement = textareaRef.value?.$el?.querySelector('textarea');

    // 方法2：如果方法1失敗，直接在容器中查找
    if (!textareaElement) {
      const container = document.querySelector('.test-textarea-container');
      textareaElement = container?.querySelector('textarea');
    }

    if (textareaElement) {
      textareaElement.focus();
      console.log('Textarea focused successfully');
    } else {
      console.warn('Textarea element not found');
    }
  });
};

// 產生動態程式碼範例
const codeExample = computed(() => {
  const disabledAttr = isDisabled.value ? '\n    :isDisabled="true"' : '';
  const limitAttr = limit.value !== 30 ? `\n    :limit="${limit.value}"` : '';
  const hintAttr =
    hint.value.error || hint.value.description
      ? `\n    :hint="{ error: '${hint.value.error}', description: '${hint.value.description}' }"`
      : '';

  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';

  return (
    scriptStart +
    `
import { Textarea } from '@ded-wds-vue/ui';
import { ref } from 'vue';

const modelValue = ref('');

const handleInput = (event) => {
  console.log('Textarea input:', event.target.value);
};
` +
    scriptEnd +
    `

<template>
  <Textarea
    v-model="modelValue"
    label="${label.value}"
    placeholder="${placeholder.value}"${limitAttr}${hintAttr}${disabledAttr}
    @input="handleInput"
  />
</template>`
  );
});

onMounted(() => {
  console.log('Textarea component mounted');
  console.log('初始值:', modelValue.value);
  console.log('textareaRef:', textareaRef.value);
});
</script>

<template>
  <div class="test-textarea-container">
    <Textarea
      ref="textareaRef"
      :label="label"
      :placeholder="placeholder"
      :limit="limit"
      :hint="hint"
      :isDisabled="isDisabled"
      :className="className"
      v-model="modelValue"
      @input="handleInput"
    />

    <div class="textarea-controls">
      <p class="settings-title">當前 Textarea 設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">輸入值:</span>
          <strong class="setting-value">{{ modelValue || '(空)' }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">標籤:</span>
          <strong class="setting-value">{{ label }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">提示文字:</span>
          <strong class="setting-value">{{ placeholder }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">字數限制:</span>
          <strong class="setting-value">{{ limit }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">錯誤訊息:</span>
          <strong class="setting-value">{{ hint.error || '(無)' }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">描述訊息:</span>
          <strong class="setting-value">{{
            hint.description || '(無)'
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">狀態:</span>
          <strong class="setting-value">{{
            isDisabled ? '禁用' : '啟用'
          }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 外觀樣式控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀樣式</h4>
          <div class="control-buttons">
            <button
              @click="label = label === 'Label' ? '自訂標籤' : 'Label'"
              class="control-button primary"
            >
              切換標籤
            </button>
            <button
              @click="
                placeholder =
                  placeholder === 'Placeholder'
                    ? '請輸入內容...'
                    : 'Placeholder'
              "
              class="control-button primary"
            >
              切換提示文字
            </button>
          </div>
        </div>

        <!-- 功能設定控制組 -->
        <div class="control-group">
          <h4 class="group-title">功能設定</h4>
          <div class="control-buttons">
            <button @click="increaseLimit" class="control-button secondary">
              增加字數限制
            </button>
            <button @click="decreaseLimit" class="control-button secondary">
              減少字數限制
            </button>
            <button @click="updateHintError" class="control-button secondary">
              {{ hint.error ? '移除錯誤' : '顯示錯誤' }}
            </button>
            <button
              @click="updateHintDescription"
              class="control-button secondary"
            >
              {{ hint.description ? '移除描述' : '顯示描述' }}
            </button>
          </div>
        </div>

        <!-- 狀態控制組 -->
        <div class="control-group">
          <h4 class="group-title">狀態控制</h4>
          <div class="control-buttons">
            <button @click="toggleDisabled" class="control-button accent">
              {{ isDisabled ? '啟用' : '禁用' }}
            </button>
            <button @click="focusTextarea" class="control-button accent">
              聚焦文字區域
            </button>
            <button @click="modelValue = ''" class="control-button accent">
              清空輸入值
            </button>
            <button
              @click="modelValue = modelValue ? '' : '這是測試內容\n第二行內容'"
              class="control-button accent"
            >
              {{ modelValue ? '清空內容' : '填入內容' }}
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
            title="Textarea 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.test-textarea-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-textarea-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.textarea-controls {
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

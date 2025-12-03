<script setup lang="ts">
import { ref, computed } from 'vue';
import Slider from '../../../libs/src/ui/element/Slider/Slider.vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';

const min = ref(0);
const max = ref(100);
const step = ref(5);
const value = ref(50);
const isDisabled = ref(false);
const label = ref('%');

// CodeBlock 收合狀態
const isCodeCollapsed = ref(true);

// 參考到 Slider 元件實例
const sliderRef = ref(null);

function increase() {
  if (value.value + step.value <= max.value) value.value += step.value;
}

function decrease() {
  if (value.value - step.value >= min.value) value.value -= step.value;
}

function reset() {
  value.value = 50;
}

function toggleDisabled() {
  isDisabled.value = !isDisabled.value;
}

function toggleLabel() {
  label.value = label.value ? '' : '%';
}

function adjustRange(type: 'increase' | 'decrease') {
  if (type === 'increase') {
    // 擴大範圍
    if (max.value < 200) {
      max.value += 20;
    }
    if (min.value > -50) {
      min.value -= 10;
    }
  } else {
    // 縮小範圍
    if (max.value > value.value + 20) {
      max.value -= 20;
    }
    if (min.value < value.value - 20) {
      min.value += 10;
    }
  }

  // 確保當前值在新範圍內
  if (value.value > max.value) {
    value.value = max.value;
  }
  if (value.value < min.value) {
    value.value = min.value;
  }
}

// 收合/展開程式碼
const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};

// 產生動態程式碼範例
const codeExample = computed(() => {
  const disabledAttr = isDisabled.value ? '\n    :isDisabled="true"' : '';
  const labelAttr = label.value ? `\n    label="${label.value}"` : '';
  const minAttr = min.value !== 0 ? `\n    :min="${min.value}"` : '';
  const maxAttr = max.value !== 100 ? `\n    :max="${max.value}"` : '';
  const stepAttr = step.value !== 5 ? `\n    :step="${step.value}"` : '';

  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';

  return (
    scriptStart +
    `
import { Slider } from '@ded-wds-vue/ui';

const sliderValue = ref(${value.value});
` +
    scriptEnd +
    `

<template>
  <Slider
    v-model="sliderValue"${minAttr}${maxAttr}${stepAttr}
    :isShowRange="true"
    :isShowCurrValue="true"${labelAttr}${disabledAttr}
  />
</template>`
  );
});
</script>

<template>
  <div class="test-slider-container">
    <Slider
      ref="sliderRef"
      v-model="value"
      :min="min"
      :max="max"
      :step="step"
      :isShowRange="true"
      :isShowCurrValue="true"
      :isDisabled="isDisabled"
      :label="label"
      style="width: calc(100% - 32px); box-sizing: border-box; margin: 0 16px"
    />

    <div class="slider-controls">
      <p class="settings-title">當前滑桿設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">目前數值:</span>
          <strong class="setting-value">{{ value }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">最小值:</span>
          <strong class="setting-value">{{ min }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">最大值:</span>
          <strong class="setting-value">{{ max }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">步進:</span>
          <strong class="setting-value">{{ step }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">標籤:</span>
          <strong class="setting-value">{{ label || '(無)' }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">狀態:</span>
          <strong class="setting-value">{{
            isDisabled ? '禁用' : '啟用'
          }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 數值控制組 -->
        <div class="control-group">
          <h4 class="group-title">數值調整</h4>
          <div class="control-buttons">
            <button
              @click="decrease"
              :disabled="value <= min"
              class="control-button primary"
            >
              減少
            </button>
            <button
              @click="increase"
              :disabled="value >= max"
              class="control-button primary"
            >
              增加
            </button>
            <button @click="reset" class="control-button primary">重設</button>
          </div>
        </div>

        <!-- 狀態控制組 -->
        <div class="control-group">
          <h4 class="group-title">狀態控制</h4>
          <div class="control-buttons">
            <button @click="toggleDisabled" class="control-button secondary">
              {{ isDisabled ? '啟用' : '禁用' }}
            </button>
            <button @click="toggleLabel" class="control-button secondary">
              {{ label ? '移除標籤' : '顯示標籤' }}
            </button>
          </div>
        </div>

        <!-- 範圍設定組 -->
        <div class="control-group">
          <h4 class="group-title">範圍設定</h4>
          <div class="control-buttons">
            <button
              @click="adjustRange('decrease')"
              class="control-button accent"
            >
              縮小範圍
            </button>
            <button
              @click="adjustRange('increase')"
              class="control-button accent"
            >
              擴大範圍
            </button>
          </div>
        </div>
      </div>
    </div>

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
            title="Slider 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.test-slider-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-slider-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.slider-controls {
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

.control-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
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

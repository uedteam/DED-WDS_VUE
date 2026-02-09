<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Toggle from '@/ui/element/Toggle/Toggle.vue';
const themeColor = ref('primary');
const checkLabel = ref('on');
const unCheckLabel = ref('off');
const isDisabled = ref(false);
const className = ref('');
const isChecked = ref(false);
const toggleRef = ref(null);

const availableColors = [
  'primary',
  'secondary',
  'neutral',
  'info',
  'success',
  'warning',
  'error',
];

// 事件處理
const handleToggleChange = () => {
  console.log('Toggle changed:', isChecked.value);
};

// 控制函數
const toggleThemeColor = async () => {
  const currentIndex = availableColors.indexOf(themeColor.value);
  themeColor.value =
    availableColors[(currentIndex + 1) % availableColors.length];
  await nextTick();
};

const toggleState = () => {
  isChecked.value = !isChecked.value;
};

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
};

const toggleLabels = () => {
  if (checkLabel.value === 'on' && unCheckLabel.value === 'off') {
    checkLabel.value = '開啟';
    unCheckLabel.value = '關閉';
  } else if (checkLabel.value === '開啟' && unCheckLabel.value === '關閉') {
    checkLabel.value = 'YES';
    unCheckLabel.value = 'NO';
  } else if (checkLabel.value === 'YES' && unCheckLabel.value === 'NO') {
    checkLabel.value = '';
    unCheckLabel.value = '';
  } else {
    checkLabel.value = 'on';
    unCheckLabel.value = 'off';
  }
};

const setToTrue = () => {
  isChecked.value = true;
};

const setToFalse = () => {
  isChecked.value = false;
};

const addCustomClass = () => {
  className.value = className.value ? '' : 'custom-toggle-class';
};

onMounted(() => {
  // 組件掛載時可執行初始化
});
import CodeBlock from '@/ui/element/CodeBlock/CodeBlock.vue';
// 顯示程式碼區塊
import { computed as computed2, ref as ref2 } from 'vue';
const isCodeCollapsed = ref2(true);
const codeExample = computed2(() => {
  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';
  return (
    scriptStart +
    `\nimport { ref } from 'vue';\nimport Toggle from '@/ui/element/Toggle/Toggle.vue';\n\nconst themeColor = ref('${themeColor.value}');\nconst checkLabel = ref('${checkLabel.value}');\nconst unCheckLabel = ref('${unCheckLabel.value}');\nconst isDisabled = ref(${isDisabled.value});\nconst className = ref('${className.value}');\nconst isChecked = ref(${isChecked.value});\n\n` +
    scriptEnd +
    `\n\n<template>\n  <Toggle\n    :themeColor="themeColor"\n    :checkLabel="checkLabel"\n    :unCheckLabel="unCheckLabel"\n    :isDisabled="isDisabled"\n    :className="className"\n    v-model="isChecked"\n  />\n</template>`
  );
});
const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};
</script>

<template>
  <div class="test-toggle-container">
    <Toggle
      :ref="toggleRef"
      :themeColor="themeColor"
      :checkLabel="checkLabel"
      :unCheckLabel="unCheckLabel"
      :isDisabled="isDisabled"
      :className="className"
      v-model="isChecked"
      @update:modelValue="handleToggleChange"
    />

    <div class="toggle-controls">
      <p class="settings-title">當前 Toggle 設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">主題顏色:</span>
          <strong class="setting-value">{{ themeColor }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">開啟標籤:</span>
          <strong class="setting-value">{{ checkLabel }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">關閉標籤:</span>
          <strong class="setting-value">{{ unCheckLabel }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">當前狀態:</span>
          <strong class="setting-value">{{
            isChecked ? '開啟' : '關閉'
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">禁用狀態:</span>
          <strong class="setting-value">{{
            isDisabled ? '已禁用' : '已啟用'
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">自訂樣式:</span>
          <strong class="setting-value">{{ className || '無' }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 外觀樣式控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀樣式</h4>
          <div class="control-buttons">
            <button @click="toggleThemeColor" class="control-button primary">
              切換顏色
            </button>
            <button @click="toggleLabels" class="control-button primary">
              切換標籤文字
            </button>
            <button @click="addCustomClass" class="control-button primary">
              {{ className ? '移除' : '添加' }}自訂樣式
            </button>
          </div>
        </div>
        <!-- 功能設定控制組 -->
        <div class="control-group">
          <h4 class="group-title">功能設定</h4>
          <div class="control-buttons">
            <button @click="toggleState" class="control-button secondary">
              切換狀態
            </button>
            <button @click="setToTrue" class="control-button secondary">
              設為開啟
            </button>
            <button @click="setToFalse" class="control-button secondary">
              設為關閉
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
          </div>
        </div>
      </div>

      <!-- 顯示程式碼區塊 -->
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
              title="Toggle 組件程式碼範例"
              :showLanguageLabel="true"
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-toggle-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-toggle-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.toggle-controls {
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
.test-toggle-container :deep(.custom-toggle-class) {
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}

/* 顯示程式碼區塊樣式 */
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

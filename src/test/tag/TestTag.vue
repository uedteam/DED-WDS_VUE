<script setup>
import Tag from '@/ui/element/Tag/Tag.vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';
import { ref, onMounted, nextTick, computed } from 'vue';

// 定義 Tag 元件的各種屬性
const themeColor = ref('primary');
const variant = ref('filled');
const label = ref('標籤文字');
const href = ref('');
const prefix = ref('');
const closable = ref(true);
const isDisabled = ref(false);
const tagRef = ref(null);

// CodeBlock 收合狀態
const isCodeCollapsed = ref(true);

// 事件處理函數
const handleClose = () => {
  console.log('Tag closed');
};

// 收合/展開程式碼
const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};

// 可用顏色列表
const availableColors = [
  'primary',
  'secondary',
  'neutral',
  'info',
  'success',
  'warning',
  'error',
];

// 控制函數
const toggleThemeColor = async () => {
  const currentIndex = availableColors.indexOf(themeColor.value);
  // 確保在陣列範圍內找到當前值，否則從頭開始
  const nextIndex =
    currentIndex !== -1 ? (currentIndex + 1) % availableColors.length : 0;
  themeColor.value = availableColors[nextIndex];

  // 使用 nextTick 確保 DOM 已更新
  await nextTick();
  console.log(`顏色已切換到: ${themeColor.value}`);
};

const toggleVariant = () => {
  const variants = ['filled', 'ghost'];
  const currentIndex = variants.indexOf(variant.value);
  variant.value = variants[(currentIndex + 1) % variants.length];
};

const toggleClosable = () => {
  closable.value = !closable.value;
};

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
};

const toggleHref = () => {
  href.value = href.value ? '' : 'https://example.com';
};

const togglePrefix = () => {
  prefix.value = prefix.value ? '' : 'SvgSearch';
};

// 產生動態程式碼範例
const codeExample = computed(() => {
  const disabledAttr = isDisabled.value ? '\n    :isDisabled="true"' : '';
  const hrefAttr = href.value ? `\n    href="${href.value}"` : '';
  const prefixAttr = prefix.value ? `\n    prefix="${prefix.value}"` : '';
  const closableAttr = closable.value ? '\n    :closable="true"' : '';

  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';

  return (
    scriptStart +
    `
import { Tag } from '@ded-wds-vue/ui';

const handleClose = () => {
  console.log('Tag closed');
};
` +
    scriptEnd +
    `

<template>
  <Tag
    themeColor="${themeColor.value}"
    variant="${variant.value}"
    label="${label.value}"${hrefAttr}${prefixAttr}${closableAttr}${disabledAttr}
    @onClose="handleClose"
  />
</template>`
  );
});

onMounted(() => {
  console.log('Tag component mounted');
  console.log('初始顏色:', themeColor.value);
});
</script>

<template>
  <div class="test-tag-container">
    <Tag
      ref="tagRef"
      :themeColor="themeColor"
      :variant="variant"
      :label="label"
      :href="href"
      :prefix="prefix"
      :closable="closable"
      :isDisabled="isDisabled"
      @onClose="handleClose"
    />

    <div class="tag-controls">
      <p class="settings-title">當前標籤設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">主題顏色:</span>
          <strong class="setting-value">{{ themeColor }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">樣式變體:</span>
          <strong class="setting-value">{{ variant }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">標籤文字:</span>
          <strong class="setting-value">{{ label }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">Href:</span>
          <strong class="setting-value">{{ href || '無' }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">Prefix:</span>
          <strong class="setting-value">{{ prefix || '無' }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">可關閉:</span>
          <strong class="setting-value">{{ closable ? '是' : '否' }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">狀態:</span>
          <strong class="setting-value">{{
            isDisabled ? '禁用' : '啟用'
          }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 樣式控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀樣式</h4>
          <div class="control-buttons">
            <button @click="toggleThemeColor" class="control-button primary">
              切換顏色
            </button>
            <button @click="toggleVariant" class="control-button primary">
              切換變體
            </button>
          </div>
        </div>

        <!-- 屬性控制組 -->
        <div class="control-group">
          <h4 class="group-title">屬性設定</h4>
          <div class="control-buttons">
            <button @click="toggleHref" class="control-button secondary">
              切換 Href
            </button>
            <button @click="togglePrefix" class="control-button secondary">
              切換 Prefix
            </button>
            <button @click="toggleClosable" class="control-button secondary">
              切換可關閉
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
            <button
              @click="label = label === '標籤文字' ? '新標籤' : '標籤文字'"
              class="control-button accent"
            >
              切換文字
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
            title="Tag 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.test-tag-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-tag-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.tag-controls {
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

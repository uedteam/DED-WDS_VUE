<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import DatePicker from '@/ui/element/DatePicker/DatePicker.vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';

// 定義 DatePicker 元件的各種屬性
const format = ref('yyyy/mm/dd');
const isRange = ref(false);
const placeholder = ref('選擇日期');
const className = ref('');
const datePickerRef = ref(null);

// 單日期模式的 v-model
const singleDate = ref('');

// 範圍日期模式的 v-model
const dateRange = ref(['', '']);

// CodeBlock 收合狀態
const isCodeCollapsed = ref(true);

// 用於強制重新渲染的 key
const componentKey = ref(0);

// 可用格式列表
const availableFormats = [
  'yyyy/mm/dd',
  'dd/mm/yyyy',
  'mm/dd/yyyy',
  'yyyy-mm-dd',
  'dd-mm-yyyy',
  'mm-dd-yyyy',
];

// 控制函數
const handleDateChange = (value) => {
  console.log('日期變更:', value);
};

const toggleFormat = async () => {
  const currentIndex = availableFormats.indexOf(format.value);
  const nextIndex = (currentIndex + 1) % availableFormats.length;
  format.value = availableFormats[nextIndex];

  // 強制重新渲染組件
  componentKey.value++;
  await nextTick();
};

const toggleRange = async () => {
  isRange.value = !isRange.value;

  // 當切換模式時，重置日期值
  if (isRange.value) {
    dateRange.value = ['', ''];
  } else {
    singleDate.value = '';
  }

  // 強制重新渲染組件
  componentKey.value++;
  await nextTick();
};

const clearDate = () => {
  if (isRange.value) {
    dateRange.value = ['', ''];
  } else {
    singleDate.value = '';
  }
};

const setToday = () => {
  const today = new Date();
  const formattedToday = formatDateByFormat(today, format.value);

  if (isRange.value) {
    dateRange.value = [formattedToday, formattedToday];
  } else {
    singleDate.value = formattedToday;
  }
};

const setNextWeek = () => {
  if (!isRange.value) return;

  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const formattedToday = formatDateByFormat(today, format.value);
  const formattedNextWeek = formatDateByFormat(nextWeek, format.value);

  dateRange.value = [formattedToday, formattedNextWeek];
};

const updatePlaceholder = () => {
  const placeholders = [
    '選擇日期',
    '請選擇日期',
    'Select Date',
    '點擊選擇',
    '日期選擇',
  ];
  const currentIndex = placeholders.indexOf(placeholder.value);
  placeholder.value = placeholders[(currentIndex + 1) % placeholders.length];
};

// 格式化日期輔助函數
function formatDateByFormat(date, formatStr) {
  if (!date) return '';

  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) return '';

  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const d = String(dateObj.getDate()).padStart(2, '0');

  switch (formatStr.toLowerCase()) {
    case 'yyyy/mm/dd':
      return `${y}/${m}/${d}`;
    case 'dd/mm/yyyy':
      return `${d}/${m}/${y}`;
    case 'mm/dd/yyyy':
      return `${m}/${d}/${y}`;
    case 'yyyy-mm-dd':
      return `${y}-${m}-${d}`;
    case 'dd-mm-yyyy':
      return `${d}-${m}-${y}`;
    case 'mm-dd-yyyy':
      return `${m}-${d}-${y}`;
    default:
      return `${y}/${m}/${d}`;
  }
}

// 收合/展開程式碼
const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};

// 計算顯示值（避免過長）
const displayValue = computed(() => {
  if (isRange.value) {
    const start = dateRange.value[0] || '空';
    const end = dateRange.value[1] || '空';
    return `${start} ~ ${end}`;
  }
  return singleDate.value || '空';
});

// 產生動態程式碼範例
const codeExample = computed(() => {
  const rangeAttr = isRange.value ? '\n    :isRange="true"' : '';
  const formatAttr =
    format.value !== 'yyyy/mm/dd' ? `\n    format="${format.value}"` : '';
  const placeholderAttr =
    placeholder.value !== '選擇日期'
      ? `\n    placeholder="${placeholder.value}"`
      : '';

  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';

  return (
    scriptStart +
    `
import { DatePicker } from '@ded-wds-vue/ui';
import { ref } from 'vue';

const ${isRange.value ? 'dateRange' : 'selectedDate'} = ref(${isRange.value ? "['', '']" : "''"});
` +
    scriptEnd +
    `

<template>
  <DatePicker
    v-model="${isRange.value ? 'dateRange' : 'selectedDate'}"${formatAttr}${rangeAttr}${placeholderAttr}
  />
</template>`
  );
});

onMounted(() => {
  console.log('DatePicker component mounted');
  console.log('初始格式:', format.value);
  console.log('範圍模式:', isRange.value);
});
</script>

<template>
  <div class="test-datepicker-container">
    <div class="datepicker-wrapper">
      <DatePicker
        v-if="!isRange"
        :key="`single-${componentKey}`"
        ref="datePickerRef"
        v-model="singleDate"
        :format="format"
        :isRange="isRange"
        :placeholder="placeholder"
        :className="className"
        @update:modelValue="handleDateChange"
      />
      <DatePicker
        v-else
        :key="`range-${componentKey}`"
        ref="datePickerRef"
        v-model="dateRange"
        :format="format"
        :isRange="isRange"
        :placeholder="placeholder"
        :className="className"
        @update:modelValue="handleDateChange"
      />
    </div>

    <div class="datepicker-controls">
      <p class="settings-title">當前日期選擇器設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">日期格式:</span>
          <strong class="setting-value">{{ format }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">範圍模式:</span>
          <strong class="setting-value">{{ isRange ? '啟用' : '禁用' }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">佔位文字:</span>
          <strong class="setting-value">{{ placeholder }}</strong>
        </div>
        <div class="setting-item full-width">
          <span class="setting-label">目前值:</span>
          <strong class="setting-value">{{ displayValue }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 外觀樣式控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀樣式</h4>
          <div class="control-buttons">
            <button @click="toggleFormat" class="control-button primary">
              切換格式
            </button>
            <button @click="updatePlaceholder" class="control-button primary">
              切換佔位文字
            </button>
          </div>
        </div>

        <!-- 功能設定控制組 -->
        <div class="control-group">
          <h4 class="group-title">功能設定</h4>
          <div class="control-buttons">
            <button @click="toggleRange" class="control-button secondary">
              {{ isRange ? '單日期模式' : '範圍模式' }}
            </button>
            <button @click="clearDate" class="control-button secondary">
              清除日期
            </button>
          </div>
        </div>

        <!-- 日期設定控制組 -->
        <div class="control-group">
          <h4 class="group-title">日期設定</h4>
          <div class="control-buttons">
            <button @click="setToday" class="control-button accent">
              設為今天
            </button>
            <button
              @click="setNextWeek"
              class="control-button accent"
              :disabled="!isRange"
            >
              今天到下週
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
            title="DatePicker 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* 容器樣式 */
.test-datepicker-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

.datepicker-wrapper {
  margin-bottom: 24px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}

.datepicker-controls {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 設定標題 */
.settings-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 12px 0;
}

/* 設定網格 */
.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.setting-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  transition: all 0.2s ease;
  min-height: 70px;
}

.setting-item:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.setting-item.full-width {
  grid-column: 1 / -1;
}

.setting-label {
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
  min-width: 80px;
}

.setting-value {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 控制組樣式 */
.control-groups {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.control-group {
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
}

.group-title {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 12px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #e5e7eb;
}

.control-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* 按鈕樣式 - 三色系統 */
.control-button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.control-button.primary {
  background: linear-gradient(135deg, #007bff, #0056b3);
}

.control-button.primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #0056b3, #004085);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.control-button.secondary {
  background: linear-gradient(135deg, #6c757d, #495057);
}

.control-button.secondary:hover:not(:disabled) {
  background: linear-gradient(135deg, #495057, #343a40);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(108, 117, 125, 0.3);
}

.control-button.accent {
  background: linear-gradient(135deg, #28a745, #1e7e34);
}

.control-button.accent:hover:not(:disabled) {
  background: linear-gradient(135deg, #1e7e34, #155724);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
}

.control-button:disabled {
  background: linear-gradient(135deg, #e0e0e0, #d0d0d0);
  cursor: not-allowed;
  opacity: 0.6;
  transform: none;
  box-shadow: none;
}

.control-button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 日期顯示區 */
.date-display {
  padding: 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
}

.display-title {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 12px 0;
}

.single-date,
.date-range {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.date-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.display-label {
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
  min-width: 80px;
}

code {
  padding: 4px 8px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 13px;
  color: #374151;
}

/* 程式碼範例區塊 */
.code-example-section {
  margin-top: 20px;
  border-top: 1px solid #e5e7eb;
  padding-top: 20px;
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

.toggle-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.toggle-code-button.collapsed .toggle-icon-container {
  transform: rotate(-90deg);
}

.toggle-svg {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}

.button-text {
  font-size: 14px;
}

/* 收合動畫 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 1000px;
  opacity: 1;
  transform: translateY(0);
}

.code-container {
  margin-top: 12px;
}

/* DatePicker 範圍模式的額外樣式 */
.test-datepicker-container :deep(.ded-date-pick-range) {
  display: flex;
  gap: 10px;
  align-items: center;
}

.test-datepicker-container :deep(.ded-date-pick-range) > * {
  flex: 1;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .test-datepicker-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }

  .settings-grid {
    grid-template-columns: 1fr;
  }

  .setting-item.full-width {
    grid-column: 1;
  }

  .control-buttons {
    flex-direction: column;
  }

  .control-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .test-datepicker-container {
    margin: 10px;
    padding: 12px;
  }

  .settings-title,
  .group-title,
  .display-title {
    font-size: 13px;
  }

  .setting-label,
  .display-label {
    font-size: 12px;
    min-width: 70px;
  }

  .setting-value {
    font-size: 13px;
  }

  .control-button {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>

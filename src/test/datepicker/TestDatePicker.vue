<script setup>
import DatePicker from '@/ui/element/DatePicker/DatePicker.vue';
import { ref, onMounted, nextTick } from 'vue';

// 定義 DatePicker 元件的各種屬性
const format = ref('yyyy/mm/dd');
const isRange = ref(false);
const placeholder = ref('選擇日期');
const className = ref('');
const datePickerRef = ref(null);
const operationMessage = ref('');

// 單日期模式的 v-model
const singleDate = ref('');

// 範圍日期模式的 v-model
const dateRange = ref(['', '']);

// 用於顯示臨時訊息
const showOperationMessage = (message) => {
  operationMessage.value = message;
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};

// 事件處理函數
const handleDateChange = (value) => {
  console.log('日期變更:', value);
};

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
const toggleFormat = async () => {
  const currentIndex = availableFormats.indexOf(format.value);
  const nextIndex = (currentIndex + 1) % availableFormats.length;
  format.value = availableFormats[nextIndex];

  await nextTick();
  showOperationMessage(`格式已切換到: ${format.value}`);
};

const toggleRange = async () => {
  isRange.value = !isRange.value;

  // 當切換模式時，重置日期值
  if (isRange.value) {
    dateRange.value = ['', ''];
  } else {
    singleDate.value = '';
  }

  await nextTick();
  showOperationMessage(`範圍模式: ${isRange.value ? '啟用' : '禁用'}`);
};

const clearDate = () => {
  if (isRange.value) {
    dateRange.value = ['', ''];
  } else {
    singleDate.value = '';
  }
  showOperationMessage('日期已清除');
};

const setToday = () => {
  const today = new Date();
  const formattedToday = formatDateByFormat(today, format.value);

  if (isRange.value) {
    dateRange.value = [formattedToday, formattedToday];
  } else {
    singleDate.value = formattedToday;
  }
  showOperationMessage('已設定為今天');
};

const setNextWeek = () => {
  if (!isRange.value) {
    showOperationMessage('此功能僅在範圍模式下可用');
    return;
  }

  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const formattedToday = formatDateByFormat(today, format.value);
  const formattedNextWeek = formatDateByFormat(nextWeek, format.value);

  dateRange.value = [formattedToday, formattedNextWeek];
  showOperationMessage('已設定為今天到下週');
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
  showOperationMessage(`佔位文字已切換為: ${placeholder.value}`);
};

onMounted(() => {
  console.log('DatePicker component mounted');
  console.log('初始格式:', format.value);
  console.log('範圍模式:', isRange.value);
});
</script>

<template>
  <div class="test-datepicker-container">
    <!-- 操作消息提示 -->
    <div v-if="operationMessage" class="operation-message">
      {{ operationMessage }}
    </div>

    <DatePicker
      v-if="!isRange"
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
      ref="datePickerRef"
      v-model="dateRange"
      :format="format"
      :isRange="isRange"
      :placeholder="placeholder"
      :className="className"
      @update:modelValue="handleDateChange"
    />

    <div class="datepicker-controls">
      <p>當前日期選擇器設定:</p>
      <ul>
        <li>
          日期格式: <strong>{{ format }}</strong>
        </li>
        <li>
          範圍模式: <strong>{{ isRange ? '啟用' : '禁用' }}</strong>
        </li>
        <li>
          佔位文字: <strong>{{ placeholder }}</strong>
        </li>
        <li>
          目前值:
          <strong>{{
            isRange
              ? `[${dateRange[0] || '空'}, ${dateRange[1] || '空'}]`
              : singleDate || '空'
          }}</strong>
        </li>
      </ul>

      <div class="control-buttons">
        <button @click="toggleFormat" class="control-button">切換格式</button>
        <button @click="toggleRange" class="control-button">
          {{ isRange ? '單日期模式' : '範圍模式' }}
        </button>
        <button @click="clearDate" class="control-button">清除日期</button>
        <button @click="setToday" class="control-button">設為今天</button>
        <button
          @click="setNextWeek"
          class="control-button"
          :disabled="!isRange"
        >
          今天到下週 (範圍)
        </button>
        <button @click="updatePlaceholder" class="control-button">
          切換佔位文字
        </button>
      </div>

      <div class="date-display">
        <h4>日期值顯示:</h4>
        <div v-if="!isRange" class="single-date">
          <span
            >目前值: <code>{{ singleDate || '未選擇' }}</code></span
          >
        </div>
        <div v-else class="date-range">
          <div>
            開始日期: <code>{{ dateRange[0] || '未選擇' }}</code>
          </div>
          <div>
            結束日期: <code>{{ dateRange[1] || '未選擇' }}</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-datepicker-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  margin: 20px auto;
  position: relative;
}

.operation-message {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  animation: fadeInOut 2s ease;
  z-index: 100;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.datepicker-controls {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.datepicker-controls p {
  margin-bottom: 10px;
  font-weight: 500;
}

.datepicker-controls ul {
  margin-bottom: 15px;
  padding-left: 20px;
}

.control-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.control-button {
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.control-button:hover:not(:disabled) {
  background-color: #e5e5e5;
}

.control-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.date-display {
  margin-top: 15px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
}

.date-display h4 {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
}

.single-date,
.date-range {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.date-range > div {
  display: block;
  margin-bottom: 6px;
}

code {
  background-color: #fff;
  padding: 4px 8px;
  border-radius: 3px;
  border: 1px solid #ddd;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 13px;
  color: #666;
  margin-left: 8px;
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
</style>

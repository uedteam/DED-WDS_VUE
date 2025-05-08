<script setup>
import Input from '@/ui/element/Input/Input.vue';
import { ref, onMounted } from 'vue';

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
const operationMessage = ref('');

// 參考到 Input 元件實例
const inputRef = ref(null);

// 用於顯示臨時訊息
const showOperationMessage = (message) => {
  operationMessage.value = message;
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};

// 事件處理函數
const handleClear = () => {
  showOperationMessage('輸入框已清除');
};

const toggleError = () => {
  const oldError = hint.value.error;
  hint.value.error = hint.value.error ? '' : '輸入格式有誤';
  const newState = hint.value.error ? '已顯示錯誤提示' : '已移除錯誤提示';
  showOperationMessage(newState);
};

const toggleType = () => {
  const oldType = type.value;
  type.value = type.value === 'text' ? 'password' : 'text';
  showOperationMessage(`輸入類型已從 ${oldType} 切換到 ${type.value}`);
};

const toggleSize = () => {
  const sizes = ['small', 'medium', 'large'];
  const currentIndex = sizes.indexOf(size.value);
  const oldSize = size.value;
  size.value = sizes[(currentIndex + 1) % sizes.length];
  showOperationMessage(`尺寸已從 ${oldSize} 切換到 ${size.value}`);
};

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
  showOperationMessage(`輸入框已${isDisabled.value ? '禁用' : '啟用'}`);
};

const togglePrefix = () => {
  const oldPrefix = prefix.value;
  prefix.value = prefix.value ? '' : 'SvgSearch';
  showOperationMessage(`前綴圖標已${prefix.value ? '添加' : '移除'}`);
};

const focusInput = () => {
  inputRef.value?.input?.focus();
  showOperationMessage('輸入框已獲得焦點');
};

onMounted(() => {
  console.log('Input component mounted');

  // 初始輸入框獲得焦點
  inputRef.value.input.focus();
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

    <div class="operation-message" v-if="operationMessage">
      {{ operationMessage }}
    </div>

    <div class="input-controls">
      <p>當前設定:</p>
      <ul>
        <li>
          輸入值: <strong>{{ inputValue || '(空)' }}</strong>
        </li>
        <li>
          輸入類型: <strong>{{ type }}</strong>
        </li>
        <li>
          尺寸: <strong>{{ size }}</strong>
        </li>
        <li>
          前綴圖標: <strong>{{ prefix || '(無)' }}</strong>
        </li>
        <li>
          狀態: <strong>{{ isDisabled ? '禁用' : '啟用' }}</strong>
        </li>
        <li>
          提示: <strong>{{ hint.error || hint.description }}</strong>
        </li>
      </ul>

      <div class="control-buttons">
        <button @click="toggleError" class="control-button">
          {{ hint.error ? '移除錯誤提示' : '顯示錯誤提示' }}
        </button>
        <button @click="toggleType" class="control-button">
          切換為{{ type === 'text' ? '密碼' : '文字' }}類型
        </button>
        <button @click="toggleSize" class="control-button">
          切換尺寸 (當前: {{ size }})
        </button>
        <button @click="toggleDisabled" class="control-button">
          {{ isDisabled ? '啟用輸入框' : '禁用輸入框' }}
        </button>
        <button @click="togglePrefix" class="control-button">
          {{ prefix ? '移除前綴圖標' : '添加前綴圖標' }}
        </button>
        <button @click="focusInput" class="control-button">聚焦輸入框</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-input-container {
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

.input-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.input-controls p {
  margin-bottom: 10px;
  font-weight: 500;
}

.input-controls ul {
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

.control-button:hover {
  background-color: #e5e5e5;
}
</style>

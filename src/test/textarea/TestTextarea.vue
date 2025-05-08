<script setup>
import Textarea from '@/ui/element/Textarea/Textarea.vue';
import { ref, onMounted, nextTick } from 'vue';

// 定義 Textarea 元件的各種屬性
const label = ref('Label');
const placeholder = ref('Placeholder');
const limit = ref(30);
const hint = ref({ error: '', description: '' });
const isDisabled = ref(false);
const className = ref('');
const modelValue = ref('');

// 事件處理函數
const handleInput = (event) => {
  console.log('Textarea input:', event.target.value);
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

onMounted(() => {
  console.log('Textarea component mounted');
  console.log('初始值:', modelValue.value); // 增加調試日誌
});
</script>

<template>
  <div class="test-textarea-container">
    <Textarea
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
      <p>當前 Textarea 設定:</p>
      <ul>
        <li>
          標籤: <strong>{{ label }}</strong>
        </li>
        <li>
          提示文字: <strong>{{ placeholder }}</strong>
        </li>
        <li>
          字數限制: <strong>{{ limit }}</strong>
        </li>
        <li>
          提示訊息:
          <strong>
            {{ hint.error ? `Error: ${hint.error}` : hint.description }}
          </strong>
        </li>
        <li>
          狀態: <strong>{{ isDisabled ? '禁用' : '啟用' }}</strong>
        </li>
        <li>
          輸入值: <strong>{{ modelValue }}</strong>
        </li>
      </ul>

      <div class="control-buttons">
        <button @click="toggleDisabled" class="control-button">
          {{ isDisabled ? '啟用' : '禁用' }}
        </button>
        <button @click="updateHintError" class="control-button">
          切換錯誤訊息
        </button>
        <button @click="updateHintDescription" class="control-button">
          切換描述訊息
        </button>
        <button @click="increaseLimit" class="control-button">
          增加字數限制
        </button>
        <button @click="decreaseLimit" class="control-button">
          減少字數限制
        </button>
        <button @click="modelValue = ''" class="control-button">
          清空輸入值
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-textarea-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  margin: 20px auto;
}

.textarea-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.textarea-controls p {
  margin-bottom: 10px;
  font-weight: 500;
}

.textarea-controls ul {
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
  transition: background-color 0.2s ease;
}

.control-button:hover {
  background-color: #e5e5e5;
}
</style>

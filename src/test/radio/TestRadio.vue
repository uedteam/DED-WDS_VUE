<script setup>
import Radio from '@/ui/element/Radio/Radio.vue';
import { ref, onMounted, nextTick } from 'vue';

// 定義 Radio 元件的各種屬性
const dataSource = ref([
  { value: 'option1', label: '選項一', name: 'group1', isDisabled: false },
  { value: 'option2', label: '選項二', name: 'group1', isDisabled: false },
  { value: 'option3', label: '選項三', name: 'group1', isDisabled: true },
]);
const direction = ref('row');
const size = ref('medium');
const className = ref('');
const selectedValue = ref('option1');

// 控制函數
const toggleDirection = () => {
  direction.value = direction.value === 'row' ? 'column' : 'row';
};

const toggleSize = () => {
  const sizes = ['small', 'medium', 'large'];
  const currentIndex = sizes.indexOf(size.value);
  size.value = sizes[(currentIndex + 1) % sizes.length];
};

const toggleDisabled = (index) => {
  dataSource.value[index].isDisabled = !dataSource.value[index].isDisabled;
};

const selectOption = (value) => {
  selectedValue.value = value;
};

// 測試掛載時的行為
onMounted(() => {
  console.log('Radio component mounted');
  console.log('初始選擇值:', selectedValue.value);
});
</script>

<template>
  <div class="test-radio-container">
    <Radio
      :dataSource="dataSource"
      :direction="direction"
      :size="size"
      :className="className"
      v-model="selectedValue"
    />

    <div class="radio-controls">
      <p>當前 Radio 設定:</p>
      <ul>
        <li>
          排列方向: <strong>{{ direction }}</strong>
        </li>
        <li>
          尺寸: <strong>{{ size }}</strong>
        </li>
        <li>
          選擇值: <strong>{{ selectedValue }}</strong>
        </li>
      </ul>

      <div class="control-buttons">
        <button @click="toggleDirection" class="control-button">
          切換排列方向
        </button>
        <button @click="toggleSize" class="control-button">切換尺寸</button>
        <button
          v-for="(item, index) in dataSource"
          :key="index"
          @click="toggleDisabled(index)"
          class="control-button"
        >
          {{ item.isDisabled ? `啟用 ${item.label}` : `禁用 ${item.label}` }}
        </button>
        <button
          v-for="(item, index) in dataSource"
          :key="'select-' + index"
          @click="selectOption(item.value)"
          class="control-button"
        >
          選擇 {{ item.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-radio-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  margin: 20px auto;
}

.radio-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.radio-controls p {
  margin-bottom: 10px;
  font-weight: 500;
}

.radio-controls ul {
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

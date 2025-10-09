<script setup>
import Toggle from '@/ui/element/Toggle/Toggle.vue';
import { ref, onMounted, nextTick } from 'vue';

// 定義 Toggle 元件的各種屬性
const themeColor = ref('primary');
const checkLabel = ref('on');
const unCheckLabel = ref('off');
const isDisabled = ref(false);
const className = ref('');
const isChecked = ref(false);
const toggleRef = ref(null);

// 事件處理函數
const handleToggleChange = () => {
  console.log('Toggle changed:', isChecked.value);
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
  const nextIndex =
    currentIndex !== -1 ? (currentIndex + 1) % availableColors.length : 0;
  themeColor.value = availableColors[nextIndex];

  await nextTick();
  console.log(`顏色已切換到: ${themeColor.value}`);
};

const toggleState = () => {
  isChecked.value = !isChecked.value;
  console.log(`開關狀態: ${isChecked.value}`);
};

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
  console.log(`禁用狀態: ${isDisabled.value}`);
};

const toggleLabels = () => {
  if (checkLabel.value === 'on' && unCheckLabel.value === 'off') {
    checkLabel.value = '開啟';
    unCheckLabel.value = '關閉';
  } else if (checkLabel.value === '開啟' && unCheckLabel.value === '關閉') {
    checkLabel.value = 'YES';
    unCheckLabel.value = 'NO';
  } else {
    checkLabel.value = 'on';
    unCheckLabel.value = 'off';
  }
  console.log(`標籤已切換到: ${checkLabel.value}/${unCheckLabel.value}`);
};

const setToTrue = () => {
  isChecked.value = true;
  console.log('開關已設置為開啟');
};

const setToFalse = () => {
  isChecked.value = false;
  console.log('開關已設置為關閉');
};

const addCustomClass = () => {
  className.value = className.value ? '' : 'custom-toggle-class';
  console.log(`自訂樣式: ${className.value || '無'}`);
};

onMounted(() => {
  console.log('Toggle component mounted');
  console.log('初始狀態:', isChecked.value);
  console.log('初始顏色:', themeColor.value);
});
</script>

<template>
  <div class="test-toggle-container">
    <Toggle
      ref="toggleRef"
      :themeColor="themeColor"
      :checkLabel="checkLabel"
      :unCheckLabel="unCheckLabel"
      :isDisabled="isDisabled"
      :className="className"
      v-model="isChecked"
      @update:modelValue="handleToggleChange"
    />

    <div class="toggle-controls">
      <p>當前 Toggle 設定:</p>
      <ul>
        <li>
          主題顏色: <strong>{{ themeColor }}</strong>
        </li>
        <li>
          開啟標籤: <strong>{{ checkLabel }}</strong>
        </li>
        <li>
          關閉標籤: <strong>{{ unCheckLabel }}</strong>
        </li>
        <li>
          當前狀態: <strong>{{ isChecked ? '開啟' : '關閉' }}</strong>
        </li>
        <li>
          禁用狀態: <strong>{{ isDisabled ? '已禁用' : '已啟用' }}</strong>
        </li>
        <li>
          自訂樣式: <strong>{{ className || '無' }}</strong>
        </li>
      </ul>

      <div class="control-buttons">
        <button @click="toggleThemeColor" class="control-button">
          切換顏色
        </button>
        <button @click="toggleState" class="control-button">切換狀態</button>
        <button @click="toggleDisabled" class="control-button">
          {{ isDisabled ? '啟用' : '禁用' }}
        </button>
        <button @click="toggleLabels" class="control-button">
          切換標籤文字
        </button>
        <button @click="setToTrue" class="control-button">設為開啟</button>
        <button @click="setToFalse" class="control-button">設為關閉</button>
        <button @click="addCustomClass" class="control-button">
          {{ className ? '移除' : '添加' }}自訂樣式
        </button>
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
  max-width: 600px;
  margin: 20px auto;
}

.toggle-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.toggle-controls p {
  margin-bottom: 10px;
  font-weight: 500;
}

.toggle-controls ul {
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

/* 自訂樣式示例 */
.test-toggle-container :deep(.custom-toggle-class) {
  border: 2px solid #ff6b35;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}
</style>

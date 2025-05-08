<script setup>
import Button from '@/ui/element/Button/Button.vue';
import { ref, onMounted, nextTick } from 'vue';

// 定義 Button 元件的各種屬性
const themeColor = ref('primary'); // 改為從陣列中第一個開始
const variant = ref('filled');
const size = ref('medium');
const width = ref('fit');
const borderWidth = ref('1px');
const radius = ref('4px');
const isDisabled = ref(false);
const buttonRef = ref(null);
const buttonText = ref('Button');

// 事件處理函數
const handleClick = () => {
  console.log('Button clicked');
};

// 可用顏色列表
const availableColors = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info',
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
  console.log(`顏色已切換到: ${themeColor.value}`); // 增加調試日誌
};

const toggleVariant = () => {
  const variants = ['filled', 'outlined', 'text'];
  const currentIndex = variants.indexOf(variant.value);
  variant.value = variants[(currentIndex + 1) % variants.length];
};

const toggleSize = () => {
  const sizes = ['small', 'medium', 'large'];
  const currentIndex = sizes.indexOf(size.value);
  size.value = sizes[(currentIndex + 1) % sizes.length];
};

const toggleWidth = () => {
  const widths = ['fit', 'full'];
  width.value = width.value === widths[0] ? widths[1] : widths[0];
};

const increaseRadius = () => {
  const currentRadius = parseInt(radius.value);
  radius.value = `${currentRadius + 2}px`;
};

const decreaseRadius = () => {
  const currentRadius = parseInt(radius.value);
  if (currentRadius > 0) {
    radius.value = `${currentRadius - 2}px`;
  }
};

onMounted(() => {
  console.log('Button component mounted');
  console.log('Button ref:', buttonRef.value.buttonRef);
  console.log('初始顏色:', themeColor.value); // 增加調試日誌

  // 可以調用原生 DOM 方法
  buttonRef.value.buttonRef.focus(); // 讓按鈕獲得焦點

  // 訪問 DOM 屬性
  console.log('按鈕寬度:', buttonRef.value.buttonRef.offsetWidth);
  console.log('按鈕高度:', buttonRef.value.buttonRef.offsetHeight);
});
</script>

<template>
  <div class="test-button-container">
    <Button
      ref="buttonRef"
      :themeColor="themeColor"
      :variant="variant"
      :size="size"
      :width="width"
      :borderWidth="borderWidth"
      :radius="radius"
      :isDisabled="isDisabled"
      @click="handleClick"
    >
      {{ buttonText }}
    </Button>

    <div class="button-controls">
      <p>當前按鈕設定:</p>
      <ul>
        <li>
          主題顏色: <strong>{{ themeColor }}</strong>
        </li>
        <li>
          樣式變體: <strong>{{ variant }}</strong>
        </li>
        <li>
          尺寸: <strong>{{ size }}</strong>
        </li>
        <li>
          寬度類型: <strong>{{ width }}</strong>
        </li>
        <li>
          邊框寬度: <strong>{{ borderWidth }}</strong>
        </li>
        <li>
          圓角: <strong>{{ radius }}</strong>
        </li>
        <li>
          狀態: <strong>{{ isDisabled ? '禁用' : '啟用' }}</strong>
        </li>
      </ul>

      <div class="control-buttons">
        <button @click="toggleThemeColor" class="control-button">
          切換顏色
        </button>
        <button @click="toggleVariant" class="control-button">切換變體</button>
        <button @click="toggleSize" class="control-button">切換尺寸</button>
        <button @click="toggleWidth" class="control-button">切換寬度</button>
        <button @click="increaseRadius" class="control-button">增加圓角</button>
        <button @click="decreaseRadius" class="control-button">減少圓角</button>
        <button @click="isDisabled = !isDisabled" class="control-button">
          {{ isDisabled ? '啟用' : '禁用' }}
        </button>
        <button @click="buttonRef?.buttonRef?.focus()" class="control-button">
          聚焦按鈕
        </button>
        <button
          @click="buttonText = buttonText === 'Button' ? '點擊我' : 'Button'"
          class="control-button"
        >
          切換文字
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-button-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  margin: 20px auto;
}

.button-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.button-controls p {
  margin-bottom: 10px;
  font-weight: 500;
}

.button-controls ul {
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

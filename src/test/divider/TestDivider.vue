<script setup>
import Divider from '@/ui/element/Divider/Divider.vue';
import { ref, onMounted, nextTick } from 'vue';

// 定義 Divider 元件的各種屬性
const width = ref('1px');
const type = ref('solid');
const align = ref('center');
const className = ref('');
const dividerRef = ref(null);
const operationMessage = ref('');
const showText = ref(true);
const dividerText = ref('分隔線');

// 用於顯示臨時訊息
const showOperationMessage = (message) => {
  operationMessage.value = message;
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};

// 可用選項列表
const availableWidths = ['1px', '2px', '3px', '4px', '5px'];
const availableTypes = ['solid', 'dashed', 'dotted'];
const availableAligns = ['start', 'center', 'end'];

// 控制函數
const toggleWidth = async () => {
  const currentIndex = availableWidths.indexOf(width.value);
  const nextIndex = (currentIndex + 1) % availableWidths.length;
  width.value = availableWidths[nextIndex];

  await nextTick();
  showOperationMessage(`寬度已切換到: ${width.value}`);
};

const toggleType = async () => {
  const currentIndex = availableTypes.indexOf(type.value);
  const nextIndex = (currentIndex + 1) % availableTypes.length;
  type.value = availableTypes[nextIndex];

  await nextTick();
  showOperationMessage(`樣式已切換到: ${type.value}`);
};

const toggleAlign = async () => {
  const currentIndex = availableAligns.indexOf(align.value);
  const nextIndex = (currentIndex + 1) % availableAligns.length;
  align.value = availableAligns[nextIndex];

  await nextTick();
  showOperationMessage(`對齊已切換到: ${align.value}`);
};

const toggleText = () => {
  showText.value = !showText.value;
  showOperationMessage(`文字已${showText.value ? '顯示' : '隱藏'}`);
};

const updateText = () => {
  const texts = ['分隔線', '我是分割線', 'Divider', '內容分隔', '區塊分隔'];
  const currentIndex = texts.indexOf(dividerText.value);
  dividerText.value = texts[(currentIndex + 1) % texts.length];
  showOperationMessage(`文字已切換為: ${dividerText.value}`);
};

onMounted(() => {
  console.log('Divider component mounted');
  console.log('初始設定:', { width: width.value, type: type.value });
});
</script>

<template>
  <div class="test-divider-container">
    <!-- 操作消息提示 -->
    <div v-if="operationMessage" class="operation-message">
      {{ operationMessage }}
    </div>

    <!-- Divider 組件 -->
    <Divider
      v-if="showText"
      ref="dividerRef"
      :width="width"
      :type="type"
      direction="horizontal"
      :align="align"
      :className="className"
    >
      {{ dividerText }}
    </Divider>
    <Divider
      v-else
      ref="dividerRef"
      :width="width"
      :type="type"
      direction="horizontal"
      :align="align"
      :className="className"
    />

    <div class="divider-controls">
      <p>當前分隔線設定:</p>
      <ul>
        <li>
          寬度: <strong>{{ width }}</strong>
        </li>
        <li>
          樣式: <strong>{{ type }}</strong>
        </li>
        <li>
          對齊: <strong>{{ align }}</strong>
        </li>
        <li>
          顯示文字: <strong>{{ showText ? '是' : '否' }}</strong>
        </li>
        <li v-if="showText">
          文字內容: <strong>{{ dividerText }}</strong>
        </li>
      </ul>

      <div class="control-buttons">
        <button @click="toggleWidth" class="control-button">
          切換寬度 ({{ width }})
        </button>
        <button @click="toggleType" class="control-button">
          切換樣式 ({{ type }})
        </button>
        <button @click="toggleAlign" class="control-button">
          切換對齊 ({{ align }})
        </button>
        <button @click="toggleText" class="control-button">
          {{ showText ? '隱藏文字' : '顯示文字' }}
        </button>
        <button
          @click="updateText"
          class="control-button"
          :disabled="!showText"
        >
          切換文字內容
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-divider-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  position: relative;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-divider-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
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

.example-content {
  padding: 15px 0;
}

.example-content p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.divider-controls {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.divider-controls p {
  margin-bottom: 10px;
  font-weight: 500;
}

.divider-controls ul {
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
</style>

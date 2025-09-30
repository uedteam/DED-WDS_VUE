<script setup>
import Image from '@/ui/element/Image/Image.vue';
import { ref, onMounted, onUnmounted } from 'vue';

// Image 組件的各種屬性
const src = ref('https://picsum.photos/400/300?random=1');
const alt = ref('測試圖片');
const ratio = ref('16x9');
const objectFit = ref('cover');
const operationMessage = ref('');

// Sticky 狀態管理
const isSticky = ref(false);
const imageContainerRef = ref(null);

// 滾動監聽函式
const handleScroll = () => {
  if (!imageContainerRef.value) return;

  const container = imageContainerRef.value;
  const containerRect = container.getBoundingClientRect();

  // 當圖片上緣碰到視窗上方時開始sticky
  if (containerRect.top <= 0) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // 初始化時檢查狀態
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// 可用比例選項
const ratioOptions = [
  { label: '1:1 (正方形)', value: '1x1' },
  { label: '4:3 (標準)', value: '4x3' },
  { label: '5:4 (近似正方形)', value: '5x4' },
  { label: '16:9 (寬屏)', value: '16x9' },
];

// 可用填滿方式選項
const objectFitOptions = [
  { label: 'Cover (裁切填滿)', value: 'cover' },
  { label: 'Contain (完整顯示)', value: 'contain' },
  { label: 'Fill (拉伸填滿)', value: 'fill' },
  { label: 'None (原始大小)', value: 'none' },
];

// 預設圖片來源選項
const imageOptions = [
  { label: '隨機圖片 1', value: 'https://picsum.photos/400/300?random=1' },
  { label: '隨機圖片 2', value: 'https://picsum.photos/400/300?random=2' },
  { label: '隨機圖片 3', value: 'https://picsum.photos/400/300?random=3' },
  { label: '隨機圖片 4', value: 'https://picsum.photos/400/300?random=4' },
  { label: '隨機圖片 5', value: 'https://picsum.photos/400/300?random=5' },
];

// 事件處理函數
const handleImageLoad = () => {
  operationMessage.value = '✅ 圖片載入成功';
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};

const handleImageError = () => {
  operationMessage.value = '❌ 圖片載入失敗';
  setTimeout(() => {
    operationMessage.value = '';
  }, 3000);
};

// 控制函數
const changeImage = (imageUrl) => {
  src.value = imageUrl;
  operationMessage.value = '🖼️ 已切換圖片來源';
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};

const toggleRatio = () => {
  const currentIndex = ratioOptions.findIndex(
    (option) => option.value === ratio.value,
  );
  const nextIndex = (currentIndex + 1) % ratioOptions.length;
  ratio.value = ratioOptions[nextIndex].value;
  operationMessage.value = `📐 已切換比例至 ${ratioOptions[nextIndex].label}`;
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};

const toggleObjectFit = () => {
  const currentIndex = objectFitOptions.findIndex(
    (option) => option.value === objectFit.value,
  );
  const nextIndex = (currentIndex + 1) % objectFitOptions.length;
  objectFit.value = objectFitOptions[nextIndex].value;
  operationMessage.value = `🎯 已切換填滿方式至 ${objectFitOptions[nextIndex].label}`;
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};

const generateRandomImage = () => {
  const randomId = Math.floor(Math.random() * 1000) + 1;
  src.value = `https://picsum.photos/400/300?random=${randomId}`;
  operationMessage.value = '🎲 已生成隨機圖片';
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};

const resetSettings = () => {
  src.value = 'https://picsum.photos/400/300?random=1';
  alt.value = '測試圖片';
  ratio.value = '16x9';
  objectFit.value = 'cover';
  operationMessage.value = '⚙️ 設定已重置';
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};

const copyImageUrl = async () => {
  try {
    await navigator.clipboard.writeText(src.value);
    operationMessage.value = '📋 圖片網址已複製到剪貼簿';
  } catch (err) {
    operationMessage.value = '❌ 複製失敗，請手動複製';
  }
  setTimeout(() => {
    operationMessage.value = '';
  }, 2000);
};
</script>

<template>
  <div class="test-image-container" ref="imageContainerRef">
    <!-- 操作訊息 -->
    <!-- <div v-if="operationMessage" class="operation-message">
      {{ operationMessage }}
    </div> -->

    <!-- Image 組件展示 -->
    <div class="image-wrapper" :class="{ sticky: isSticky }">
      <Image
        :src="src"
        :alt="alt"
        :ratio="ratio"
        :objectFit="objectFit"
        @load="handleImageLoad"
        @error="handleImageError"
      />
    </div>

    <div class="image-controls">
      <p>當前 Image 設定:</p>
      <ul>
        <li>
          圖片來源: <strong>{{ src }}</strong>
        </li>
        <li>
          替代文字: <strong>{{ alt }}</strong>
        </li>
        <li>
          長寬比例: <strong>{{ ratio }}</strong>
        </li>
        <li>
          填滿方式: <strong>{{ objectFit }}</strong>
        </li>
      </ul>

      <!-- 圖片來源設定 -->
      <div class="control-group">
        <label class="control-label">自定義圖片網址:</label>
        <div class="url-input-group">
          <input
            v-model="src"
            type="url"
            class="control-input"
            placeholder="輸入圖片網址"
          />
          <button @click="copyImageUrl" class="control-button copy-btn">
            複製網址
          </button>
        </div>
      </div>

      <!-- 替代文字設定 -->
      <div class="control-group">
        <label class="control-label">替代文字 (Alt):</label>
        <input
          v-model="alt"
          type="text"
          class="control-input"
          placeholder="輸入替代文字"
        />
      </div>

      <!-- 預設圖片選擇 -->
      <div class="control-group">
        <label class="control-label">預設圖片來源:</label>
        <div class="image-options">
          <button
            v-for="option in imageOptions"
            :key="option.value"
            @click="changeImage(option.value)"
            :class="[
              'control-button',
              'image-btn',
              { active: src === option.value },
            ]"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <!-- 比例選擇 -->
      <div class="control-group">
        <label class="control-label">長寬比例:</label>
        <div class="ratio-buttons">
          <button
            v-for="option in ratioOptions"
            :key="option.value"
            @click="ratio = option.value"
            :class="['control-button', { active: ratio === option.value }]"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <!-- 填滿方式選擇 -->
      <div class="control-group">
        <label class="control-label">填滿方式:</label>
        <div class="fit-buttons">
          <button
            v-for="option in objectFitOptions"
            :key="option.value"
            @click="objectFit = option.value"
            :class="['control-button', { active: objectFit === option.value }]"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <!-- 操作按鈕 -->
      <div class="control-buttons">
        <button @click="toggleRatio" class="control-button">切換比例</button>
        <button @click="toggleObjectFit" class="control-button">
          切換填滿
        </button>
        <button @click="generateRandomImage" class="control-button random-btn">
          隨機圖片
        </button>
        <button @click="resetSettings" class="control-button reset-btn">
          重置設定
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-image-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  margin: 20px auto;
}

.operation-message {
  background: #e3f2fd;
  color: #1565c0;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
  border-left: 4px solid #2196f3;
}

.image-wrapper {
  margin-bottom: 30px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;
}

.image-wrapper.sticky {
  position: sticky;
  top: 20px;
  z-index: 100;
  background: white;
  /* border-radius: 12px; */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  /* padding: 12px; */
  /* border: 2px solid #e0e7ff; */
  transform: scale(0.95);
}

.image-wrapper.sticky:hover {
  transform: scale(1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.image-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.image-controls p {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
}

.image-controls ul {
  margin-bottom: 20px;
  padding-left: 20px;
  background: #f8f9fa;
  padding: 15px 20px;
  border-radius: 6px;
}

.image-controls li {
  margin-bottom: 8px;
  font-size: 14px;
  word-break: break-all;
}

.control-group {
  margin-bottom: 20px;
}

.control-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.control-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.control-input:focus {
  outline: none;
  border-color: #2196f3;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
}

.url-input-group {
  display: flex;
  gap: 8px;
  align-items: stretch;
}

.url-input-group .control-input {
  flex: 1;
}

.image-options,
.ratio-buttons,
.fit-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.control-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.control-button {
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.control-button:hover {
  background-color: #e5e5e5;
}

.control-button.active {
  background-color: #2196f3;
  color: white;
  border-color: #2196f3;
}

.image-btn {
  background-color: #e8f5e8;
  border-color: #4caf50;
  color: #2e7d32;
}

.image-btn:hover {
  background-color: #c8e6c9;
}

.copy-btn {
  background-color: #fff3e0;
  border-color: #ff9800;
  color: #e65100;
  white-space: nowrap;
}

.copy-btn:hover {
  background-color: #ffe0b2;
}

.random-btn {
  background-color: #f3e5f5;
  border-color: #9c27b0;
  color: #6a1b9a;
}

.random-btn:hover {
  background-color: #e1bee7;
}

.reset-btn {
  background-color: #ffebee;
  border-color: #f44336;
  color: #c62828;
}

.reset-btn:hover {
  background-color: #ffcdd2;
}
</style>

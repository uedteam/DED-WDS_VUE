<script setup>
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';
import { computed } from 'vue';
const isCodeCollapsed = ref(true);
const codeExample = computed(() => {
  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';
  return (
    scriptStart +
    `\n` +
    `import Image from '@/ui/element/Image/Image.vue';\n` +
    `import { ref } from 'vue';\n\n` +
    `const src = ref('${src.value}');\n` +
    `const alt = ref('${alt.value}');\n` +
    `const ratio = ref('${ratio.value}');\n` +
    `const objectFit = ref('${objectFit.value}');\n` +
    scriptEnd +
    `\n\n` +
    `<template>\n` +
    `  <Image\n` +
    `    :src="src"\n` +
    `    :alt="alt"\n` +
    `    :ratio="ratio"\n` +
    `    :objectFit="objectFit"\n` +
    `  />\n` +
    `</template>`
  );
});
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
      <p class="settings-title">當前圖片設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">圖片來源:</span>
          <strong class="setting-value">{{ src }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">替代文字:</span>
          <strong class="setting-value">{{ alt }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">長寬比例:</span>
          <strong class="setting-value">{{ ratio }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">填滿方式:</span>
          <strong class="setting-value">{{ objectFit }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 圖片來源控制組 -->
        <div class="control-group">
          <h4 class="group-title">圖片來源</h4>
          <div class="control-buttons">
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

        <!-- 外觀樣式控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀樣式</h4>
          <div class="control-buttons">
            <button @click="toggleRatio" class="control-button primary">
              切換比例
            </button>
            <button @click="toggleObjectFit" class="control-button primary">
              切換填滿
            </button>
          </div>
        </div>

        <!-- 功能控制組 -->
        <div class="control-group">
          <h4 class="group-title">功能設定</h4>
          <div class="control-buttons">
            <button
              @click="generateRandomImage"
              class="control-button random-btn"
            >
              隨機圖片
            </button>
            <button @click="resetSettings" class="control-button reset-btn">
              重置設定
            </button>
          </div>
        </div>
      </div>
      <!-- 程式碼範例區塊 -->
      <div class="code-example-section">
        <div class="code-section-header">
          <button
            @click="isCodeCollapsed = !isCodeCollapsed"
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
              title="Image 組件程式碼範例"
              :showLanguageLabel="true"
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 程式碼範例區塊樣式，參考 test 目錄其他元件 */
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
/* 統一測試組件外觀，參考 TestInput.vue */
.test-image-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-image-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 10px;
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
.control-button.copy-btn {
  background: linear-gradient(135deg, #fff3e0, #ffe0b2);
  color: #e65100;
  border: 1px solid #ff9800;
}
.control-button.copy-btn:hover {
  background: linear-gradient(135deg, #ffe0b2, #fff3e0);
}
.control-button.image-btn {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  color: #2e7d32;
  border: 1px solid #4caf50;
}
.control-button.image-btn:hover {
  background: linear-gradient(135deg, #c8e6c9, #e8f5e8);
}
.control-button.active {
  background: #2196f3;
  color: white;
  border-color: #2196f3;
}
.control-button.random-btn {
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  color: #6a1b9a;
  border: 1px solid #9c27b0;
}
.control-button.random-btn:hover {
  background: linear-gradient(135deg, #e1bee7, #f3e5f5);
}
.control-button.reset-btn {
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
  color: #c62828;
  border: 1px solid #f44336;
}
.control-button.reset-btn:hover {
  background: linear-gradient(135deg, #ffcdd2, #ffebee);
}
.ratio-buttons,
.fit-buttons,
.image-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
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
</style>

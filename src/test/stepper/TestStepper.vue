<template>
  <div class="test-stepper-container">
    <!-- 主要 Stepper 組件 -->
    <div
      class="stepper-wrapper"
      :class="{ 'vertical-mode': direction === 'vertical' }"
    >
      <div v-if="direction === 'vertical'" class="vertical-mode-notice">
        <i>💡</i>
        <span>垂直模式下，步驟會垂直排列，內容區域在下方顯示</span>
      </div>
      <Stepper
        :dataSource="stepData"
        :currentStep="currentStep"
        @update:currentStep="onStepChange"
        :direction="direction"
        :className="'w-full'"
      />
    </div>

    <!-- 控制面板 -->
    <div class="step-controls">
      <p class="settings-title">當前步驟設定：</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">目前步驟：</span>
          <strong class="setting-value"
            >{{ currentStep + 1 }} / {{ stepData.length }}</strong
          >
        </div>
        <div class="setting-item">
          <span class="setting-label">步驟標題：</span>
          <strong class="setting-value">{{
            stepData[currentStep]?.title
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">步驟說明：</span>
          <strong class="setting-value">{{
            stepData[currentStep]?.desc
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">方向：</span>
          <strong class="setting-value">{{
            direction === 'horizontal' ? '水平' : '垂直'
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">步驟總數：</span>
          <strong class="setting-value">{{ stepData.length }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">是否可跳轉：</span>
          <strong class="setting-value">{{ allowJump ? '是' : '否' }}</strong>
        </div>
      </div>

      <!-- 控制按鈕組 -->
      <div class="control-groups">
        <!-- 步驟導航控制組 -->
        <div class="control-group">
          <h4 class="group-title">步驟導航</h4>
          <div class="control-buttons">
            <button
              @click="goToStep(0)"
              :disabled="currentStep === 0"
              class="control-button primary"
            >
              第一步
            </button>
            <button
              @click="prevStep"
              :disabled="currentStep === 0"
              class="control-button primary"
            >
              上一步
            </button>
            <button
              @click="nextStep"
              :disabled="currentStep === stepData.length - 1"
              class="control-button primary"
            >
              下一步
            </button>
            <button
              @click="goToStep(stepData.length - 1)"
              :disabled="currentStep === stepData.length - 1"
              class="control-button primary"
            >
              最後一步
            </button>
          </div>
        </div>

        <!-- 外觀控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀設定</h4>
          <div class="control-buttons">
            <button @click="toggleDirection" class="control-button secondary">
              切換方向
            </button>
            <button @click="toggleJumpMode" class="control-button secondary">
              {{ allowJump ? '禁用' : '允許' }}跳轉
            </button>
            <button @click="resetProgress" class="control-button secondary">
              重設進度
            </button>
          </div>
        </div>

        <!-- 步驟管理控制組 -->
        <div class="control-group">
          <h4 class="group-title">步驟管理</h4>
          <div class="control-buttons">
            <button @click="addStep" class="control-button accent">
              新增步驟
            </button>
            <button
              @click="removeStep"
              :disabled="stepData.length <= 2"
              class="control-button accent"
            >
              移除步驟
            </button>
            <button @click="shuffleSteps" class="control-button accent">
              打亂順序
            </button>
            <button @click="resetSteps" class="control-button accent">
              重設步驟
            </button>
          </div>
        </div>
      </div>

      <!-- 快速跳轉按鈕 -->
      <div class="quick-jump-section">
        <h4 class="group-title">快速跳轉</h4>
        <div class="quick-jump-buttons">
          <button
            v-for="(step, index) in stepData"
            :key="index"
            @click="goToStep(index)"
            :disabled="!allowJump && index !== currentStep"
            :class="{
              active: index === currentStep,
              completed: index < currentStep,
              disabled: !allowJump && index !== currentStep,
            }"
            class="quick-jump-button"
          >
            {{ index + 1 }}
          </button>
        </div>
      </div>

      <!-- 步驟內容顯示 -->
      <div class="step-content-section">
        <h4 class="group-title">目前步驟內容</h4>
        <div class="step-content-display">
          <div class="content-header">
            <h5>{{ stepData[currentStep]?.title }}</h5>
            <p class="content-desc">{{ stepData[currentStep]?.desc }}</p>
          </div>
          <div class="content-body">
            <p>{{ stepData[currentStep]?.content }}</p>
          </div>
          <div class="progress-indicator">
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{
                  width: `${((currentStep + 1) / stepData.length) * 100}%`,
                }"
              ></div>
            </div>
            <span class="progress-text"
              >{{ Math.round(((currentStep + 1) / stepData.length) * 100) }}%
              完成</span
            >
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
            title="Stepper 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Stepper from '../../../libs/src/ui/element/Stepper/Stepper.vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';

// 反應式數據
const currentStep = ref(0);
const direction = ref('horizontal');
const allowJump = ref(true);
const isCodeCollapsed = ref(true);

// 預設步驟資料
const defaultSteps = [
  {
    title: '開始設定',
    desc: '配置基本資訊',
    content: '在這個步驟中，您需要設定基本的配置資訊，包括用戶偏好和初始設定。',
  },
  {
    title: '選擇選項',
    desc: '選擇您需要的功能',
    content: '請從可用的選項中選擇您需要的功能和服務，這將影響後續的配置流程。',
  },
  {
    title: '確認資料',
    desc: '檢查並確認您的設定',
    content: '請仔細檢查您的所有設定和選擇，確保所有資訊都是正確的。',
  },
  {
    title: '完成設定',
    desc: '設定完成',
    content: '恭喜！您已經成功完成了所有的設定步驟，現在可以開始使用系統了。',
  },
];

// 使用響應式數據來管理步驟
const stepData = ref([...defaultSteps]);

// 事件處理函數
const onStepChange = (step: number) => {
  if (
    allowJump.value ||
    step === currentStep.value + 1 ||
    step === currentStep.value - 1
  ) {
    currentStep.value = step;
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const nextStep = () => {
  if (currentStep.value < stepData.value.length - 1) {
    currentStep.value++;
  }
};

const goToStep = (step: number) => {
  if (allowJump.value && step >= 0 && step < stepData.value.length) {
    currentStep.value = step;
  }
};

const toggleDirection = () => {
  direction.value =
    direction.value === 'horizontal' ? 'vertical' : 'horizontal';
};

const toggleJumpMode = () => {
  allowJump.value = !allowJump.value;
};

const resetProgress = () => {
  currentStep.value = 0;
};

const addStep = () => {
  const stepNumber = stepData.value.length + 1;
  stepData.value.push({
    title: `步驟 ${stepNumber}`,
    desc: `這是第 ${stepNumber} 個步驟`,
    content: `這是步驟 ${stepNumber} 的詳細內容說明。`,
  });
};

const removeStep = () => {
  if (stepData.value.length > 2) {
    stepData.value.pop();
    if (currentStep.value >= stepData.value.length) {
      currentStep.value = stepData.value.length - 1;
    }
  }
};

const shuffleSteps = () => {
  const shuffled = [...stepData.value];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  stepData.value = shuffled;
  currentStep.value = 0;
};

const resetSteps = () => {
  stepData.value = [...defaultSteps];
  currentStep.value = 0;
};

const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};

// 產生動態程式碼範例
const codeExample = computed(() => {
  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';

  return (
    scriptStart +
    `
import { ref } from 'vue';
import { Stepper } from '@ded-wds-vue/ui';

const stepData = [
  { title: '開始設定', desc: '配置基本資訊', content: '步驟一內容' },
  { title: '選擇選項', desc: '選擇您需要的功能', content: '步驟二內容' },
  { title: '確認資料', desc: '檢查並確認您的設定', content: '步驟三內容' },
  { title: '完成設定', desc: '設定完成', content: '步驟四內容' }
];

const currentStep = ref(${currentStep.value});

const onStepChange = (step) => {
  currentStep.value = step;
};

const nextStep = () => {
  if (currentStep.value < stepData.length - 1) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};
` +
    scriptEnd +
    `

<template>
  <Stepper
    :dataSource="stepData"
    :currentStep="currentStep"
    @update:currentStep="onStepChange"
    direction="${direction.value}"
    className="w-full"
  />
  
  <div class="control-buttons">
    <button @click="prevStep" :disabled="currentStep === 0">
      上一步
    </button>
    <button @click="nextStep" :disabled="currentStep === stepData.length - 1">
      下一步
    </button>
  </div>
</template>`
  );
});
</script>

<style scoped>
.test-stepper-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-stepper-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
    padding: 15px; /* 減少 padding 以節省空間 */
  }
}

/* Stepper 組件樣式修復 */
.stepper-wrapper {
  width: 100%;
  margin-bottom: 20px;
}

/* 垂直模式提示 */
.vertical-mode-notice {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #e3f2fd;
  border: 1px solid #bbdefb;
  border-radius: 6px;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #1976d2;

  i {
    font-size: 16px;
  }
}

/* 垂直模式特殊處理 */
.stepper-wrapper.vertical-mode {
  /* 確保垂直模式下不會超出容器寬度 */
  overflow-x: auto;

  /* 針對垂直模式的 Stepper 進行樣式調整 */
  :deep(.ded-stepper-vertical) {
    /* 保持原始的 row 方向，但確保內容不溢出 */

    .ded-stepper-header {
      margin-right: 1rem !important; /* 恢復原始邊距 */
      margin-bottom: 0 !important; /* 移除底部邊距 */
      max-width: 300px; /* 限制步驟區域寬度 */
      flex-shrink: 0; /* 防止步驟區域被壓縮 */

      .ded-step {
        margin-bottom: 3rem !important; /* 恢復原始間距 */
        align-items: flex-start !important; /* 確保頂部對齊 */

        .ded-step-circle {
          flex-shrink: 0; /* 防止圓圈被壓縮 */
          margin-right: 1rem !important; /* 保持原始間距 */
          margin-top: 0 !important;
        }

        .ded-step-group {
          flex: 1;
          min-width: 0;

          .ded-step-title {
            word-wrap: break-word;
            overflow-wrap: break-word;
            margin-top: 0 !important; /* 與圓圈頂部對齊 */
            line-height: 1.4;
          }

          .ded-step-description {
            word-wrap: break-word;
            overflow-wrap: break-word;
            margin-top: 0.25em !important;
            line-height: 1.3;
          }
        }

        /* 確保連接線正確顯示 */
        .ded-step-connector {
          background-color: #ddd !important;
          z-index: 1;
          left: 19px !important; /* 微調連接線位置以對齊圓圈中心 */
          width: 2px !important;
          height: 3rem !important;
        }

        /* 已完成步驟的連接線顏色 */
        &.ded-step-completed .ded-step-connector {
          background-color: #28a745 !important;
        }

        /* 當前步驟的連接線顏色 */
        &.ded-step-active .ded-step-connector {
          background-color: #007bff !important;
        }
      }

      /* 最後一個步驟不顯示連接線 */
      .ded-step:last-child .ded-step-connector {
        display: none !important;
      }
    }

    .ded-stepper-content {
      width: 100%;
      box-sizing: border-box;
      margin-top: 20px;
    }
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .stepper-wrapper.vertical-mode :deep(.ded-stepper-vertical) {
    /* 在小屏幕上改為垂直堆疊布局 */
    flex-direction: column !important;

    .ded-stepper-header {
      margin-right: 0 !important;
      margin-bottom: 1rem !important;
      max-width: 100% !important;

      .ded-step {
        flex-direction: row !important; /* 保持水平排列 */
        align-items: flex-start !important;
        margin-bottom: 2rem !important;

        .ded-step-circle {
          margin-right: 0.75rem !important;
          margin-bottom: 0 !important;
          width: 32px;
          height: 32px;
          font-size: 14px;
          flex-shrink: 0;
        }

        .ded-step-group {
          flex: 1;
          min-width: 0;

          .ded-step-title {
            font-size: 14px;
            margin-top: 0 !important;
            line-height: 1.4;
          }

          .ded-step-description {
            font-size: 12px;
            margin-top: 0.25em !important;
            line-height: 1.3;
          }
        }

        .ded-step-connector {
          left: 15px !important; /* 調整小圓圈的連接線位置 */
          width: 2px !important;
          height: 2rem !important; /* 縮短連接線長度 */
          background-color: #ddd !important;
        }

        /* 已完成步驟的連接線顏色 */
        &.ded-step-completed .ded-step-connector {
          background-color: #28a745 !important;
        }

        /* 當前步驟的連接線顏色 */
        &.ded-step-active .ded-step-connector {
          background-color: #007bff !important;
        }
      }

      /* 最後一個步驟不顯示連接線 */
      .ded-step:last-child .ded-step-connector {
        display: none !important;
      }
    }

    .ded-stepper-content {
      margin-top: 1rem !important;
      width: 100% !important;
    }
  }
}

.step-controls {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #eaeaea;
}

.settings-title {
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 16px;
  color: #2c3e50;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  font-size: 14px;
  color: #495057;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}

.setting-value {
  font-size: 14px;
  color: #007bff;
  font-weight: 600;
  text-align: right;
  word-break: break-word;
}

.control-groups {
  display: grid;
  gap: 20px;
  margin-top: 15px;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .control-groups {
    grid-template-columns: repeat(2, 1fr);
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
  gap: 8px;
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

.control-button:disabled {
  background-color: #e0e0e0;
  color: #aaa;
  cursor: not-allowed;
  transform: none;
}

.control-button.primary {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
}

.control-button.primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #0056b3, #004085);
  transform: translateY(-1px);
}

.control-button.secondary {
  background: linear-gradient(135deg, #6c757d, #495057);
  color: white;
}

.control-button.secondary:hover:not(:disabled) {
  background: linear-gradient(135deg, #495057, #343a40);
  transform: translateY(-1px);
}

.control-button.accent {
  background: linear-gradient(135deg, #28a745, #1e7e34);
  color: white;
}

.control-button.accent:hover:not(:disabled) {
  background: linear-gradient(135deg, #1e7e34, #155724);
  transform: translateY(-1px);
}

.quick-jump-section {
  margin-top: 25px;
  padding: 20px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
}

.quick-jump-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.quick-jump-button {
  width: 40px;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  background: white;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quick-jump-button.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
  transform: scale(1.1);
}

.quick-jump-button.completed {
  background: #28a745;
  color: white;
  border-color: #28a745;
}

.quick-jump-button.disabled {
  background: #f5f5f5;
  color: #ccc;
  cursor: not-allowed;
  border-color: #eee;
}

.quick-jump-button:hover:not(.disabled):not(.active) {
  background: #e9ecef;
  border-color: #adb5bd;
  transform: scale(1.05);
}

.step-content-section {
  margin-top: 25px;
  padding: 20px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
}

.step-content-display {
  margin-top: 15px;
}

.content-header h5 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

.content-desc {
  margin: 0 0 15px 0;
  font-size: 14px;
  color: #6c757d;
  font-style: italic;
}

.content-body {
  padding: 15px;
  background: white;
  border-radius: 6px;
  margin-bottom: 15px;
}

.content-body p {
  margin: 0;
  line-height: 1.6;
  color: #495057;
}

.progress-indicator {
  display: flex;
  align-items: center;
  gap: 15px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #007bff, #28a745);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 12px;
  font-weight: 600;
  color: #495057;
  min-width: 60px;
  text-align: right;
}

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
</style>

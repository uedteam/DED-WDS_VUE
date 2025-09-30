<template>
  <div class="test-stepper-container">
    <Stepper
      :dataSource="steps"
      :currentStep="currentStep"
      @update:currentStep="onStepChange"
      direction="horizontal"
    />
    <div class="stepper-info">
      <ul>
        <li>
          目前步驟：<strong>{{ currentStep + 1 }}</strong>
        </li>
        <li>
          標題：<strong>{{ steps[currentStep].title }}</strong>
        </li>
        <li>
          說明：<strong>{{ steps[currentStep].desc }}</strong>
        </li>
      </ul>
    </div>
    <div class="control-buttons">
      <button
        @click="prevStep"
        :disabled="currentStep === 0"
        class="control-button"
      >
        上一步
      </button>
      <button
        @click="nextStep"
        :disabled="currentStep === steps.length - 1"
        class="control-button"
      >
        下一步
      </button>
      <button @click="reset" class="control-button">重設</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Stepper from '../../../libs/src/ui/element/Stepper/Stepper.vue';

const steps = [
  { title: '步驟一', desc: '說明一', content: '這是步驟一內容' },
  { title: '步驟二', desc: '說明二', content: '這是步驟二內容' },
  { title: '步驟三', desc: '說明三', content: '這是步驟三內容' },
];
const currentStep = ref(0);

function onStepChange(idx: number) {
  currentStep.value = idx;
}
function prevStep() {
  if (currentStep.value > 0) currentStep.value--;
}
function nextStep() {
  if (currentStep.value < steps.length - 1) currentStep.value++;
}
function reset() {
  currentStep.value = 0;
}
</script>

<style scoped>
.test-stepper-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-sizing: border-box;
}

.test-stepper-container :deep(.ded-stepper) {
  width: 100%;
  box-sizing: border-box;
}

.test-stepper-container h3 {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}

.stepper-info {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}
.stepper-info ul {
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
.control-button:disabled {
  background-color: #e0e0e0;
  color: #aaa;
  cursor: not-allowed;
}
.control-button:hover:not(:disabled) {
  background-color: #e5e5e5;
}
</style>

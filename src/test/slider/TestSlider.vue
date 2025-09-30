<template>
  <div class="test-slider-container">
    <div class="slider-wrapper">
      <Slider
        v-model="value"
        :min="min"
        :max="max"
        :step="step"
        :isShowRange="true"
        :isShowCurrValue="true"
        :isDisabled="isDisabled"
        :label="label"
        style="width: calc(100% - 32px); box-sizing: border-box; margin: 0 16px"
      />
    </div>
    <div class="slider-info">
      <ul>
        <li>
          目前數值：<strong>{{ value }}</strong>
        </li>
        <li>
          最小值：<strong>{{ min }}</strong>
        </li>
        <li>
          最大值：<strong>{{ max }}</strong>
        </li>
        <li>
          步進：<strong>{{ step }}</strong>
        </li>
        <li>
          標籤：<strong>{{ label || '(無)' }}</strong>
        </li>
        <li>
          狀態：<strong>{{ isDisabled ? '禁用' : '啟用' }}</strong>
        </li>
      </ul>
    </div>
    <div class="control-buttons">
      <button @click="decrease" :disabled="value <= min" class="control-button">
        -
      </button>
      <button @click="increase" :disabled="value >= max" class="control-button">
        +
      </button>
      <button @click="reset" class="control-button">重設</button>
      <button @click="toggleDisabled" class="control-button">
        {{ isDisabled ? '啟用' : '禁用' }}
      </button>
      <button @click="toggleLabel" class="control-button">
        {{ label ? '移除標籤' : '顯示標籤' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Slider from '../../../libs/src/ui/element/Slider/Slider.vue';

const min = ref(0);
const max = ref(100);
const step = ref(5);
const value = ref(50);
const isDisabled = ref(false);
const label = ref('%');

function increase() {
  if (value.value + step.value <= max.value) value.value += step.value;
}
function decrease() {
  if (value.value - step.value >= min.value) value.value -= step.value;
}
function reset() {
  value.value = 50;
}
function toggleDisabled() {
  isDisabled.value = !isDisabled.value;
}
function toggleLabel() {
  label.value = label.value ? '' : '%';
}
</script>

<style scoped>
.test-slider-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-sizing: border-box;
}

.test-slider-container h3 {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}

.slider-info {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}
.slider-info ul {
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

.slider-wrapper { width: 100%; max-width: 100%; box-sizing: border-box; /*
padding: 0 12px; */ }

<template>
  <div class="test-tabs-container">
    <Tabs
      :dataSource="dataSource"
      :activeIndex="activeIndex"
      @update:activeIndex="activeIndex = $event"
      :themeColor="themeColor"
      :type="type"
      :prefix="prefix"
      :isDisabled="isDisabled"
      :className="'w-full'"
    />
    <div class="tabs-controls">
      <p>
        當前頁籤索引: <strong>{{ activeIndex }}</strong>
      </p>
      <ul>
        <li>
          主題色: <strong>{{ themeColor }}</strong>
        </li>
        <li>
          樣式: <strong>{{ type }}</strong>
        </li>
        <li>
          Prefix: <strong>{{ prefix || '無' }}</strong>
        </li>
        <li>
          禁用: <strong>{{ isDisabled ? '是' : '否' }}</strong>
        </li>
      </ul>
      <div class="control-buttons">
        <!-- <button @click="activeIndex = 0" class="control-button">Tab 1</button>
        <button @click="activeIndex = 1" class="control-button">Tab 2</button>
        <button @click="activeIndex = 2" class="control-button">Tab 3</button> -->
        <button @click="toggleThemeColor" class="control-button">
          切換主題色
        </button>
        <button @click="toggleType" class="control-button">切換樣式</button>
        <button @click="togglePrefix" class="control-button">
          切換 Prefix
        </button>
        <button @click="toggleDisabled" class="control-button">
          {{ isDisabled ? '啟用' : '禁用' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tabs from '../../../libs/src/ui/element/Tabs/Tabs.vue';

const dataSource = [
  { title: 'Tab 1', content: '這是 Tab 1 的內容' },
  { title: 'Tab 2', content: '這是 Tab 2 的內容' },
  { title: 'Tab 3', content: '這是 Tab 3 的內容' },
];
const activeIndex = ref(0);
const themeColors = [
  'primary',
  'secondary',
  'neutral',
  'info',
  'success',
  'warning',
  'error',
];
const types = ['basic', 'outline', 'button'];
const prefixes = ['', 'SvgArrowDown'];

const themeColor = ref('primary');
const type = ref('basic');
const prefix = ref('');
const isDisabled = ref(false);

function toggleThemeColor() {
  const idx = themeColors.indexOf(themeColor.value);
  themeColor.value = themeColors[(idx + 1) % themeColors.length];
}
function toggleType() {
  const idx = types.indexOf(type.value);
  type.value = types[(idx + 1) % types.length];
}
function togglePrefix() {
  const idx = prefixes.indexOf(prefix.value);
  prefix.value = prefixes[(idx + 1) % prefixes.length];
}
function toggleDisabled() {
  isDisabled.value = !isDisabled.value;
}
</script>

<style scoped>
.test-tabs-container {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 24px auto;
}
.test-tabs-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.tabs-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}
.tabs-controls p {
  margin-bottom: 10px;
  font-weight: 500;
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

<template>
  <div class="test-accordion-container">
    <div class="accordion-demo-row">
      <Accordion
        :dataSource="items"
        :borderStyle="borderStyle"
        :isOpenAll="isOpenAll"
        :isSmallSize="isSmallSize"
      />
    </div>
    <div class="accordion-info">
      <ul>
        <li>
          外框樣式：<strong>{{ borderStyle }}</strong>
        </li>
        <li>
          全部展開：<strong>{{ isOpenAll ? '是' : '否' }}</strong>
        </li>
        <li>
          小尺寸：<strong>{{ isSmallSize ? '是' : '否' }}</strong>
        </li>
      </ul>
    </div>
    <div class="control-buttons">
      <button @click="toggleBorderStyle" class="control-button">
        切換外框樣式
      </button>
      <button @click="toggleOpenAll" class="control-button">
        {{ isOpenAll ? '全部收合' : '全部展開' }}
      </button>
      <button @click="toggleSmallSize" class="control-button">
        {{ isSmallSize ? '標準尺寸' : '小尺寸' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Accordion from '../../../libs/src/ui/element/Accordion/Accordion.vue';

const items = [
  { id: 1, label: '第一項', detail: ['這是第一項內容'] },
  { id: 2, label: '第二項', detail: ['這是第二項內容'] },
  { id: 3, label: '第三項', detail: ['這是第三項內容'] },
];
const borderStyle = ref('highlight');
const isOpenAll = ref(false);
const isSmallSize = ref(false);

function toggleBorderStyle() {
  borderStyle.value = borderStyle.value === 'highlight' ? 'solid' : 'highlight';
}
function toggleOpenAll() {
  isOpenAll.value = !isOpenAll.value;
}
function toggleSmallSize() {
  isSmallSize.value = !isSmallSize.value;
}
</script>

<style scoped>
.test-accordion-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-sizing: border-box;
}

.test-accordion-container h3 {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}

.accordion-demo-row {
  margin-bottom: 16px;
}

.accordion-info {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}
.accordion-info ul {
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

<template>
  <div class="test-breadcrumb-container">
    <div class="breadcrumb-demo-row">
      <Breadcrumb :dataSource="items.slice()" />
    </div>
    <div class="breadcrumb-info">
      <ul>
        <li>
          階層數：<strong>{{ items.length }}</strong>
        </li>
        <li>
          目前頁：<strong>{{ items[items.length - 1].label }}</strong>
        </li>
      </ul>
    </div>
    <div class="control-buttons">
      <button @click="addItem" class="control-button">新增階層</button>
      <button
        @click="removeItem"
        :disabled="items.length <= 2"
        class="control-button"
      >
        移除階層
      </button>
      <button @click="reset" class="control-button">重設</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Breadcrumb from '../../../libs/src/ui/element/Breadcrumb/Breadcrumb.vue';

const defaultItems = [
  { label: '首頁', href: '/' },
  { label: '產品', href: '/products' },
  { label: '分類', href: '/products/category' },
  { label: '細項', href: '/products/category/detail' },
];
const items = ref([...defaultItems]);

function addItem() {
  items.value.push({
    label: `階層${items.value.length + 1}`,
    href: `/level${items.value.length + 1}`,
  });
}
function removeItem() {
  if (items.value.length > 2) items.value.pop();
}
function reset() {
  items.value = [...defaultItems];
}
</script>

<style scoped>
.test-breadcrumb-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-sizing: border-box;
}

.test-breadcrumb-container h3 {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}

.breadcrumb-demo-row {
  margin-bottom: 16px;
}

.breadcrumb-info {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}
.breadcrumb-info ul {
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

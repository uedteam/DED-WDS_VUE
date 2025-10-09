<template>
  <div class="test-table-container">
    <div class="table-wrapper">
      <Table
        :columns="columns"
        :dataSource="dataSource"
        :showCheckbox="showCheckbox"
        :showVerticalBorders="showVerticalBorders"
        :isSprite="isSprite"
        className="w-full"
      />
    </div>
    <div class="table-info">
      <ul>
        <li>
          資料筆數：<strong>{{ dataSource.length }}</strong>
        </li>
        <li>
          顯示勾選框：<strong>{{ showCheckbox ? '是' : '否' }}</strong>
        </li>
        <li>
          直線分隔：<strong>{{ showVerticalBorders ? '是' : '否' }}</strong>
        </li>
        <li>
          斑馬紋：<strong>{{ isSprite ? '是' : '否' }}</strong>
        </li>
      </ul>
    </div>
    <div class="control-buttons">
      <button @click="toggleCheckbox" class="control-button">
        {{ showCheckbox ? '隱藏勾選框' : '顯示勾選框' }}
      </button>
      <button @click="toggleVerticalBorders" class="control-button">
        {{ showVerticalBorders ? '隱藏直線分隔' : '顯示直線分隔' }}
      </button>
      <button @click="toggleSprite" class="control-button">
        {{ isSprite ? '關閉斑馬紋' : '開啟斑馬紋' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Table from '../../../libs/src/ui/element/Table/Table.vue';

const columns = [
  { title: '姓名', key: 'name', width: '120px' },
  { title: '年齡', key: 'age', width: '80px', align: 'center' },
  { title: '職稱', key: 'title', width: '160px' },
  { title: '電子郵件', key: 'email', width: '220px' },
];
const dataSource = ref([
  {
    name: '王小明',
    age: 28,
    title: '前端工程師',
    email: 'ming.wang@example.com',
    head: 1,
  },
  {
    name: '李小華',
    age: 32,
    title: '後端工程師',
    email: 'hua.li@example.com',
    head: 2,
  },
  {
    name: '陳大仁',
    age: 25,
    title: '設計師',
    email: 'dan.chen@example.com',
    head: 3,
  },
  {
    name: '林美麗',
    age: 30,
    title: '產品經理',
    email: 'mei.lin@example.com',
    head: 4,
  },
]);
const showCheckbox = ref(false);
const showVerticalBorders = ref(false);
const isSprite = ref(false);

function toggleCheckbox() {
  showCheckbox.value = !showCheckbox.value;
}
function toggleVerticalBorders() {
  showVerticalBorders.value = !showVerticalBorders.value;
}
function toggleSprite() {
  isSprite.value = !isSprite.value;
}
</script>

<style scoped>
.test-table-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-sizing: border-box;
}

.test-table-container h3 {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.table-info {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}
.table-info ul {
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

<script setup>
import Pagination from '@/ui/element/Pagination/Pagination.vue';
import { ref } from 'vue';

const totalItems = ref(87);
const currentPage = ref(1);
const itemsPerPageOptions = ref([5, 10, 20, 50]);
const defaultItemsPerPage = ref(10);
const isShowPageInfo = ref(true);
const className = ref('');

function handlePageChange(page, perPage) {
  currentPage.value = page;
  // 可加上 log 或其他測試
}
</script>

<template>
  <div class="test-pagination-container">
    <Pagination
      :totalItems="totalItems"
      :currentPage="currentPage"
      :itemsPerPageOptions="itemsPerPageOptions"
      :defaultItemsPerPage="defaultItemsPerPage"
      :isShowPageInfo="isShowPageInfo"
      :className="className"
      @onPageChange="handlePageChange"
    />
    <div class="pagination-controls">
      <button
        @click="currentPage = Math.max(1, currentPage - 1)"
        class="control-button"
      >
        上一頁
      </button>
      <button
        @click="
          currentPage = Math.min(
            Math.ceil(totalItems / defaultItemsPerPage),
            currentPage + 1,
          )
        "
        class="control-button"
      >
        下一頁
      </button>
      <button @click="totalItems += 10" class="control-button">
        增加資料量
      </button>
      <button
        @click="totalItems = Math.max(1, totalItems - 10)"
        class="control-button"
      >
        減少資料量
      </button>
      <button @click="isShowPageInfo = !isShowPageInfo" class="control-button">
        切換顯示資訊
      </button>
    </div>
    <div class="pagination-status">
      <p>當前 Pagination 設定:</p>
      <ul>
        <li>
          總資料數: <strong>{{ totalItems }}</strong>
        </li>
        <li>
          當前頁碼: <strong>{{ currentPage }}</strong>
        </li>
        <li>
          每頁選項: <strong>{{ itemsPerPageOptions.join(', ') }}</strong>
        </li>
        <li>
          預設每頁: <strong>{{ defaultItemsPerPage }}</strong>
        </li>
        <li>
          顯示資訊: <strong>{{ isShowPageInfo ? '顯示' : '隱藏' }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.test-pagination-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
}
.pagination-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 15px;
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
.pagination-status {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #eaeaea;
}
.pagination-status ul {
  margin-bottom: 0;
  padding-left: 20px;
}
</style>

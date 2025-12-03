<script setup>
import Pagination from '@/ui/element/Pagination/Pagination.vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';
import { ref, computed, onMounted, watch, nextTick } from 'vue';

const totalItems = ref(87);
const currentPage = ref(1);
const itemsPerPageOptions = ref([5, 10, 20, 50]);
const defaultItemsPerPage = ref(5);
const isShowPageInfo = ref(true);
const className = ref('');
const paginationRef = ref(null);

// CodeBlock 收合狀態
const isCodeCollapsed = ref(true);

// 事件處理函數
function handlePageChange(page, perPage) {
  currentPage.value = page;
  if (perPage && perPage !== defaultItemsPerPage.value) {
    defaultItemsPerPage.value = perPage;
  }
  const calculatedTotalPages = Math.ceil(
    totalItems.value / (perPage || defaultItemsPerPage.value),
  );
  console.log(
    `頁面已切換到: ${page}, 每頁顯示: ${perPage || defaultItemsPerPage.value}, 計算總頁數: ${calculatedTotalPages}`,
  );
}

// 控制函數
const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    const newPage = Math.max(1, currentPage.value - 1);
    currentPage.value = newPage;
    nextTick(() => {
      handlePageChange(newPage, defaultItemsPerPage.value);
    });
  }
};

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    const newPage = Math.min(totalPages.value, currentPage.value + 1);
    currentPage.value = newPage;
    nextTick(() => {
      handlePageChange(newPage, defaultItemsPerPage.value);
    });
  }
};

const increaseItems = () => {
  totalItems.value += 10;
};

const decreaseItems = () => {
  totalItems.value = Math.max(1, totalItems.value - 10);
  // 確保當前頁面不會超出範圍
  const totalPages = Math.ceil(totalItems.value / defaultItemsPerPage.value);
  let newPage = currentPage.value;
  if (currentPage.value > totalPages) {
    newPage = Math.max(1, totalPages);
    currentPage.value = newPage;
  }
  console.log(
    '減少資料後 - 總資料數:',
    totalItems.value,
    '總頁數:',
    totalPages,
    '當前頁面:',
    newPage,
  );
  handlePageChange(newPage, defaultItemsPerPage.value);
};

const togglePageInfo = () => {
  isShowPageInfo.value = !isShowPageInfo.value;
};

const resetToFirstPage = () => {
  currentPage.value = 1;
  nextTick(() => {
    handlePageChange(1, defaultItemsPerPage.value);
  });
};

const goToLastPage = () => {
  console.log('點擊最後一頁按鈕');
  console.log(
    '當前設定 - 總資料數:',
    totalItems.value,
    '每頁顯示:',
    defaultItemsPerPage.value,
  );
  console.log('計算屬性 totalPages:', totalPages.value);
  console.log(
    '手動計算總頁數:',
    Math.ceil(totalItems.value / defaultItemsPerPage.value),
  );

  const targetPage = totalPages.value;
  console.log('目標頁面:', targetPage);

  currentPage.value = targetPage;
  console.log('設定 currentPage 為:', targetPage);

  // 使用 nextTick 確保 DOM 更新後再觸發事件
  nextTick(() => {
    console.log('nextTick 後的 currentPage:', currentPage.value);
    console.log(
      '觸發 handlePageChange:',
      targetPage,
      defaultItemsPerPage.value,
    );
    // 觸發 handlePageChange 事件，確保與組件同步
    handlePageChange(targetPage, defaultItemsPerPage.value);

    // 如果 Pagination 組件有暴露的方法，也可以直接調用
    if (
      paginationRef.value &&
      typeof paginationRef.value.goToPage === 'function'
    ) {
      paginationRef.value.goToPage(targetPage);
    }
  });
};

const changeItemsPerPage = (newValue) => {
  defaultItemsPerPage.value = newValue;
  // 重新計算當前頁面是否還有效
  const totalPages = Math.ceil(totalItems.value / newValue);
  let newPage = currentPage.value;
  if (currentPage.value > totalPages) {
    newPage = totalPages;
    currentPage.value = newPage;
  }
  console.log(
    '切換每頁顯示數量:',
    newValue,
    '新的總頁數:',
    totalPages,
    '當前頁面:',
    newPage,
  );
  handlePageChange(newPage, newValue);
};

// 收合/展開程式碼
const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};

// 計算總頁數
const totalPages = computed(() => {
  const calculated = Math.ceil(totalItems.value / defaultItemsPerPage.value);
  console.log(
    '重新計算總頁數:',
    calculated,
    '來源:',
    totalItems.value,
    '/',
    defaultItemsPerPage.value,
  );
  return calculated;
});

// 產生動態程式碼範例
const codeExample = computed(() => {
  const showInfoAttr = !isShowPageInfo.value
    ? '\n    :isShowPageInfo="false"'
    : '';
  const classAttr = className.value
    ? `\n    className="${className.value}"`
    : '';

  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';

  return (
    scriptStart +
    `
import { Pagination } from '@ded-wds-vue/ui';
import { ref } from 'vue';

const totalItems = ref(${totalItems.value});
const currentPage = ref(${currentPage.value});
const itemsPerPageOptions = ref([${itemsPerPageOptions.value.join(', ')}]);
const defaultItemsPerPage = ref(${defaultItemsPerPage.value});

function handlePageChange(page, perPage) {
  currentPage.value = page;
  console.log('Page changed:', page, 'Items per page:', perPage);
}
` +
    scriptEnd +
    `

<template>
  <Pagination
    :totalItems="${totalItems.value}"
    :currentPage="${currentPage.value}"
    :itemsPerPageOptions="itemsPerPageOptions"
    :defaultItemsPerPage="${defaultItemsPerPage.value}"${showInfoAttr}${classAttr}
    @onPageChange="handlePageChange"
  />
</template>`
  );
});

onMounted(() => {
  console.log('Pagination component mounted');
  console.log('初始設定:', {
    totalItems: totalItems.value,
    currentPage: currentPage.value,
    defaultItemsPerPage: defaultItemsPerPage.value,
    totalPages: Math.ceil(totalItems.value / defaultItemsPerPage.value),
  });

  // 確保預設每頁顯示為 5 筆
  if (defaultItemsPerPage.value !== 5) {
    console.warn('修正預設每頁顯示數量從', defaultItemsPerPage.value, '到 5');
    defaultItemsPerPage.value = 5;
  }

  // 確保初始狀態同步
  nextTick(() => {
    console.log(
      '同步初始狀態 - 頁面:',
      currentPage.value,
      '每頁:',
      defaultItemsPerPage.value,
    );
    handlePageChange(currentPage.value, defaultItemsPerPage.value);
  });
});

// 監控關鍵參數變化
watch([totalItems, defaultItemsPerPage], ([newTotalItems, newItemsPerPage]) => {
  const newTotalPages = Math.ceil(newTotalItems / newItemsPerPage);
  console.log(
    '參數變化 - 總資料:',
    newTotalItems,
    '每頁:',
    newItemsPerPage,
    '總頁數:',
    newTotalPages,
  );

  // 如果當前頁超出範圍，調整到最後一頁
  if (currentPage.value > newTotalPages) {
    const adjustedPage = Math.max(1, newTotalPages);
    console.log('調整頁碼從', currentPage.value, '到', adjustedPage);
    currentPage.value = adjustedPage;
    handlePageChange(adjustedPage, newItemsPerPage);
  }
});
</script>

<template>
  <div class="test-pagination-container">
    <Pagination
      ref="paginationRef"
      :totalItems="totalItems"
      :currentPage="currentPage"
      :itemsPerPageOptions="itemsPerPageOptions"
      :defaultItemsPerPage="defaultItemsPerPage"
      :isShowPageInfo="isShowPageInfo"
      :className="className"
      @onPageChange="handlePageChange"
    />

    <div class="pagination-controls">
      <p class="settings-title">當前 Pagination 設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">總資料數:</span>
          <strong class="setting-value">{{ totalItems }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">當前頁碼:</span>
          <strong class="setting-value"
            >{{ currentPage }} / {{ totalPages }}</strong
          >
        </div>
        <div class="setting-item">
          <span class="setting-label">每頁顯示:</span>
          <strong class="setting-value">{{ defaultItemsPerPage }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">計算過程:</span>
          <strong class="setting-value"
            >{{ totalItems }} ÷ {{ defaultItemsPerPage }} =
            {{ totalPages }}</strong
          >
        </div>
        <div class="setting-item">
          <span class="setting-label">顯示資訊:</span>
          <strong class="setting-value">{{
            isShowPageInfo ? '顯示' : '隱藏'
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">頁面選項:</span>
          <strong class="setting-value">{{
            itemsPerPageOptions.join(', ')
          }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 頁面導航組 -->
        <div class="control-group">
          <h4 class="group-title">頁面導航</h4>
          <div class="control-buttons">
            <button @click="resetToFirstPage" class="control-button primary">
              第一頁
            </button>
            <button @click="goToLastPage" class="control-button primary">
              最後頁 ({{ Math.ceil(totalItems / defaultItemsPerPage) }})
            </button>
            <button @click="goToPreviousPage" class="control-button primary">
              上一頁
            </button>
            <button @click="goToNextPage" class="control-button primary">
              下一頁
            </button>
          </div>
        </div>

        <!-- 資料控制組 -->
        <div class="control-group">
          <h4 class="group-title">資料設定</h4>
          <div class="control-buttons">
            <button @click="increaseItems" class="control-button secondary">
              增加資料 (+10)
            </button>
            <button @click="decreaseItems" class="control-button secondary">
              減少資料 (-10)
            </button>
          </div>
        </div>

        <!-- 每頁數量控制組 -->
        <div class="control-group">
          <h4 class="group-title">每頁數量</h4>
          <div class="control-buttons">
            <button
              v-for="option in itemsPerPageOptions"
              :key="option"
              @click="changeItemsPerPage(option)"
              class="control-button accent"
              :class="{ active: defaultItemsPerPage === option }"
            >
              {{ option }} 項
            </button>
          </div>
        </div>

        <!-- 顯示設定組 -->
        <div class="control-group">
          <h4 class="group-title">顯示設定</h4>
          <div class="control-buttons">
            <button @click="togglePageInfo" class="control-button accent">
              {{ isShowPageInfo ? '隱藏資訊' : '顯示資訊' }}
            </button>
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
            title="Pagination 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.test-pagination-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-pagination-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.pagination-controls {
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

@media (max-width: 768px) {
  .settings-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}

@media (min-width: 1200px) {
  .settings-grid {
    grid-template-columns: repeat(3, 1fr);
  }
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
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .control-buttons {
    grid-template-columns: 1fr;
  }

  .control-button {
    padding: 12px 16px;
    font-size: 14px;
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

.control-button.secondary {
  background: linear-gradient(135deg, #6c757d, #495057);
  color: white;
}

.control-button.secondary:hover {
  background: linear-gradient(135deg, #495057, #343a40);
  transform: translateY(-1px);
}

.control-button.accent {
  background: linear-gradient(135deg, #28a745, #1e7e34);
  color: white;
}

.control-button.accent:hover {
  background: linear-gradient(135deg, #1e7e34, #155724);
  transform: translateY(-1px);
}

.control-button.accent.active {
  background: linear-gradient(135deg, #ffc107, #e0a800);
  color: #212529;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);
}

.control-button.accent.active:hover {
  background: linear-gradient(135deg, #e0a800, #d39e00);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.4);
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
</style>

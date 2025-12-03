<script setup>
import { ref, computed, onMounted } from 'vue';
import Table from '../../../libs/src/ui/element/Table/Table.vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';

// 定義 Table 元件的各種屬性
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

// 選中的行
const selectedRowKeys = ref([]);

// CodeBlock 收合狀態
const isCodeCollapsed = ref(true);

// 控制函數
function toggleCheckbox() {
  showCheckbox.value = !showCheckbox.value;
}

function toggleVerticalBorders() {
  showVerticalBorders.value = !showVerticalBorders.value;
}

function toggleSprite() {
  isSprite.value = !isSprite.value;
}

// 收合/展開程式碼
const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};

// 新增資料
const addData = () => {
  const newId = dataSource.value.length + 1;
  dataSource.value.push({
    name: `新員工 ${newId}`,
    age: 25 + newId,
    title: '實習生',
    email: `employee${newId}@example.com`,
    head: newId,
  });
};

// 移除最後一筆資料
const removeData = () => {
  if (dataSource.value.length > 1) {
    dataSource.value.pop();
  }
};

// 重置資料
const resetData = () => {
  dataSource.value = [
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
  ];
};

// 處理選擇變化
const handleSelectionChange = (keys) => {
  selectedRowKeys.value = keys;
};

// 刪除已勾選的項目
const deleteSelected = () => {
  if (selectedRowKeys.value.length === 0) {
    alert('請先勾選要刪除的項目');
    return;
  }

  const confirmDelete = confirm(
    `確定要刪除 ${selectedRowKeys.value.length} 筆資料嗎?`,
  );

  if (confirmDelete) {
    // 過濾掉被選中的項目
    dataSource.value = dataSource.value.filter(
      (item) => !selectedRowKeys.value.includes(item.head),
    );
    // 清空選擇
    selectedRowKeys.value = [];
  }
};

// 產生動態程式碼範例
const codeExample = computed(() => {
  const checkboxAttr = showCheckbox.value ? '\n    :showCheckbox="true"' : '';
  const bordersAttr = showVerticalBorders.value
    ? '\n    :showVerticalBorders="true"'
    : '';
  const spriteAttr = isSprite.value ? '\n    :isSprite="true"' : '';

  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';

  return (
    scriptStart +
    `
import { Table } from '@ded-wds-vue/ui';
import { ref } from 'vue';

const columns = [
  { title: '姓名', key: 'name', width: '120px' },
  { title: '年齡', key: 'age', width: '80px', align: 'center' },
  { title: '職稱', key: 'title', width: '160px' },
  { title: '電子郵件', key: 'email', width: '220px' },
];

const dataSource = ref(${JSON.stringify(dataSource.value, null, 2)});
` +
    scriptEnd +
    `

<template>
  <Table
    :columns="columns"
    :dataSource="dataSource"${checkboxAttr}${bordersAttr}${spriteAttr}
    className="w-full"
  />
</template>`
  );
});

onMounted(() => {
  console.log('Table component mounted');
  console.log('初始資料筆數:', dataSource.value.length);
});
</script>

<template>
  <div class="test-table-container">
    <div class="table-wrapper">
      <Table
        :columns="columns"
        :dataSource="dataSource"
        :showCheckbox="showCheckbox"
        :showVerticalBorders="showVerticalBorders"
        :isSprite="isSprite"
        @select="handleSelectionChange"
        className="w-full"
      />
    </div>

    <div class="table-controls">
      <p class="settings-title">當前表格設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">資料筆數:</span>
          <strong class="setting-value">{{ dataSource.length }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">已勾選:</span>
          <strong class="setting-value">{{ selectedRowKeys.length }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">顯示勾選框:</span>
          <strong class="setting-value">{{
            showCheckbox ? '是' : '否'
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">直線分隔:</span>
          <strong class="setting-value">{{
            showVerticalBorders ? '是' : '否'
          }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">斑馬紋:</span>
          <strong class="setting-value">{{ isSprite ? '是' : '否' }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 外觀樣式控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀樣式</h4>
          <div class="control-buttons">
            <button
              @click="toggleVerticalBorders"
              class="control-button primary"
            >
              {{ showVerticalBorders ? '隱藏直線分隔' : '顯示直線分隔' }}
            </button>
            <button @click="toggleSprite" class="control-button primary">
              {{ isSprite ? '關閉斑馬紋' : '開啟斑馬紋' }}
            </button>
          </div>
        </div>

        <!-- 功能設定控制組 -->
        <div class="control-group">
          <h4 class="group-title">功能設定</h4>
          <div class="control-buttons">
            <button @click="toggleCheckbox" class="control-button secondary">
              {{ showCheckbox ? '隱藏勾選框' : '顯示勾選框' }}
            </button>
          </div>
        </div>

        <!-- 資料控制組 -->
        <div class="control-group">
          <h4 class="group-title">資料控制</h4>
          <div class="control-buttons">
            <button @click="addData" class="control-button accent">
              新增資料
            </button>
            <button
              @click="removeData"
              class="control-button accent"
              :disabled="dataSource.length <= 1"
            >
              移除資料
            </button>
            <button @click="resetData" class="control-button accent">
              重置資料
            </button>
            <button
              @click="deleteSelected"
              class="control-button danger"
              :disabled="selectedRowKeys.length === 0"
            >
              刪除勾選 ({{ selectedRowKeys.length }})
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
            title="Table 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.test-table-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-table-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.table-controls {
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

@media (min-width: 768px) {
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

.control-button.danger {
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
}

.control-button.danger:hover {
  background: linear-gradient(135deg, #c82333, #bd2130);
  transform: translateY(-1px);
}

.control-button:disabled {
  background: linear-gradient(135deg, #e0e0e0, #d0d0d0);
  color: #aaa;
  cursor: not-allowed;
  transform: none;
}

.control-button:disabled:hover {
  background: linear-gradient(135deg, #e0e0e0, #d0d0d0);
  transform: none;
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

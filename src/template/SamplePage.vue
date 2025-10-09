<template>
  <div class="sample-page">
    <!-- 頁面標題 -->
    <div class="page-header">
      <h1 class="page-title">DED 設計系統範例頁面</h1>
      <p class="page-subtitle">展示各種 UI 組件的使用範例</p>
    </div>

    <!-- 導覽麵包屑 -->
    <div class="breadcrumb">
      <span>首頁</span>
      <span class="separator">›</span>
      <span>模板</span>
      <span class="separator">›</span>
      <span class="current">範例頁面</span>
    </div>

    <!-- 網格佈局展示區域 -->
    <div class="grid-container">
      <!-- 左側欄位 -->
      <div class="sidebar">
        <div class="card">
          <div class="card-header">
            <h3>導覽選單</h3>
          </div>
          <div class="card-body">
            <div class="menu">
              <div
                v-for="item in menuItems"
                :key="item.id"
                class="menu-item"
                :class="{ active: item.active }"
              >
                {{ item.label }}
              </div>
            </div>

            <div class="divider"></div>

            <!-- 使用者資訊卡片 -->
            <div class="user-info">
              <div class="avatar">
                <img :src="userInfo.avatar" :alt="userInfo.name" />
              </div>
              <div class="user-details">
                <div class="user-name">{{ userInfo.name }}</div>
                <div class="user-role">{{ userInfo.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 主要內容區域 -->
      <div class="main-content">
        <!-- 按鈕組展示 -->
        <div class="card">
          <div class="card-header">
            <h3>按鈕組件展示</h3>
          </div>
          <div class="card-body">
            <div class="button-group">
              <button class="btn btn-primary">主要按鈕</button>
              <button class="btn btn-secondary">次要按鈕</button>
              <button class="btn btn-success">成功按鈕</button>
              <button class="btn btn-warning">警告按鈕</button>
            </div>
          </div>
        </div>

        <!-- 表單組件展示 -->
        <div class="card">
          <div class="card-header">
            <h3>表單組件展示</h3>
          </div>
          <div class="card-body">
            <div class="form-grid">
              <div class="form-field">
                <label>使用者名稱</label>
                <input
                  v-model="formData.username"
                  type="text"
                  placeholder="請輸入使用者名稱"
                />
              </div>

              <div class="form-field">
                <label>電子郵件</label>
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="請輸入電子郵件"
                />
              </div>

              <div class="form-field">
                <label>選擇城市</label>
                <select v-model="formData.city">
                  <option value="">請選擇城市</option>
                  <option
                    v-for="city in cityOptions"
                    :key="city.value"
                    :value="city.value"
                  >
                    {{ city.label }}
                  </option>
                </select>
              </div>

              <div class="form-field">
                <label>生日</label>
                <input v-model="formData.birthday" type="date" />
              </div>

              <div class="form-field full-width">
                <label>自我介紹</label>
                <textarea
                  v-model="formData.description"
                  rows="4"
                  placeholder="請輸入自我介紹"
                ></textarea>
              </div>
            </div>

            <div class="form-actions">
              <label class="checkbox">
                <input v-model="formData.agree" type="checkbox" />
                我同意條款與條件
              </label>
              <label class="checkbox">
                <input v-model="formData.newsletter" type="checkbox" />
                訂閱電子報
              </label>
            </div>
          </div>
        </div>

        <!-- 標籤和進度展示 -->
        <div class="card">
          <div class="card-header">
            <h3>標籤與進度展示</h3>
          </div>
          <div class="card-body">
            <div class="section">
              <label class="section-label">技能標籤</label>
              <div class="tags">
                <span
                  v-for="skill in skills"
                  :key="skill.name"
                  :class="`tag tag-${skill.color}`"
                >
                  {{ skill.name }}
                </span>
              </div>
            </div>

            <div class="section">
              <label class="section-label">專案進度</label>
              <div class="progress-list">
                <div
                  v-for="project in projects"
                  :key="project.name"
                  class="progress-item"
                >
                  <div class="progress-header">
                    <span>{{ project.name }}</span>
                    <span>{{ project.progress }}%</span>
                  </div>
                  <div class="progress-bar">
                    <div
                      class="progress-fill"
                      :class="`progress-${project.color}`"
                      :style="{ width: project.progress + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 數據表格 -->
        <div class="card">
          <div class="card-header">
            <div class="header-flex">
              <h3>數據表格</h3>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="搜尋使用者..."
                class="search-input"
              />
            </div>
          </div>
          <div class="card-body">
            <table class="data-table">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>電子郵件</th>
                  <th>角色</th>
                  <th>狀態</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in filteredTableData" :key="user.id">
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.role }}</td>
                  <td>
                    <span
                      :class="`status status-${user.status === '活躍' ? 'active' : 'inactive'}`"
                    >
                      {{ user.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 步驟器 -->
        <div class="card">
          <div class="card-header">
            <h3>流程步驟</h3>
          </div>
          <div class="card-body">
            <div class="stepper">
              <div
                v-for="(step, index) in steps"
                :key="step.id"
                class="step"
                :class="{
                  active: index === currentStep,
                  completed: index < currentStep,
                }"
              >
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <div class="step-title">{{ step.title }}</div>
                  <div class="step-description">{{ step.description }}</div>
                </div>
              </div>
            </div>

            <div class="stepper-actions">
              <button
                class="btn btn-outline"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                上一步
              </button>
              <button
                class="btn btn-primary"
                :disabled="currentStep === steps.length - 1"
                @click="currentStep++"
              >
                下一步
              </button>
            </div>
          </div>
        </div>

        <!-- 頁面底部 -->
        <div class="card">
          <div class="card-footer">
            <div class="footer-actions">
              <button class="btn btn-primary" @click="saveData">
                儲存設定
              </button>
              <button class="btn btn-outline" @click="resetData">重設</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

// 使用者資訊
const userInfo = reactive({
  name: '王小明',
  role: '開發者',
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
});

// 選單項目
const menuItems = ref([
  { id: 1, label: '儀表板', icon: 'dashboard', active: true },
  { id: 2, label: '使用者管理', icon: 'users' },
  { id: 3, label: '專案管理', icon: 'folder' },
  { id: 4, label: '設定', icon: 'settings' },
  { id: 5, label: '說明', icon: 'help' },
]);

// 表單數據
const formData = reactive({
  username: '',
  email: '',
  city: '',
  birthday: null,
  description: '',
  agree: false,
  newsletter: true,
});

// 城市選項
const cityOptions = ref([
  { value: 'taipei', label: '台北市' },
  { value: 'taichung', label: '台中市' },
  { value: 'kaohsiung', label: '高雄市' },
  { value: 'tainan', label: '台南市' },
]);

// 技能標籤
const skills = ref([
  { name: 'Vue.js', color: 'success' },
  { name: 'TypeScript', color: 'info' },
  { name: 'Node.js', color: 'warning' },
  { name: 'SCSS', color: 'secondary' },
  { name: 'Git', color: 'neutral' },
]);

// 專案進度
const projects = ref([
  { name: 'DED 設計系統', progress: 85, color: 'primary' },
  { name: '後台管理系統', progress: 62, color: 'success' },
  { name: '行動應用程式', progress: 40, color: 'warning' },
]);

// 搜尋查詢
const searchQuery = ref('');

// 表格數據
const tableData = ref([
  {
    id: 1,
    name: '張小華',
    email: 'zhang@example.com',
    role: '管理員',
    status: '活躍',
  },
  {
    id: 2,
    name: '李大明',
    email: 'li@example.com',
    role: '編輯者',
    status: '活躍',
  },
  {
    id: 3,
    name: '陳美玲',
    email: 'chen@example.com',
    role: '檢視者',
    status: '暫停',
  },
  {
    id: 4,
    name: '王志偉',
    email: 'wang@example.com',
    role: '編輯者',
    status: '活躍',
  },
]);

// 過濾後的表格數據
const filteredTableData = computed(() => {
  if (!searchQuery.value) return tableData.value;
  return tableData.value.filter(
    (user) =>
      user.name.includes(searchQuery.value) ||
      user.email.includes(searchQuery.value),
  );
});

// 步驟器
const steps = ref([
  { id: 1, title: '基本資訊', description: '填寫基本個人資料' },
  { id: 2, title: '偏好設定', description: '設定個人偏好' },
  { id: 3, title: '權限設定', description: '配置使用權限' },
  { id: 4, title: '完成', description: '確認並完成設定' },
]);

const currentStep = ref(0);

// 事件處理
const saveData = () => {
  alert('設定已儲存');
};

const resetData = () => {
  Object.assign(formData, {
    username: '',
    email: '',
    city: '',
    birthday: null,
    description: '',
    agree: false,
    newsletter: true,
  });
  currentStep.value = 0;
  alert('已重設為預設值');
};
</script>

<style scoped>
.sample-page {
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 24px;
}

.page-header {
  text-align: center;
  margin-bottom: 32px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.page-subtitle {
  color: #64748b;
  font-size: 1.125rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  color: #64748b;
}

.separator {
  color: #94a3b8;
}

.current {
  color: #2563eb;
  font-weight: 500;
}

.grid-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.sidebar {
  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  background-color: #f8fafc;
}

.card-header h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
}

.card-body {
  padding: 20px;
}

.card-footer {
  padding: 16px 20px;
  border-top: 1px solid #e2e8f0;
  background-color: #f8fafc;
}

.menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  padding: 12px 16px;
  color: #64748b;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
}

.menu-item:hover {
  background-color: #f1f5f9;
  color: #1e293b;
}

.menu-item.active {
  background-color: #2563eb;
  color: white;
}

.divider {
  height: 1px;
  background-color: #e2e8f0;
  margin: 16px 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-weight: 500;
  color: #1e293b;
}

.user-role {
  font-size: 0.875rem;
  color: #2563eb;
  background-color: #dbeafe;
  padding: 2px 8px;
  border-radius: 12px;
  display: inline-block;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #1d4ed8;
}

.btn-secondary {
  background-color: #64748b;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #475569;
}

.btn-success {
  background-color: #059669;
  color: white;
}

.btn-success:hover:not(:disabled) {
  background-color: #047857;
}

.btn-warning {
  background-color: #d97706;
  color: white;
}

.btn-warning:hover:not(:disabled) {
  background-color: #b45309;
}

.btn-outline {
  background-color: transparent;
  color: #64748b;
  border: 1px solid #d1d5db;
}

.btn-outline:hover:not(:disabled) {
  background-color: #f8fafc;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field.full-width {
  grid-column: 1 / -1;
}

.form-field label {
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
}

.form-field input,
.form-field select,
.form-field textarea {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-actions {
  margin-top: 16px;
  display: flex;
  gap: 16px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.section {
  margin-bottom: 24px;
}

.section-label {
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
  color: #374151;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
}

.tag-success {
  background-color: #dcfce7;
  color: #166534;
}

.tag-info {
  background-color: #dbeafe;
  color: #1e40af;
}

.tag-warning {
  background-color: #fef3c7;
  color: #92400e;
}

.tag-secondary {
  background-color: #f1f5f9;
  color: #475569;
}

.tag-neutral {
  background-color: #f3f4f6;
  color: #374151;
}

.progress-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.progress-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.progress-primary {
  background-color: #2563eb;
}

.progress-success {
  background-color: #059669;
}

.progress-warning {
  background-color: #d97706;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-input {
  padding: 6px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  width: 200px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.data-table th {
  background-color: #f9fafb;
  font-weight: 600;
  color: #374151;
}

.status {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-active {
  background-color: #dcfce7;
  color: #166534;
}

.status-inactive {
  background-color: #fef2f2;
  color: #dc2626;
}

.stepper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  transition: all 0.2s;
}

.step.active {
  background-color: #eff6ff;
  border-left: 4px solid #2563eb;
}

.step.completed {
  background-color: #f0fdf4;
  border-left: 4px solid #059669;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e5e7eb;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step.active .step-number {
  background-color: #2563eb;
  color: white;
}

.step.completed .step-number {
  background-color: #059669;
  color: white;
}

.step-content {
  flex: 1;
}

.step-title {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 4px;
}

.step-description {
  color: #64748b;
  font-size: 0.875rem;
}

.stepper-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}

.footer-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .search-input {
    width: 150px;
  }

  .stepper-actions {
    flex-direction: column;
    gap: 12px;
  }
}
</style>

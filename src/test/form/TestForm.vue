<script setup>
import { ref, computed } from 'vue';
import Form from '@/ui/element/Form/Form.vue';
import FormItem from '@/ui/element/Form/FormItem.vue';
import Input from '@/ui/element/Input/Input.vue';
import Button from '@/ui/element/Button/Button.vue';
import CodeBlock from '../../../libs/src/ui/element/CodeBlock/CodeBlock.vue';

// 表單屬性控制
const title = ref('表單組件測試');
const size = ref('medium');
const layout = ref('vertical');
const showValidationSummary = ref(true);

// CodeBlock 收合狀態
const isCodeCollapsed = ref(true);

// 表單資料
const formData = ref({
  username: '',
  email: '',
});

// 驗證器
const emailValidator = (value) => {
  if (!value) return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) || '請輸入有效的電子信箱格式';
};

// 表單 ref
const formRef = ref();

// 控制函數
const toggleSize = () => {
  const sizes = ['small', 'medium', 'large'];
  const currentIndex = sizes.indexOf(size.value);
  size.value = sizes[(currentIndex + 1) % sizes.length];
};

const toggleLayout = () => {
  const layouts = ['vertical', 'horizontal'];
  const currentIndex = layouts.indexOf(layout.value);
  layout.value = layouts[(currentIndex + 1) % layouts.length];
};

const toggleValidationSummary = () => {
  showValidationSummary.value = !showValidationSummary.value;
};

const toggleCodeCollapse = () => {
  isCodeCollapsed.value = !isCodeCollapsed.value;
};

const fillSampleData = () => {
  formData.value = {
    username: 'testuser',
    email: 'test@example.com',
  };
};

const clearFormData = () => {
  formData.value = {
    username: '',
    email: '',
  };
};

// 事件處理
const handleSubmit = (event) => {
  console.log('表單提交:', event);
};

// 產生動態程式碼範例
const codeExample = computed(() => {
  const scriptStart = '<' + 'script setup>';
  const scriptEnd = '</' + 'script>';

  return (
    scriptStart +
    `
import { ref } from 'vue';
import { Form, FormItem, Input, Button } from '@ded-wds-vue/ui';

const formData = ref({
  username: '',
  email: ''
});

const handleSubmit = (event) => {
  console.log('表單提交:', event);
};
` +
    scriptEnd +
    `

<template>
  <Form
    title="${title.value}"
    size="${size.value}"
    layout="${layout.value}"
    v-model="formData"
    @submit="handleSubmit"
  >
    <FormItem name="username" label="使用者名稱" :required="true">
      <template #username="{ fieldChange, fieldBlur, size, isDisabled, hint }">
        <Input
          v-model="formData.username"
          placeholder="請輸入使用者名稱"
          :size="size"
          :isDisabled="isDisabled"
          :hint="hint"
          @input="fieldChange"
          @blur="fieldBlur"
        />
      </template>
    </FormItem>
  </Form>
</template>`
  );
});
</script>

<template>
  <div class="test-form-container">
    <Form
      ref="formRef"
      :title="title"
      :size="size"
      :layout="layout"
      :showValidationSummary="showValidationSummary"
      v-model="formData"
      @submit="handleSubmit"
    >
      <FormItem name="username" label="使用者名稱" :required="true">
        <template
          #username="{ fieldChange, fieldBlur, size, isDisabled, hint }"
        >
          <Input
            v-model="formData.username"
            placeholder="請輸入使用者名稱"
            :size="size"
            :isDisabled="isDisabled"
            :hint="hint"
            @input="fieldChange"
            @blur="fieldBlur"
          />
        </template>
      </FormItem>

      <FormItem
        name="email"
        label="電子信箱"
        :required="true"
        :validator="emailValidator"
      >
        <template #email="{ fieldChange, fieldBlur, size, isDisabled, hint }">
          <Input
            v-model="formData.email"
            type="email"
            placeholder="請輸入電子信箱"
            :size="size"
            :isDisabled="isDisabled"
            :hint="hint"
            @input="fieldChange"
            @blur="fieldBlur"
          />
        </template>
      </FormItem>

      <template #actions="{ formState }">
        <div class="flex gap-4 justify-end">
          <Button
            variant="outlined"
            themeColor="neutral"
            size="medium"
            @click="formRef?.reset()"
          >
            重設
          </Button>
          <Button
            variant="filled"
            themeColor="primary"
            size="medium"
            type="submit"
            :isDisabled="formState.isSubmitting"
          >
            {{ formState.isSubmitting ? '提交中...' : '提交' }}
          </Button>
        </div>
      </template>
    </Form>

    <div class="form-controls">
      <p class="settings-title">當前表單設定:</p>
      <div class="settings-grid">
        <div class="setting-item">
          <span class="setting-label">標題:</span>
          <strong class="setting-value">{{ title }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">尺寸:</span>
          <strong class="setting-value">{{ size }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">佈局:</span>
          <strong class="setting-value">{{ layout }}</strong>
        </div>
        <div class="setting-item">
          <span class="setting-label">驗證摘要:</span>
          <strong class="setting-value">{{
            showValidationSummary ? '顯示' : '隱藏'
          }}</strong>
        </div>
      </div>

      <div class="control-groups">
        <!-- 外觀樣式控制組 -->
        <div class="control-group">
          <h4 class="group-title">外觀樣式</h4>
          <div class="control-buttons">
            <button @click="toggleSize" class="control-button primary">
              切換尺寸
            </button>
            <button @click="toggleLayout" class="control-button primary">
              切換佈局
            </button>
            <button
              @click="toggleValidationSummary"
              class="control-button primary"
            >
              {{ showValidationSummary ? '隱藏摘要' : '顯示摘要' }}
            </button>
          </div>
        </div>

        <!-- 資料控制組 -->
        <div class="control-group">
          <h4 class="group-title">資料控制</h4>
          <div class="control-buttons">
            <button @click="fillSampleData" class="control-button accent">
              填入範例資料
            </button>
            <button @click="clearFormData" class="control-button accent">
              清空資料
            </button>
            <button @click="formRef?.validate()" class="control-button accent">
              手動驗證
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
            title="Form 組件程式碼範例"
            :showLanguageLabel="true"
          />
        </div>
      </transition>
    </div>

    <!-- 表單資料顯示 -->
    <div class="form-data-display">
      <h3 class="data-title">表單資料：</h3>
      <pre class="data-content">{{ JSON.stringify(formData, null, 2) }}</pre>
    </div>
  </div>
</template>

<style scoped>
.test-form-container {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 720px;
  margin: 20px auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .test-form-container {
    min-width: auto;
    width: calc(100% - 40px);
    margin: 20px;
  }
}

.form-controls {
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

.control-group {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
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

.control-button.accent {
  background: linear-gradient(135deg, #28a745, #1e7e34);
  color: white;
}

.control-button.accent:hover {
  background: linear-gradient(135deg, #1e7e34, #155724);
  transform: translateY(-1px);
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

.toggle-code-button.collapsed {
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
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

.button-text {
  font-weight: 500;
  letter-spacing: 0.025em;
}

.code-container {
  overflow: hidden;
}

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

.form-data-display {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.data-title {
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.data-content {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 15px;
  font-size: 12px;
  color: #495057;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>

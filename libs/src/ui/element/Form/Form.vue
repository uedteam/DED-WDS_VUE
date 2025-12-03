<script setup>
import { ref, computed, provide, reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// 阻止 Vue 自動將 $attrs 綁定到最外層元素
defineOptions({ inheritAttrs: false });

// 定義 Props
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  layout: {
    type: String,
    default: 'vertical',
    validator: (value) => ['horizontal', 'vertical', 'inline'].includes(value),
  },
  labelPosition: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'left', 'right'].includes(value),
  },
  labelWidth: {
    type: String,
    default: '120px',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  showValidationSummary: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
});

// 定義 Emits
const emits = defineEmits(['submit', 'reset', 'validate']);

// 使用 defineModel 定義 v-model
const modelValue = defineModel({
  default: () => ({}),
});

// 表單狀態管理
const formId = uuidv4();
const formRef = ref(null);
const formItems = reactive(new Map());
const validationErrors = ref({});

// 計算表單類別
const formClasses = computed(() => ({
  [`ded-form-${props.layout}`]: props.layout,
  [`ded-form-${props.size}`]: props.size,
  [`ded-form-label-${props.labelPosition}`]: props.labelPosition,
  'ded-form-disabled': props.isDisabled,
  [props.className]: !!props.className,
}));

// 計算標籤樣式
const labelStyles = computed(() => {
  if (props.labelPosition === 'left' || props.labelPosition === 'right') {
    return {
      width: props.labelWidth,
      minWidth: props.labelWidth,
    };
  }
  return {};
});

// 表單驗證狀態
const formState = reactive({
  isValid: true,
  isSubmitting: false,
  isDirty: false,
  touched: new Set(),
});

// 註冊表單項目
function registerFormItem(name, validator) {
  formItems.set(name, {
    validator,
    isValid: true,
    errors: [],
  });
}

// 註銷表單項目
function unregisterFormItem(name) {
  formItems.delete(name);
  delete validationErrors.value[name];
  formState.touched.delete(name);
}

// 驗證單個欄位
async function validateField(name) {
  const item = formItems.get(name);
  if (!item || !item.validator) {
    return true;
  }

  try {
    const value = modelValue.value[name];
    const result = await item.validator(value);

    if (result === true || result === undefined) {
      item.isValid = true;
      item.errors = [];
      delete validationErrors.value[name];
      return true;
    } else {
      item.isValid = false;
      item.errors = Array.isArray(result) ? result : [result];
      validationErrors.value[name] = item.errors;
      return false;
    }
  } catch (error) {
    item.isValid = false;
    item.errors = [error.message || '驗證錯誤'];
    validationErrors.value[name] = item.errors;
    return false;
  }
}

// 驗證整個表單
async function validateForm() {
  const promises = Array.from(formItems.keys()).map((name) =>
    validateField(name)
  );
  const results = await Promise.all(promises);

  formState.isValid = results.every((result) => result);
  emits('validate', {
    isValid: formState.isValid,
    errors: validationErrors.value,
    values: modelValue.value,
  });

  return formState.isValid;
}

// 重設表單
function resetForm() {
  // 清空所有值
  for (const key in modelValue.value) {
    delete modelValue.value[key];
  }

  // 清空驗證錯誤
  validationErrors.value = {};
  formState.touched.clear();
  formState.isDirty = false;

  // 重設所有表單項目狀態
  formItems.forEach((item) => {
    item.isValid = true;
    item.errors = [];
  });

  emits('reset', { values: modelValue.value });
}

// 處理表單提交
async function handleSubmit() {
  if (formState.isSubmitting) return;

  formState.isSubmitting = true;

  try {
    const isValid = await validateForm();

    if (isValid) {
      emits('submit', {
        values: modelValue.value,
        isValid: true,
      });
    } else {
      emits('submit', {
        values: modelValue.value,
        isValid: false,
        errors: validationErrors.value,
      });
    }
  } finally {
    formState.isSubmitting = false;
  }
}

// 標記欄位為已觸碰
function markFieldTouched(name) {
  formState.touched.add(name);
  formState.isDirty = true;
}

// 提供給子組件的上下文
provide('formContext', {
  formId,
  formState,
  modelValue,
  validationErrors,
  size: computed(() => props.size),
  labelPosition: computed(() => props.labelPosition),
  labelWidth: computed(() => props.labelWidth),
  isDisabled: computed(() => props.isDisabled),
  labelStyles,
  registerFormItem,
  unregisterFormItem,
  validateField,
  markFieldTouched,
});

// 暴露方法給父組件
defineExpose({
  validate: validateForm,
  reset: resetForm,
  submit: handleSubmit,
  formRef,
  formState,
  validationErrors,
});
</script>

<template>
  <form
    ref="formRef"
    class="ded-form"
    :class="formClasses"
    v-bind="$attrs"
    @submit.prevent="handleSubmit"
  >
    <!-- 表單標題和描述 -->
    <div v-if="title || description" class="ded-form-header">
      <h3 v-if="title" class="ded-form-title" :class="`ded-text-${size}`">
        {{ title }}
      </h3>
      <p v-if="description" class="ded-form-description">
        {{ description }}
      </p>
    </div>

    <!-- 驗證錯誤摘要 -->
    <div
      v-if="showValidationSummary && Object.keys(validationErrors).length > 0"
      class="ded-form-validation-summary"
    >
      <h4 class="ded-form-validation-title">請修正以下錯誤：</h4>
      <ul class="ded-form-validation-list">
        <li
          v-for="(errors, field) in validationErrors"
          :key="field"
          class="ded-form-validation-item"
        >
          <strong>{{ field }}:</strong>
          <span v-for="error in errors" :key="error">{{ error }}</span>
        </li>
      </ul>
    </div>

    <!-- 表單內容 -->
    <div class="ded-form-content">
      <slot :form-state="formState" :errors="validationErrors" />
    </div>

    <!-- 表單操作區域 -->
    <div v-if="$slots.actions" class="ded-form-actions">
      <slot
        name="actions"
        :form-state="formState"
        :errors="validationErrors"
        :validate="validateForm"
        :reset="resetForm"
        :submit="handleSubmit"
      />
    </div>
  </form>
</template>

<style scoped lang="scss"></style>

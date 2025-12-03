<script setup>
import { computed, inject, onMounted, onUnmounted, watch } from 'vue';

// 定義 Props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  validator: {
    type: Function,
    default: undefined,
  },
  size: {
    type: String,
    default: '',
    validator: (value) => ['', 'small', 'medium', 'large'].includes(value),
  },
  labelPosition: {
    type: String,
    default: '',
    validator: (value) => ['', 'top', 'left', 'right'].includes(value),
  },
  labelWidth: {
    type: String,
    default: '',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  showErrorMessage: {
    type: Boolean,
    default: true,
  },
  className: {
    type: String,
    default: '',
  },
});

// 注入表單上下文
const formContext = inject('formContext', null);

// 計算實際使用的屬性（優先使用 prop，其次使用表單上下文）
const actualSize = computed(
  () => props.size || formContext?.size?.value || 'medium'
);

const actualLabelPosition = computed(
  () => props.labelPosition || formContext?.labelPosition?.value || 'top'
);

const actualLabelWidth = computed(
  () => props.labelWidth || formContext?.labelWidth?.value || '120px'
);

const actualIsDisabled = computed(
  () => props.isDisabled || formContext?.isDisabled?.value || false
);

// 計算標籤樣式
const labelStyles = computed(() => {
  if (
    actualLabelPosition.value === 'left' ||
    actualLabelPosition.value === 'right'
  ) {
    return {
      width: actualLabelWidth.value,
      minWidth: actualLabelWidth.value,
    };
  }
  return {};
});

// 計算容器類別
const containerClasses = computed(() => ({
  [`ded-form-item-${actualLabelPosition.value}`]: actualLabelPosition.value,
  [`ded-form-item-${actualSize.value}`]: actualSize.value,
  'ded-form-item-required': props.required,
  'ded-form-item-disabled': actualIsDisabled.value,
  'ded-form-item-error': hasError.value,
  [props.className]: !!props.className,
}));

// 計算是否有錯誤
const hasError = computed(() => {
  if (!formContext) return false;
  const errors = formContext.validationErrors.value[props.name];
  return errors && errors.length > 0;
});

// 取得錯誤訊息
const errorMessages = computed(() => {
  if (!formContext || !hasError.value) return [];
  return formContext.validationErrors.value[props.name] || [];
});

// 建立驗證器
const createValidator = () => {
  if (!props.validator && !props.required) return undefined;

  return async (value) => {
    const errors = [];

    // 必填驗證
    if (props.required) {
      if (
        value === undefined ||
        value === null ||
        value === '' ||
        (Array.isArray(value) && value.length === 0)
      ) {
        errors.push(`${props.label || props.name} 為必填欄位`);
      }
    }

    // 自定義驗證
    if (
      props.validator &&
      value !== undefined &&
      value !== null &&
      value !== ''
    ) {
      try {
        const result = await props.validator(value);
        if (result !== true && result !== undefined) {
          if (Array.isArray(result)) {
            errors.push(...result);
          } else if (typeof result === 'string') {
            errors.push(result);
          }
        }
      } catch (error) {
        errors.push(error.message || '驗證失敗');
      }
    }

    return errors.length > 0 ? errors : true;
  };
};

// 在組件掛載時註冊到表單
onMounted(() => {
  if (formContext) {
    const validator = createValidator();
    formContext.registerFormItem(props.name, validator);
  }
});

// 在組件卸載時註銷
onUnmounted(() => {
  if (formContext) {
    formContext.unregisterFormItem(props.name);
  }
});

// 監聽驗證器相關 props 變化，重新註冊
watch([() => props.validator, () => props.required], () => {
  if (formContext) {
    const validator = createValidator();
    formContext.registerFormItem(props.name, validator);
  }
});

// 處理欄位值變化
function handleFieldChange() {
  if (formContext) {
    formContext.markFieldTouched(props.name);
    // 延遲驗證以提供更好的用戶體驗
    setTimeout(() => {
      formContext.validateField(props.name);
    }, 100);
  }
}

// 處理欄位失去焦點
function handleFieldBlur() {
  if (formContext) {
    formContext.markFieldTouched(props.name);
    formContext.validateField(props.name);
  }
}
</script>

<template>
  <div class="ded-form-item" :class="containerClasses">
    <!-- 標籤區域 -->
    <div v-if="label" class="ded-form-item-label-wrapper" :style="labelStyles">
      <label
        :for="name"
        class="ded-form-item-label"
        :class="`ded-text-${actualSize}`"
      >
        {{ label }}
        <span v-if="required" class="ded-form-item-required-mark">*</span>
      </label>
    </div>

    <!-- 控制項區域 -->
    <div class="ded-form-item-control">
      <div class="ded-form-item-control-wrapper">
        <slot
          :name="name"
          :fieldChange="handleFieldChange"
          :fieldBlur="handleFieldBlur"
          :hasError="hasError"
          :errorMessages="errorMessages"
          :size="actualSize"
          :isDisabled="actualIsDisabled"
          :hint="{
            error: hasError ? errorMessages.join(', ') : '',
            description: '',
          }"
        />
      </div>

      <!-- 錯誤訊息區域 - 已移除，統一由組件自身通過 hint.error 處理 -->
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

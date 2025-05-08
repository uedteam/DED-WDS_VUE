<script setup>
import Icon from '@/ui/element/Icon/Icon.vue';
import { v4 as uuidv4 } from 'uuid';
import { computed, ref } from 'vue';

// 阻止 Vue 自動將 $attrs 綁定到最外層 <div>
defineOptions({ inheritAttrs: false });
// 定義 Props
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  hasClear: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: 'Placeholder',
  },
  prefix: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  maxLimit: {
    type: Number,
    default: 0,
  },
  hint: {
    type: Object,
    default: () => ({ error: '', description: '' }),
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isOpen: {
    type: Boolean,
    default: undefined,
  },
  className: {
    type: String,
    default: '',
  },
});
const emits = defineEmits(['clearDatePicker']);
const modelValue = defineModel();
// 暴露內部的 <input> 節點 (datepicker用)
const inputRef = ref(null);

// 或其他唯一ID生成方式
const baseId = uuidv4();
const uniqueId = `${baseId}-input`;

// 計算屬性
const hintClass = computed(() =>
  props.hint.error ? 'error' : props.hint.description ? 'desc' : '',
);

// 計算輸入框的類型
const inputType = computed(() =>
  showPassword.value && props.type === 'password' ? 'text' : props.type,
);

// 計算輸入框組的 class
const inputGroupClasses = computed(() => ({
  [`ded-text-${props.size}`]: props.size,
  [`ded-input-border-${hintClass.value}`]: hintClass.value,
  'ded-input-disable': props.isDisabled,
}));

// 計算輸入框的 class
const inputClasses = computed(() => ({
  [`ded-text-${props.size}`]: props.size,
  'ded-input-prefix': props.prefix,
  'ded-input-disable': props.isDisabled,
}));

// 計算提示文字的 class
const hintClasses = computed(() => ({
  [`ded-input-hint-${hintClass.value}`]: hintClass.value && !props.isDisabled,
  'ded-input-disable': props.isDisabled,
}));

// 判斷是否顯示清除按鈕
const shouldShowClearButton = computed(
  () => modelValue.value && props.hasClear && !props.isDisabled,
);

// 判斷是否顯示密碼切換按鈕
const shouldShowPasswordToggle = computed(
  () => props.type === 'password' && modelValue.value,
);

// 功能: 清除輸入框
function clearInput() {
  modelValue.value = '';
  // datepicker用
  emits('clearDatePicker');
}

// 功能: 控制密碼顯示/隱藏
const showPassword = ref(false);
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

// 功能: 下拉控制箭頭
function toggleDropdown() {
  if (props.isOpen !== undefined) {
    modelValue.value = ''; // 可選擇性操作
  }
}

// 設置對外暴露的方法
defineExpose({
  input: inputRef,
});
</script>

<template>
  <div
    class="ded-input-container"
    :class="{ [props.className]: !!props.className }"
  >
    <!-- 標籤 -->
    <label
      v-if="label"
      :for="uniqueId"
      :class="props.isDisabled ? 'ded-input-disable' : 'ded-input-label'"
    >
      {{ label }}
    </label>

    <!-- 輸入框組 -->
    <div class="ded-input-group" :class="inputGroupClasses">
      <!-- Prefix Icon -->
      <label
        v-if="prefix"
        :for="uniqueId"
        class="ded-input-icon"
        :class="{
          [`ded-icon-${props.size}`]: props.size,
          'ded-input-icon-disable': props.isDisabled,
          'ded-input-icon-error':
            props.hint.error.length > 0 ||
            typeof props.hint.error === 'function',
        }"
      >
        <Icon :name="props.prefix" />
      </label>

      <!-- Input -->
      <input
        :id="uniqueId"
        ref="inputRef"
        v-model="modelValue"
        :type="inputType"
        :placeholder="props.placeholder"
        :maxlength="props.maxLimit > 0 ? props.maxLimit : undefined"
        class="ded-input"
        :class="inputClasses"
        v-bind="$attrs"
      />

      <!-- 功能圖示 -->
      <div class="ded-input-feat-icon">
        <!-- 清除按鈕 -->
        <div
          v-if="shouldShowClearButton"
          :class="`ded-icon-${props.size}`"
          style="cursor: pointer"
          @click="clearInput()"
        >
          <Icon name="SvgClose" />
        </div>

        <!-- 密碼顯示/隱藏 -->
        <div
          v-if="shouldShowPasswordToggle"
          :class="`ded-icon-${props.size}`"
          style="cursor: pointer"
          @click="togglePasswordVisibility"
        >
          <Icon :name="showPassword ? 'SvgVisibility' : 'SvgVisibilityOff'" />
        </div>

        <!-- 下拉箭頭 -->
        <div
          v-if="props.isOpen !== undefined"
          :class="`ded-icon-${props.size}`"
          style="cursor: pointer"
          @click="toggleDropdown"
        >
          <Icon
            name="SvgArrowDown"
            class="ded-dropdown-arrow"
            :class="props.isOpen ? 'ded-dropdown-open' : 'ded-dropdown-close'"
          />
        </div>
      </div>
    </div>

    <!-- 提示文字 -->
    <small class="ded-input-hint" :class="hintClasses">
      <!-- 若 error 存在，無論是函式還是字串，都優先顯示 -->
      <template v-if="props.hint.error">
        <template v-if="typeof props.hint.error === 'function'">
          <component :is="props.hint.error" />
        </template>
        <template v-else>
          {{ props.hint.error }}
        </template>
      </template>

      <!-- 只有當 error 為空時，才會顯示 description -->
      <template v-else-if="props.hint.description">
        <template v-if="typeof props.hint.description === 'function'">
          <component :is="props.hint.description" />
        </template>
        <template v-else>
          {{ props.hint.description }}
        </template>
      </template>
    </small>
  </div>
</template>

<style scoped lang="scss"></style>

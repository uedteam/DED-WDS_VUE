<script setup>
import { ref, computed } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Props
const props = defineProps({
  themeColor: {
    type: String,
    default: 'primary',
    validator: (value) =>
      [
        'primary',
        'secondary',
        'neutral',
        'info',
        'success',
        'warning',
        'error',
      ].includes(value),
  },
  variant: {
    type: String,
    required: true,
    validator: (value) =>
      ['text', 'filled', 'ghost', 'soft', 'outlined'].includes(value),
  },
  prefix: {
    type: String,
  },
  suffix: {
    type: String,
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  width: {
    type: String,
    default: 'fit',
    validator: (value) => ['fluid', 'fit', 'full'].includes(value),
  },
  borderWidth: {
    type: String,
    validator: (value) =>
      ['none', '1px', '2px', '3px', '4px', '5px'].includes(value),
  },
  radius: {
    type: String,
    validator: (value) =>
      ['none', '2px', '4px', '8px', '12px', '16px', '32px', 'full'].includes(
        value
      ) || /^\d+px$/.test(value), // 添加對任意數字+px的支援
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
});

// 使用 computed 確保在 props 變化時重新計算 class
const buttonClasses = computed(() => ({
  [`ded-button-${props.width}`]: props.width,
  [`ded-text-${props.size}`]: props.size,
  [`ded-button-${props.variant}`]: props.variant,
  [`ded-button-${props.variant}-${props.themeColor}`]:
    props.variant && props.themeColor,
  [`ded-button-${props.variant}-disabled`]: props.variant && props.isDisabled,
  [`ded-button-border-width-${props.borderWidth}`]: props.borderWidth,
  [`ded-button-radius-${props.radius}`]: props.radius,
  [props.className]: !!props.className,
}));

// 支援 ref 轉發
const buttonRef = ref(null);

// 轉發 ref 到實際的按鈕元素
defineExpose({ buttonRef });
</script>

<template>
  <button
    ref="buttonRef"
    class="ded-button"
    :class="buttonClasses"
    :disabled="props.isDisabled"
    type="button"
  >
    <div v-if="prefix" :class="`ded-icon-${props.size}`">
      <Icon :name="props.prefix" />
    </div>

    <div v-if="$slots.default" class="ded-button-content">
      <slot />
    </div>

    <div v-if="suffix" :class="`ded-icon-${props.size}`">
      <Icon :name="props.suffix" />
    </div>
  </button>
</template>

<style lang="scss" scoped></style>

<script setup>
import { computed } from 'vue';
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Props
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    default: '_self', // 預設在當前頁面打開
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  className: {
    type: String,
    default: '',
  },
  prefix: {
    type: String,
    default: '',
  },
});

// 計算樣式
const linkClass = computed(() => ({
  'ded-link': true,
  'ded-link-disabled': props.isDisabled,
  [props.className]: !!props.className,
}));

// 點擊事件處理
function handleClick(event) {
  if (props.isDisabled) {
    event.preventDefault();
  }
}
</script>

<template>
  <a
    class="ded-link"
    :class="`${props.isDisabled ? 'ded-link-disabled' : ''} ${linkClass}`"
    :href="props.isDisabled ? undefined : props.href"
    :target="props.target"
    @click="handleClick"
  >
    <span
      v-if="props.prefix"
      class="ded-link-icon"
      :class="[`ded-icon-${props.size}`]"
    >
      <Icon :name="props.prefix" />
    </span>
    <slot />
  </a>
</template>

<style scoped lang="scss">
// .ded-link {
//   color: #007bff;
//   text-decoration: none;
//   cursor: pointer;
//   transition: color 0.3s;

//   &:hover {
//     color: #0056b3;
//   }
// }

// .ded-link-disabled {
//   color: #6c757d;
//   cursor: not-allowed;
//   text-decoration: none;
// }
</style>

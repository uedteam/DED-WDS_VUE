<script setup>
import Icon from '@/ui/element/Icon/Icon.vue';

// 定義 Props
const props = defineProps({
  themeColor: {
    type: String,
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
    validator: (value) => ['filled', 'ghost'].includes(value),
    default: 'filled',
  },
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: '',
  },
  prefix: {
    type: String,
  },
  closable: {
    type: Boolean,
    default: true,
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

const emits = defineEmits(['onClose']);

// 關閉標籤的處理函數
function closeTag() {
  if (!props.isDisabled) {
    emits('onClose');
  }
}

// 驗證 href 是否有效
function isValidHref(href) {
  try {
    return !!href && new URL(href);
  } catch {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Invalid href: ${href}`);
    }
    return false;
  }
}
</script>

<template>
  <div
    class="ded-tag"
    :class="[
      `ded-tag-${props.variant}`,
      props.themeColor && !props.isDisabled
        ? `ded-tag-${props.variant}-${props.themeColor}`
        : '',
      props.isDisabled ? `ded-tag-${props.variant}-disabled` : '',
      props.className,
    ]"
  >
    <!-- 可點擊的標籤 -->
    <template v-if="props.href && isValidHref(props.href)">
      <a :href="props.href" class="ded-tag-text" rel="noopener noreferrer">
        <template v-if="props.prefix">
          <span class="ded-tag-icon">
            <Icon :name="props.prefix" />
          </span>
        </template>
        {{ props.label }}
      </a>
    </template>

    <!-- 不可點擊的標籤 -->
    <template v-else>
      <div class="ded-tag-text">
        <template v-if="props.prefix">
          <span class="ded-tag-icon">
            <Icon :name="props.prefix" />
          </span>
        </template>
        {{ props.label }}
      </div>
    </template>

    <!-- 可關閉的標籤 -->
    <template v-if="props.closable">
      <Icon name="SvgClose" class="ded-tag-close" @click="closeTag" />
    </template>
  </div>
</template>

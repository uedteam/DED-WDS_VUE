<script setup>
import ListItem from '@/ui/element/List/ListItem.vue';

// 定義 Props
const props = defineProps({
  dataSource: {
    type: Object,
    required: true,
  },
  hasOutline: {
    type: Boolean,
    default: false,
  },
  hasDivider: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['onSelect']);

function handleItemClick(value) {
  emits('onSelect', value); // 冒泡子元件的值
}
</script>

<template>
  <ul
    class="ded-list"
    :class="{
      'ded-outline': props.hasOutline,
      [props.className]: !!props.className,
    }"
  >
    <slot>
      <ListItem
        v-for="(item, index) in props.dataSource"
        :key="index"
        :label="item.label"
        :value="item.value"
        :href="item.href"
        :prefix="item.prefix"
        :has-divider="props.hasDivider"
        :is-disabled="item.isDisabled"
        :open-in-new-tab="true"
        @selected-item="handleItemClick"
      />
    </slot>
  </ul>
</template>

<style scoped lang="scss"></style>

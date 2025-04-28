<script setup>
import { ref, watch } from 'vue';
import TabItem from './TabItem.vue';

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
  dataSource: {
    type: Array,
    required: false,
    validator: (value) =>
      value.every(
        (item) => typeof item.title === 'string' && item.content !== undefined,
      ),
  },
  activeIndex: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: 'basic',
    validator: (value) => ['basic', 'outline', 'button'].includes(value),
  },
  prefix: {
    type: String,
    default: '',
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

// 定義事件
const emit = defineEmits(['update:activeIndex', 'tabChange']);

const activeTabIndex = ref(props.activeIndex || 0);

// 取得 dataset 的值
function handleClick(event) {
  const index = Number.parseInt(event.currentTarget.dataset.index, 10);
  activeTabIndex.value = index;

  // 觸發事件，將索引值傳遞給父組件
  emit('update:activeIndex', index);
  emit('tabChange', index);
}

watch(
  () => props.activeIndex,
  (newIndex) => {
    activeTabIndex.value = newIndex || 0;
  },
);
</script>

<template>
  <div
    class="ded-tabs-container"
    :class="{ [props.className]: !!props.className }"
  >
    <!-- Tabs - 按鈕 -->
    <div
      class="ded-tabs"
      :class="{ 'ded-tabs-button': props.type === 'button' }"
    >
      <TabItem
        v-for="(item, index) in props.dataSource"
        :key="index"
        :theme-color="props.themeColor"
        :title="item.title"
        :type="props.type"
        :prefix="props.prefix"
        :index="index"
        :is-active="index === activeTabIndex"
        :is-disabled="props.isDisabled || item.isDisabled"
        @click="handleClick"
      />
    </div>
    <!-- Tabs - 內容顯示 -->
    <div
      class="ded-tab-content"
      :class="[{ 'ded-tab-disable': props.isDisabled }]"
    >
      <component
        :is="props.dataSource[activeTabIndex]?.content"
        v-if="typeof props.dataSource[activeTabIndex]?.content === 'object'"
      ></component>
      <template v-else>{{
        props.dataSource[activeTabIndex]?.content
      }}</template>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

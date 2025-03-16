<script setup>
import AccordionItem from "@/ui/element/Accordion/AccordionItem.vue"
import { computed, h } from "vue"

const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  prefix: {
    type: String,
  },
  borderStyle: {
    type: String,
    default: "highlight",
    validator: value => ["solid", "highlight"].includes(value),
  },
  isSmallSize: {
    type: Boolean,
    default: false,
  },
  isOpenAll: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: "",
  },
})

// 用於全局控制每個 AccordionItem 的打開狀態
const allOpen = computed(() => props.isOpenAll)

// 處理 dataSource，檢查並執行函數型的 label
const sanitizedDataSource = computed(() => {
  return props.dataSource.map(item => ({
    ...item,
    label: typeof item.label === "function" ? item.label(h) : item.label,
    detail: typeof item.detail === "function" ? item.detail(h) : item.detail,
  }))
})
</script>

<template>
  <div class="ded-accordion-container">
    <ul
      class="ded-accordion" :class="{
        [`ded-accordion-${props.borderStyle}`]: props.borderStyle,
        [props.className]: !!props.className,
      }"
    >
      <AccordionItem
        v-for="item in sanitizedDataSource"
        :key="item.id"
        :prefix="props.prefix"
        :border-style="props.borderStyle"
        :is-small-size="props.isSmallSize"
        :is-open="allOpen"
      >
        <template #label>
          <template v-if="item.label">
            <component :is="item.label" v-if="typeof item.label === 'object'" />
            <span v-else>{{ item.label }}</span>
          </template>
        </template>
        <template #detail>
          <template v-for="(detailItem, index) in item.detail" :key="index">
            <component
              :is="detailItem"
              v-if="typeof detailItem === 'object' && detailItem.type"
            />
            <template v-else>
              {{ detailItem }}
            </template>
          </template>
        </template>
      </AccordionItem>
    </ul>
  </div>
</template>

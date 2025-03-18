<script setup>
import { computed, inject } from "vue"

const props = defineProps({
  name: {
    type: String,
  },
  size: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  color: {
    type: String,
    default: "currentColor",
  },
  src: {
    type: String,
  },
})
// 假設 `icons` 來自 Vue `provide()`
const icons = inject("icons", {})

// 根據 `name` 取得對應的 SVG Vue 元件
const IconComponent = computed(() => icons[props.name] || null)
</script>

<template>
  <img
    v-if="props.src"
    :src="props.src"
    :width="props.size ? props.size : props.width"
    :height="props.size ? props.size : props.height"
    :style="{ fill: props.color }"
  />
  <component
    :is="IconComponent"
    v-else-if="IconComponent"
    :width="props.size ? props.size : props.width"
    :height="props.size ? props.size : props.height"
    :style="{ fill: props.color }"
  />
</template>

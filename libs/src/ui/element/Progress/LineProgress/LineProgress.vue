<script setup>
import { computed } from "vue"

// 定義 Props
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  percent: { // 進度
    type: Number,
    default: 0,
  },
  strokeWidth: { // 線條寬度
    type: Number,
    default: 10,
  },
  className: {
    type: String,
    default: "",
  },
})

// 計算屬性 - 進度條進度，並且限制 0-100 之間
const normalizedProgress = computed(() => Math.min(Math.max(props.percent, 0), 100))
</script>

<template>
  <div class="ded-progress-line-container ">
    <template v-if="props.label">
      <div class="ded-progress-label">
        {{ props.label }}
      </div>
    </template>
    <div class="ded-progress-line" :class="{ [props.className]: !!props.className }">
      <div class="ded-progress-line-track" :style="{ height: `${props.strokeWidth}px` }">
        <div
          class="ded-progress-line-percent-form"
          :style="{ width: `${normalizedProgress}%` }"
        />
      </div>
      <div class="ded-progress-line-label ded-progress-percent-text">
        {{ `${normalizedProgress}%` }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

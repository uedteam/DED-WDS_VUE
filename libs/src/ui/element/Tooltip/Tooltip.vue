<script setup>
import { getTargetPosition } from "@/utils/positionUtils"
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import { v4 as uuidv4 } from "uuid"

// 定義 Props
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  placement: {
    type: String,
    default: "top",
    validator: value => [
      "top-left",
      "top",
      "top-right",
      "right-top",
      "right",
      "right-bottom",
      "bottom-right",
      "bottom",
      "bottom-left",
      "left-top",
      "left",
      "left-bottom",
    ].includes(value),
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  className: {
    type: String,
    default: "",
  },
})

const tooltipTriggerRef = ref(null)
const tooltipContentRef = ref(null)
const tooltipStyles = ref({})

// 功能 - 生成 tooltip id
const baseId = uuidv4()
const tooltipId = `tooltip-${baseId}`

// 功能 - 控制 tooltip 的顯示及隱藏
const visible = ref(false)
function showTooltip() {
  visible.value = true
  nextTick(updateTooltipPosition)
}
function hideTooltip() {
  visible.value = false
}

// 功能 - 計算位置
async function updateTooltipPosition() {
  if (!tooltipTriggerRef.value || !tooltipContentRef.value || !visible.value)
    return

  await nextTick()

  const triggerElement = tooltipTriggerRef.value.getBoundingClientRect()

  const position = {
    top: triggerElement.top + window.scrollY,
    left: triggerElement.left + window.scrollX,
  }

  const childrenSize = {
    width: triggerElement.width,
    height: triggerElement.height,
  }

  const gap = "6px"
  tooltipStyles.value = getTargetPosition(position, childrenSize, props.placement, gap, false)
}

// 自定義節流函數
function throttle(func, limit) {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

onMounted(() => {
  const throttledUpdate = throttle(updateTooltipPosition, 100)
  window.addEventListener("scroll", throttledUpdate)
  window.addEventListener("resize", throttledUpdate)
})

onBeforeUnmount(() => {
  // 移除事件監聽器
  window.removeEventListener("scroll", updateTooltipPosition)
  window.removeEventListener("resize", updateTooltipPosition)
})
</script>

<template>
  <div
    ref="tooltipTriggerRef"
    class="ded-tooltip-container" :class="{ [props.className]: !!props.className }"
    :aria-describedby="tooltipId"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot />
  </div>

  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="visible"
        :id="tooltipId"
        ref="tooltipContentRef"
        :style="tooltipStyles"
        class="ded-tooltip"
        :class="`ded-tooltip-${props.placement}`"
      >
        <div class="ded-tooltip-content">
          {{ props.content }}
          <div
            v-if="props.showArrow"
            class="ded-tooltip-arrow"
            :class="`ded-tooltip-arrow-${props.placement}`"
          >
            <div class="ded-tooltip-arrow-shape" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>

</style>

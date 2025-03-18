<script setup>
// 定義 Props
const props = defineProps({
  width: {
    type: String,
    default: "1px",
    validator: value =>
      ["1px", "2px", "3px", "4px", "5px"].includes(value),
  },
  type: {
    type: String,
    default: "solid",
    validator: value => ["solid", "dashed", "dotted"].includes(value),
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: value => ["horizontal", "vertical"].includes(value),
  },
  align: {
    type: String,
    default: "center",
    validator: value => ["start", "center", "end"].includes(value),
  },
  className: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <div
    class="ded-divider" :class="[
      `ded-divider-${props.direction}`,
      `ded-divider-${props.width}`,
      `ded-divider-${props.type}`,
      $slots.default ? `ded-divider-${props.align}` : '',
      ...props.className.split(' '),
    ]"
  >
    <template v-if="$slots.default && $slots.default().some(node => node.children?.trim())">
      <div class="ded-divider-content">
        <slot />
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>

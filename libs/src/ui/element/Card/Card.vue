<script setup>
// 定義 Props
const props = defineProps({
  hasHeaderDivider: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <div
    class="ded-card ded-card-container" :class="{
      [props.className]: !!props.className }
    "
  >
    <div class="ded-card-header" :class="{ 'ded-card-header-divider': props.hasHeaderDivider }">
      <slot name="cardHeader" />
    </div>

    <div class="ded-card-body">
      <slot />
    </div>

    <div class="ded-card-footer">
      <slot name="cardFooter" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

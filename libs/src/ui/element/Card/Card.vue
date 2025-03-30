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
    <template v-if="$slots.cardHeader">
      <div class="ded-card-header" :class="{ 'ded-card-header-divider': props.hasHeaderDivider }">
        <slot name="cardHeader" />
      </div>
    </template>

    <div class="ded-card-body">
      <slot />
    </div>

    <template v-if="$slots.cardFooter">
      <div class="ded-card-footer">
        <slot name="cardFooter" />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>

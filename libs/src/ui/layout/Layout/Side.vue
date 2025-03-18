<script setup>
// 定義 Props
const props = defineProps({
  className: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <aside class="ded-side" :class="{ [props.className]: !!props.className }">
    <slot />
  </aside>
</template>

<style scoped lang="scss">

</style>

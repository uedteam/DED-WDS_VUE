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
  <footer class="ded-footer" :class="{ [props.className]: !!props.className }">
    <slot />
  </footer>
</template>

<style scoped lang="scss">

</style>

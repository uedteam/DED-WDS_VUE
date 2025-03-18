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
  <main class="ded-content" :class="{ [props.className]: !!props.className }">
    <slot />
  </main>
</template>

<style scoped lang="scss">

</style>

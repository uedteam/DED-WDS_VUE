<script setup>
// 定義 Props
const props = defineProps({
  label: {
    type: String,
  },
  href: {
    type: String,
  },
  isCurrentPage: {
    type: Boolean,
  },
})
</script>

<template>
  <a
    :class="props.isCurrentPage ? 'ded-breadcrumb-item-label' : 'ded-breadcrumb-item-link'"
    :href="props.href"
  >{{ props.label }}</a>
</template>

<style scoped lang="scss">

</style>

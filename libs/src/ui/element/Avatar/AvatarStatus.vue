<script setup>
import Icon from "@/ui/element/Icon/Icon.vue"
import { computed } from "vue"

// 定義 Props
const props = defineProps({
  avatarSize: {
    type: String,
    validator: value =>
      ["xsmall", "small", "medium", "large"].includes(value),
  },
  avatarStatus: {
    type: String,
    default: "none",
    validator: value =>
      ["none", "online", "idle", "busy", "offline"].includes(value),
  },
})
const statusIcon = computed(() => {
  const statusMap = {
    online: "SvgOnline",
    idle: "SvgIdle",
    busy: "SvgBusy",
    offline: "SvgOffline",
  }
  return statusMap[props.avatarStatus] || null
})
</script>

<template>
  <template v-if="props.avatarStatus !== 'none'">
    <Icon :name="statusIcon" class="ded-avatar-icon" :class="[`ded-avatar-icon-${props.avatarSize}`, `ded-avatar-icon-${props.avatarStatus}`]" />
  </template>
</template>

<style scoped lang="scss">

</style>

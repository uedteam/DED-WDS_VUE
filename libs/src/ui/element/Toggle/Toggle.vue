<script setup>
// 定義 Props
const props = defineProps({
  themeColor: {
    type: String,
    default: "primary",
    validator: value =>
      [
        "primary",
        "secondary",
        "neutral",
        "info",
        "success",
        "warning",
        "error",
      ].includes(value),
  },
  checkLabel: {
    type: String,
    default: "on",
  },
  unCheckLabel: {
    type: String,
    default: "off",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: "",
  },
})

// 定義 modelValue
const isChecked = defineModel({ type: Boolean, default: false })

// 處理 toggle 事件
function handleToggle() {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <div
    class="ded-toggle" :class="{
      [`ded-toggle-${props.themeColor}`]: props.themeColor,
      'ded-toggle-on': isChecked,
      'ded-toggle-off': !isChecked,
      'ded-toggle-disabled': props.isDisabled,
      [props.className]: !!props.className,
    }"
    @click.prevent="handleToggle"
  >
    <div
      class="ded-toggle-thumb"
      :class="{ 'ded-toggle-thumb-on': isChecked,
                'ded-toggle-thumb-off': !isChecked,
                'ded-toggle-thumb-disabled': props.isDisabled }"
    />
    <label
      class="ded-toggle-label"
      :class="{ 'ded-toggle-label-on': isChecked,
                'ded-toggle-label-off': !isChecked,
                'ded-toggle-label-disabled': props.isDisabled }"
    >
      {{ isChecked === true ? props.checkLabel : props.unCheckLabel }}
    </label>
  </div>
</template>

<style scoped lang="scss">

</style>

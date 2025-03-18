<script setup>
import Button from "@/ui/element/Button/Button.vue"
import Input from "@/ui/element/Input/Input.vue"

// 定義 Props
const props = defineProps({
  // themeColor: {
  //     type: String,
  //     validator: (value) =>
  //         [
  //             "primary",
  //             "secondary",
  //             "neutral",
  //             "info",
  //             "success",
  //             "warning",
  //             "error",
  //         ].includes(value),
  // },
  size: {
    type: String,
    default: "medium",
    validator: value => ["small", "medium", "large"].includes(value),
  },
  placeholder: {
    type: String,
    default: "Type something",
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

// 定義 Model
const modelValue = defineModel()
</script>

<template>
  <div class="ded-search">
    <Input
      v-model="modelValue"
      type="text"
      :placeholder="props.placeholder"
      prefix="SvgSearch"
      :size="props.size"
      :is-disabled="props.isDisabled"
      class-name="ded-search-input"
    />
    <Button
      variant="filled"
      :size="props.size"
      width="fit"
      border-width="1px"
      radius="4px"
      :is-disabled="props.isDisabled"
    >
      Search
    </Button>
  </div>
</template>

<style scoped lang="scss">
</style>

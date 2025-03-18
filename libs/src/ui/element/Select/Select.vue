<script setup>
import Icon from "@/ui/element/Icon/Icon.vue"
import { ref } from "vue"

// 定義 props
const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Select",
  },
  suffix: {
    type: String,
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

// 響應式值
const selectedValue = ref(modelValue)
</script>

<template>
  <div class="ded-select-container" :class="{ [props.className]: !!props.className }">
    <select
      v-model="selectedValue"
      class="ded-select"
      :class="{ 'ded-select-disabled': props.isDisabled }"
      :disabled="props.isDisabled"
    >
      <option value="" disabled selected>
        {{ props.placeholder }}
      </option>
      <option
        v-for="item in props.dataSource"
        :key="item.value"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
    <div class="ded-select-icon" :class="{ 'ded-select-icon-disabled': props.isDisabled }">
      <Icon :name="props.suffix" size="18" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

<script setup>
import Icon from '@/ui/element/Icon/Icon.vue';
import { v4 as uuidv4 } from 'uuid';

// 阻止 Vue 自動將 $attrs 綁定到最外層 <div>
defineOptions({ inheritAttrs: false });

// 定義 Props
const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  direction: {
    type: String,
    default: 'row',
    validator: (value) => ['row', 'column'].includes(value),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  className: {
    type: String,
    default: '',
  },
});

// 使用 defineModel 定義 v-model
const modelValue = defineModel({
  default: [],
});

// 定義 emits
const emits = defineEmits(['change']);

// 使用唯一識別碼生成方法
const baseId = uuidv4();
const generateId = (index) => `${baseId}-checkbox-${index}`;

// 切換選取狀態
function handleCheck(item) {
  if (modelValue.value.includes(item.value)) {
    modelValue.value = modelValue.value.filter((value) => value !== item.value);
  } else {
    modelValue.value = [...modelValue.value, item.value];
  }
  // 觸發 change 事件
  emits('change', modelValue.value);
}
</script>

<template>
  <div
    class="ded-checkbox-container"
    :class="{
      [`ded-checkbox-container-${direction}`]: direction,
      [className]: !!className,
    }"
  >
    <label
      v-for="(item, index) in dataSource"
      :key="item.value"
      :for="generateId(index)"
      class="ded-checkbox"
      :class="{
        'ded-checkbox-input-disabled': item.isDisabled,
        [`ded-text-${props.size}`]: props.size,
      }"
    >
      <input
        :id="generateId(index)"
        class="ded-checkbox-input"
        type="checkbox"
        :name="item.name"
        :value="item.value"
        :checked="modelValue.includes(item.value)"
        v-bind="$attrs"
        @change="handleCheck(item)"
      />
      <div
        class="ded-checkbox-icon"
        :class="[
          `ded-icon-${props.size}`,
          item.isDisabled ? 'ded-checkbox-icon-disabled' : '',
          modelValue.includes(item.value)
            ? `ded-checkbox-checked`
            : `ded-checkbox-unchecked`,
        ]"
      >
        <Icon v-if="modelValue.includes(item.value)" name="SvgCheck" />
      </div>
      <span
        class="ded-checkbox-text"
        :class="item.isDisabled ? 'ded-checkbox-text-disabled' : ''"
      >
        {{ item.label }}
      </span>
    </label>
  </div>
</template>

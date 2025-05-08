<script setup>
import { v4 as uuidv4 } from 'uuid';
import { computed, shallowRef } from 'vue';

// 阻止 Vue 自動將 $attrs 綁定到最外層 <div>
defineOptions({ inheritAttrs: false });

// 定義 Props
const props = defineProps({
  label: String,
  placeholder: {
    type: String,
    default: 'Placeholder',
  },
  limit: {
    type: Number,
    default: 30,
  },
  hint: {
    type: Object,
    default: () => ({ error: '', description: '' }),
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
});

// 使用唯一識別碼生成方法
const baseId = shallowRef(uuidv4());
const generateId = computed(() => `${baseId.value}-textarea`);

// 定義 Model
const modelValue = defineModel();

// 根據 hint 的值，計算屬性
const hintClass = computed(() => {
  if (props.hint.error) return 'error';
  if (props.hint.description) return 'desc';
  return '';
});

// 計算樣式類名
const containerClass = computed(() => ({
  [props.className]: !!props.className,
}));

const groupClass = computed(() => ({
  'ded-textarea-disable': props.isDisabled,
  [`ded-textarea-border-${hintClass.value}`]: hintClass.value,
}));

const hintTextClass = computed(() => ({
  'ded-textarea-disable': props.isDisabled,
  [`ded-textarea-hint-${hintClass.value}`]: hintClass.value,
}));
</script>

<template>
  <div class="ded-textarea-container" :class="containerClass">
    <!-- 多行輸入框標題 -->
    <template v-if="props.label">
      <label
        class="ded-textarea-label"
        :class="{ 'ded-textarea-disable': props.isDisabled }"
        :for="generateId"
      >
        {{ props.label }}
      </label>
    </template>

    <div class="ded-textarea-group" :class="groupClass">
      <!-- 多行輸入框 -->
      <textarea
        :id="generateId"
        v-model="modelValue"
        class="ded-textarea"
        :class="{ 'ded-textarea-disable': props.isDisabled }"
        :maxlength="props.limit > 0 ? props.limit : undefined"
        :placeholder="props.placeholder"
        v-bind="$attrs"
      />

      <!-- 輸入字數提示 -->
      <template v-if="modelValue.length > 0 && props.limit !== 0">
        <small
          class="ded-textarea-hint-count"
          :class="{ 'ded-textarea-disable': props.isDisabled }"
        >
          {{ `${modelValue.length} / ${props.limit}` }}
        </small>
      </template>
    </div>

    <!-- 多行輸入說明文字與提示 -->
    <small class="ded-textarea-hint" :class="hintTextClass">
      <!-- 若 error 存在，無論是函式還是字串，都優先顯示 -->
      <template v-if="props.hint.error">
        <template v-if="typeof props.hint.error === 'function'">
          <component :is="props.hint.error" />
        </template>
        <template v-else>
          {{ props.hint.error }}
        </template>
      </template>

      <!-- 只有當 error 為空時，才會顯示 description -->
      <template v-else-if="props.hint.description">
        <template v-if="typeof props.hint.description === 'function'">
          <component :is="props.hint.description" />
        </template>
        <template v-else>
          {{ props.hint.description }}
        </template>
      </template>
    </small>
  </div>
</template>

<style lang="scss"></style>

<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  currentStep: {
    type: Number,
    required: true,
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value),
  },
  className: {
    type: String,
    default: '',
  },
});

// 定義事件
const emit = defineEmits(['update:currentStep', 'stepChange']);

// 計算步驟狀態的 class
const getStepClass = computed(() => {
  return (index) => {
    if (index === props.currentStep) return 'ded-step-active';
    if (index < props.currentStep) return 'ded-step-completed';
    return '';
  };
});

// 點擊步驟時的處理函數
function handleStepClick(index) {
  if (index !== props.currentStep) {
    emit('update:currentStep', index);
    emit('stepChange', index);
  }
}

// 監聽 currentStep 屬性變化
watch(
  () => props.currentStep,
  (newStep) => {
    if (newStep < 0 || newStep >= props.dataSource.length) {
      console.warn('currentStep 超出範圍');
    }
  },
);
</script>

<template>
  <div
    class="ded-stepper"
    :class="{
      [`ded-stepper-${props.direction}`]: props.direction,
      [props.className]: !!props.className,
    }"
  >
    <div class="ded-stepper-header">
      <div
        v-for="(step, index) in props.dataSource"
        :key="index"
        class="ded-step"
        :class="[getStepClass(index)]"
        @click="handleStepClick(index)"
        :data-index="index"
      >
        <div class="ded-step-circle">
          {{ index + 1 }}
        </div>
        <div class="ded-step-group">
          <div class="ded-step-title">
            {{ step.title }}
          </div>
          <div v-if="step.desc" class="ded-step-description">
            {{ step.desc }}
          </div>
        </div>
        <div
          v-if="direction === 'vertical' && index !== dataSource.length - 1"
          class="ded-step-connector"
        />
      </div>
    </div>
    <div class="ded-stepper-content">
      <!-- 處理不同類型的內容 -->
      <component
        :is="props.dataSource[props.currentStep]?.content"
        v-if="typeof props.dataSource[props.currentStep]?.content === 'object'"
      ></component>
      <template v-else>{{
        props.dataSource[props.currentStep]?.content ||
        'No content available for this step.'
      }}</template>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

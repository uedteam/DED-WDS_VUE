<script setup>
import Button from '@/ui/element/Button/Button.vue';
import { ref, onMounted } from 'vue';

const themeColor = ref('error');
const variant = ref('filled');
const size = ref('medium');
const width = ref('fit');
const borderWidth = ref('1px');
const radius = ref('4px');
const isDisabled = ref(false);
const buttonRef = ref(null);

const handleClick = () => {
  console.log('Button clicked');
};

onMounted(() => {
  console.log('Button component mounted');
  console.log('Button ref:', buttonRef.value.buttonRef);

  // 可以調用原生 DOM 方法
  buttonRef.value.buttonRef.focus(); // 讓按鈕獲得焦點

  // 訪問 DOM 屬性
  console.log('按鈕寬度:', buttonRef.value.buttonRef.offsetWidth);
  console.log('按鈕高度:', buttonRef.value.buttonRef.offsetHeight);
});
</script>

<template>
  <Button
    ref="buttonRef"
    :themeColor="themeColor"
    :variant="variant"
    :size="size"
    :width="width"
    :borderWidth="borderWidth"
    :radius="radius"
    :isDisabled="isDisabled"
    @click="handleClick"
  >
    Button
  </Button>
</template>

<style></style>

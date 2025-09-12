<script setup>
import TestButton from '../test/button/TestButton.vue';
import TestInput from '../test/input/TestInput.vue';
import TestRadio from '../test/radio/TestRadio.vue';
import TestCheckbox from '../test/checkbox/TestCheckbox.vue';
import TestTag from '../test/tag/TestTag.vue';
import TestTextarea from '../test/textarea/TestTextarea.vue';
import TestBadge from '../test/badge/TestBadge.vue';
import TestPagination from '../test/pagination/TestPagination.vue';
</script>

<template>
  <div class="p-6">
    <h1 class="text-center mb-8 text-2xl font-bold">UI 元件測試</h1>

    <div class="flex flex-col items-center">
      <h2>按鈕</h2>
      <TestButton />
    </div>

    <div class="flex flex-col items-center">
      <h2>輸入框</h2>
      <TestInput />
    </div>

    <div class="flex flex-col items-center">
      <h2>單選框</h2>
      <TestRadio />
    </div>

    <div class="flex flex-col items-center">
      <h2>多選框</h2>
      <TestCheckbox />
    </div>

    <div class="flex flex-col items-center">
      <h2>標籤</h2>
      <TestTag />
    </div>

    <div class="flex flex-col items-center">
      <h2>文字區域</h2>
      <TestTextarea />
    </div>
    <div class="flex flex-col items-center">
      <h2>徽章 Badge</h2>
      <TestBadge />
    </div>
    <div class="flex flex-col items-center">
      <h2>分頁 Pagination</h2>
      <TestPagination />
    </div>
  </div>
</template>

<style></style>

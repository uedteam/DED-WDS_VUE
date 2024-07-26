<script setup lang="ts">
import Button from '@ui/element/button/button.vue';
</script>

<template>
  <div class="container">
    <Button @click="console.log('點擊')">送出</Button>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

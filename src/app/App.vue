<script setup lang="ts">
import Button from '@ui/element/avatar/button.vue';
import AIcon from '@ui/element/baseIcon/BaseIcon.vue';
</script>

<template>
  <div class="container">
    <Button prependIcon="folder" type="outline">送出</Button>
    <!-- <a-icon class="" name="folder" size="20"></a-icon> -->
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

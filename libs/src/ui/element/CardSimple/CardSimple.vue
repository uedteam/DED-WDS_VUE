<script setup>
import Button from "@/ui/element/Button/Button.vue"
import Image from "@/ui/element/Image/Image.vue"
import Title from "@/ui/element/Title/Title.vue"

// 定義 Props
const props = defineProps({
  layout: {
    type: String,
    default: "vertical",
    validator: value => ["horizontal", "vertical"].includes(value),
  },
  hasBorder: {
    type: Boolean,
    default: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  buttonName: {
    type: String,
  },
  align: {
    type: String,
    default: "left",
    validator: value => ["left", "center", "right"].includes(value),
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
  },

})
</script>

<template>
  <div
    class="ded-card-simple" :class="{
      [`ded-card-simple-${props.layout}`]: props.layout,
      'ded-card-simple-border': props.hasBorder }"
  >
    <div class="ded-card-simple-image">
      <Image
        :src="props.imgSrc"
        alt="placeholder"
        :ratio="props.layout === 'vertical' ? '16x9' : '1x1'"
        object-fit="cover"
      />
    </div>
    <div class="ded-card-simple-content">
      <div
        class="ded-card-simple-text" :class="[
          `ded-card-simple-text-${props.layout}`]"
      >
        <Title theme-color="primary" :level="3">
          {{ props.title }}
        </Title>

        <p v-if="props.subtitle" class="ded-card-simple-text-subtitle">
          {{ props.subtitle }}
        </p>

        <p v-if="props.description" class="ded-card-simple-text-desc ded-multiline-ellipsis">
          {{ props.description }}
        </p>
      </div>

      <template v-if="props.buttonName">
        <div
          class="ded-card-simple-content-button-group" :class="{
            [`ded-card-simple-content-button-group-${props.align}`]: props.align,
          } "
        >
          <Button
            theme-color="primary"
            variant="filled"
            :size="props.layout === 'vertical' ? 'medium' : 'large'"
            :width="props.align === 'center' ? 'fluid' : 'fit'"
            border-width="1px"
            radius="4px"
          >
            {{ props.buttonName }}
          </Button>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

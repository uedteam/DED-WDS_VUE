<script setup>
import { ref, computed } from 'vue';
import { cva } from 'class-variance-authority';
import AIcon from '@ui/element/baseIcon/BaseIcon.vue';

const props = defineProps({
  prependIcon: String,
  appendIcon: String,
  iconOnly: String,
  themeColor: {
    type: String,
    default: 'primary',
    validator: (value) =>
      [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ].includes(value),
  },
  type: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outline', 'text'].includes(value),
  },
  disable: Boolean,
  // borderRound: {
  //     type: String,
  //     default: "md",
  //     validator: (value) =>
  //         ["none", "base", "md", "lg", "pill"].includes(value),
  // },
  // size: {
  //     type: String,
  //     default: "xl",
  //     validator: (value) => ["xs", "sm", "base", "lg", "xl"].includes(value),
  // },
  // btnWidth: {
  //     type: String,
  //     default: "fit",
  //     validator: (value) => ["fit", "full"].includes(value),
  // },
});

const buttonCVAClass = computed(() => {
  return cva('button', {
    variants: {
      type: {
        filled: 'button-contained',
        outline: 'button-outlined',
        text: 'button-text',
      },
    },
    compoundVariants: [
      // [ ThemeColor ] - primary
      {
        type: 'filled',
        themeColor: 'primary',
        class: 'button-contained-primary',
      },
      {
        type: 'outline',
        themeColor: 'primary',
        class: 'button-outlined-primary',
      },
      {
        type: 'text',
        themeColor: 'primary',
        class: 'button-text-primary',
      },
      // [ ThemeColor ] - secondary
      {
        type: 'filled',
        themeColor: 'secondary',
        class: 'button-contained-secondary',
      },
      {
        type: 'outline',
        themeColor: 'secondary',
        class: 'button-outlined-secondary',
      },
      {
        type: 'text',
        themeColor: 'secondary',
        class: 'button-text-secondary',
      },
      // [ ThemeColor ] - tertiary
      {
        type: 'filled',
        themeColor: 'tertiary',
        class: 'button-contained-tertiary',
      },
      {
        type: 'outline',
        themeColor: 'tertiary',
        class: 'button-outlined-tertiary',
      },
      {
        type: 'text',
        themeColor: 'tertiary',
        class: 'button-text-tertiary',
      },
      // [ ThemeColor ] - success
      {
        type: 'filled',
        themeColor: 'success',
        class: 'button-contained-success',
      },
      {
        type: 'outline',
        themeColor: 'success',
        class: 'button-outlined-success',
      },
      {
        type: 'text',
        themeColor: 'success',
        class: 'button-text-success',
      },
      // [ ThemeColor ] - warning
      {
        type: 'filled',
        themeColor: 'warning',
        class: 'button-contained-warning',
      },
      {
        type: 'outline',
        themeColor: 'warning',
        class: 'button-outlined-warning',
      },
      {
        type: 'text',
        themeColor: 'warning',
        class: 'button-text-warning',
      },
      // [ ThemeColor ] - error
      {
        type: 'filled',
        themeColor: 'error',
        class: 'button-contained-error',
      },
      {
        type: 'outline',
        themeColor: 'error',
        class: 'button-outlined-error',
      },
      {
        type: 'text',
        themeColor: 'error',
        class: 'button-text-error',
      },
      // [ ThemeColor ] - info
      {
        type: 'filled',
        themeColor: 'info',
        class: 'button-contained-info',
      },
      {
        type: 'outline',
        themeColor: 'info',
        class: 'button-outlined-info',
      },
      {
        type: 'text',
        themeColor: 'info',
        class: 'button-text-info',
      },

      // [ Disable ]
      {
        type: 'filled',
        disable: true,
        class: 'button-container-disable',
      },
      {
        type: 'outline',
        disable: true,
        class: 'button-outline-disable',
      },
      {
        type: 'text',
        disable: true,
        class: 'button-text-disable',
      },
    ],
  })({
    //這裡設定 variants名稱接收 props的值
    type: props.type,
    disable: props.disable,
    themeColor: props.themeColor,
  });
});
</script>

<template>
  <button :class="buttonCVAClass">
    <a-icon
      class=""
      :name="prependIcon"
      size="20"
      v-if="prependIcon && !iconOnly"
    ></a-icon>
    <slot v-if="!iconOnly"></slot>
    <a-icon
      :name="appendIcon"
      size="20"
      v-if="appendIcon && !iconOnly"
    ></a-icon>

    <a-icon :name="iconOnly" size="20" v-if="iconOnly"></a-icon>
  </button>
</template>

<style lang="scss" scoped></style>

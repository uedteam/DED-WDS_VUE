<script setup>
import { useToast } from "@/composable/useToast.js"
import Button from "@/ui/element/Button/Button.vue"
import Icon from "@/ui/element/Icon/Icon.vue"
import Title from "@/ui/element/Title/Title.vue"

// 定義 Props
const props = defineProps({
  className: {
    type: String,
    default: "",
  },
})

const { toasts, remove, positions } = useToast()
</script>

<template>
  <div v-for="position in positions" :key="position">
    <div v-for="toast in toasts[position]" :key="toast.id">
      <teleport :to="`#toast-container-${toast.position}`">
        <div class="ded-toast" :class="[`ded-toast-border-${toast.themeColor}`, props.className]">
          <Button class="ded-close-button" variant="text" theme-color="neutral" @click="remove(toast.id, position)">
            <Icon name="SvgClose" size="20" />
          </Button>

          <div class="ded-toast-header">
            <div class="ded-toast-header-message" :class="[`ded-toast-header-message-${toast.themeColor}`]">
              <Icon :name="toast.prefix" size="20" />
              <Title :theme-color="toast.themeColor" :level="5">
                {{ toast.title }}
              </Title>
            </div>
            <div v-if="toast.action" class="ded-toast-header-action">
              <component :is="toast.action" v-if="typeof toast.action === 'object'" />
              <div v-else-if="typeof toast.action === 'function'">
                <component :is="toast.action()" />
              </div>
            </div>
          </div>

          <p class="ded-description">
            {{ toast.content }}
          </p>
        </div>
      </teleport>
    </div>
  </div>
</template>

<style scoped>

</style>

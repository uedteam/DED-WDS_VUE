<script setup>
import Button from "@/ui/element/Button/Button.vue"
import Icon from "@/ui/element/Icon/Icon.vue"

defineProps({
  hasClose: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: "",
  },
})

if (!document.getElementById("dialog")) {
  const dialogContainer = document.createElement("div")
  dialogContainer.id = "dialog"
  document.body.appendChild(dialogContainer)
}

const modelValue = defineModel()
</script>

<template>
  <Teleport to="#dialog">
    <transition name="dialog">
      <div v-if="modelValue" class="mask-overlay" @click.self="modelValue = false">
        <div class="ded-dialog-content" :class="{ [className]: !!className }">
          <template v-if="hasClose === true">
            <button class="ded-dialog-close-btn" @click="modelValue = false">
              <Icon name="SvgClose" size="20" />
            </button>
          </template>

          <div class="ded-dialog-header">
            <slot name="header" />
          </div>

          <div class="ded-dialog-body">
            <slot name="content" />
          </div>

          <div class="ded-dialog-footer">
            <slot name="footer">
              <Button variant="contained" size="medium" class-name="ded-cancel-btn" @click="modelValue = false">
                Cancel
              </Button>
              <Button variant="contained" theme-color="primary" size="medium">
                OK
              </Button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

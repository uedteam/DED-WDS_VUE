<script setup>
import { computed, ref } from "vue"

import { useRouter } from "vue-router"
import MenuItem from "./MenuItem.vue"

const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  isCollapsed: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#000000",
  },
  hasDivider: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: "",
  },
  useRouter: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["navItemClick", "expandedNav"])

const sortDataSource = computed(() =>
  [...props.dataSource].sort((a, b) => (a.order || 0) - (b.order || 0)),
)

// 在父元件中定義反應式的 expandedItems，並由事件更新
const expandedItems = ref({})

const computedWidth = computed(() => (props.isCollapsed ? "auto" : "100%"))

// 若啟用 useRouter，則取得 router 實例
const router = props.useRouter ? useRouter() : null

function handleItemClick({ item, event }) {
  emit("navItemClick", item)
  emit("expandedNav")

  if (item.children) {
    event.preventDefault()
    handleToggleExpand(item)
  }
  else if (item.path && props.useRouter && router) {
    router.push(item.path)
  }
}

// 處理箭頭點擊的展開切換事件
function handleToggleExpand(item) {
  expandedItems.value[item.path] = !expandedItems.value[item.path]
}
</script>

<template>
  <div class="ded-nav-container" :class="{ [props.className]: !!props.className }">
    <nav class="ded-nav" :style="{ width: computedWidth }">
      <ul class="ded-nav-list">
        <MenuItem
          v-for="item in sortDataSource"
          :key="item.path"
          :item="item"
          :is-collapsed="props.isCollapsed"
          :use-router="props.useRouter"
          :color="props.color"
          :has-divider="props.hasDivider"
          :expanded-items="expandedItems"
          :is-disabled="item.isDisabled"
          @item-click="handleItemClick"
          @toggle-expand="handleToggleExpand"
        />
      </ul>
    </nav>
  </div>
</template>

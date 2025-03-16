<script setup>
import Avatar from "@/ui/element/Avatar/Avatar.vue"
import List from "@/ui/element/List/List.vue"
import ListItem from "@/ui/element/List/ListItem.vue"
import { computed, onBeforeUnmount, onMounted, ref } from "vue"

// 定義 Props
const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  size: {
    type: String,
    default: "large",
    validator: value =>
      ["small", "medium", "large"].includes(value),
  },
  limit: {
    type: Number,
    default: 1,
  },
  className: {
    type: String,
    default: "",
  },
})

// 計算剩餘未顯示數量
const restCount = computed(() => {
  const result = props.dataSource.length - props.limit
  return result >= 99 ? 99 : result
})

// 功能 - 分割
function splitArrayAt(arr, splitCount) {
  const currList = arr.slice(0, splitCount)
  const restList = arr.slice(splitCount)
  return { currList, restList }
}

// 分割[顯示群組]與[未顯示群組]
const currList = computed(() => splitArrayAt(props.dataSource, props.limit).currList)
const restList = computed(() => splitArrayAt(props.dataSource, props.limit).restList)

// 控制顯示剩餘未顯示數據
const isOpen = ref(false)
const restContainerRef = ref(null)
const menuStyles = ref({ top: "0px", left: "0px" })

// 更新菜單位置
function updateMenuPosition() {
  const rect = restContainerRef.value?.getBoundingClientRect()
  if (rect) {
    menuStyles.value = {
      top: `${rect.bottom + window.scrollY + 8}px`,
      left: `${rect.left + window.scrollX}px`,
    }
  }
}

// 打開或關閉菜單時更新位置
function handleClick() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    updateMenuPosition()
    window.addEventListener("resize", updateMenuPosition)
    window.addEventListener("scroll", updateMenuPosition, true)
    document.addEventListener("click", handleOutsideClick)
  }
  else {
    window.removeEventListener("resize", updateMenuPosition)
    window.removeEventListener("scroll", updateMenuPosition, true)
    document.removeEventListener("click", handleOutsideClick)
  }
}

// 點擊外部時關閉菜單
function handleOutsideClick(event) {
  if (
    restContainerRef.value
    && !restContainerRef.value.contains(event.target)
    && (!document.querySelector(".ded-dropdown-menu")?.contains(event.target))
  ) {
    isOpen.value = false
    document.removeEventListener("click", handleOutsideClick)
  }
}

// 清理事件監聽器
onMounted(() => {
  if (isOpen.value) {
    window.addEventListener("resize", updateMenuPosition)
    window.addEventListener("scroll", updateMenuPosition, true)
    document.addEventListener("click", handleOutsideClick) // 確保 Mounted 時的事件監聽
  }
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateMenuPosition)
  window.removeEventListener("scroll", updateMenuPosition, true)
  document.removeEventListener("click", handleOutsideClick) // 確保清理
})
</script>

<template>
  <div class="ded-avatar-group" :class="{ [props.className]: !!props.className }">
    <div v-for="(avatar, index) in currList" :key="index" class="ded-avatar-overlay">
      <Avatar
        :shape="props.shape"
        :size="props.size"
        :src="avatar.src"
        :user-name="avatar.userName"
        :caption="avatar.caption"
      />
    </div>
    <template v-if="restList.length > 0">
      <div class="ded-avatar-overlay">
        <div
          v-if="restList.length > 0" ref="restContainerRef"
          class="ded-avatar-container" :class="[`ded-avatar-container-${props.size}`]"
        >
          <button
            class="ded-avatar ded-avatar-circle"
            style="cursor: pointer;"
            @click="handleClick"
          >
            <span class="ded-avatar-text">
              {{ `+${restCount}` }}
            </span>
          </button>
        </div>
      </div>

      <Teleport to="body">
        <div
          v-if="isOpen"
          class="ded-dropdown-menu"
          :style="{
            'position': 'absolute',
            'top': menuStyles.top,
            'left': menuStyles.left,
            'z-index': 9999,
          }"
        >
          <List
            :data-source="restList"
            :has-outline="true"
          >
            <ListItem
              v-for="(menu) in restList"
              :key="menu.userName"
              :label="menu.userName"
              :value="menu.userName"
              :href="menu.src"
              :prefix="menu.prefix"
            >
              <Avatar
                shape="circle"
                size="medium"

                :user-name="menu.userName"
                :caption="menu.caption"
              />
            </ListItem>
          </List>
        </div>
      </Teleport>
    </template>
  </div>
</template>

<style scoped lang="scss">
</style>

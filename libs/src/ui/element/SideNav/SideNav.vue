<script setup>
import Avatar from "@/ui/element/Avatar/Avatar.vue"
import Button from "@/ui/element/Button/Button.vue"
import Icon from "@/ui/element/Icon/Icon.vue"
import Input from "@/ui/element/Input/Input.vue"
import Menu from "@/ui/element/Menu/Menu.vue"
import Navbar from "@/ui/element/Navbar/Navbar.vue"
import { computed, onMounted, onUnmounted, ref } from "vue"

// 定義 props
const props = defineProps({
  themeColor: {
    type: String,
    default: "#00467C",
  },
  mobileLogoSrc: {
    type: String,
    default: "",
  },
  desktopLogoSrc: {
    type: String,
    default: "",
  },
  logoLink: {
    type: String,
    default: "",
  },
  hasLogo: {
    type: Boolean,
    default: false,
  },
  hasRWD: {
    type: Boolean,
    default: false,
  },
  userName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  userStatus: {
    type: String,
    required: true,
    validator: value =>
      ["none", "online", "busy", "idle", "offline"].includes(value),
  },
  hasSearch: {
    type: Boolean,
    default: false,
  },
  dataSource: {
    type: Array,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
})

// 新增斷點常數
const MOBILE_BREAKPOINT = 1024

const isMobile = ref(false)
const isCollapsed = ref(false)

const sortDataSource = computed(() => {
  return [...props.dataSource].sort((a, b) => a.order - b.order)
})

function handleCollapsed() {
  isCollapsed.value = !isCollapsed.value
}

function handleResize() {
  const isBelowBreakpoint = window.innerWidth < MOBILE_BREAKPOINT
  isMobile.value = isBelowBreakpoint
  isCollapsed.value = isBelowBreakpoint
}

// 導航欄主題顏色
const computedThemeColor = computed(() => {
  const color = props.themeColor

  const presetColors = {
    blue: "#00467C",
    yellow: "#F4E069",
    grape: "#AB86D1",
    black: "#000000",
  }

  // 判斷是否為 hex 色碼
  const isHexColor = /^#(?:[0-9A-F]{3}){1,2}$/i.test(color)

  // 檢查是否 hex 等於預設顏色
  const presetName = Object.entries(presetColors).find(
    ([, value]) => value.toLowerCase() === color.toLowerCase(),
  )?.[0]

  if (presetName === "blue" || presetName === "yellow") {
    return {
      backgroundColor: presetColors[presetName],
    }
  }

  return {
    backgroundColor: presetColors[color] || (isHexColor ? color : "#ffffff"),
  }
})

// 文字內容顏色
const computedContentColor = computed(() => {
  const color = props.themeColor

  const presetColors = {
    blue: "#00467C",
    yellow: "#F4E069",
    grape: "#AB86D1",
    black: "#000000",
  }

  const presetTextColors = {
    blue: "#ffffff",
    yellow: "#004E81",
    grape: "#004E81",
    black: "#cccccc",
  }

  // 先判斷是否是 preset key
  if (presetTextColors[color]) {
    return presetTextColors[color]
  }

  // const isHexColor = /^#(?:[0-9A-F]{3}){1,2}$/i.test(color)

  // 判斷是否 hex 等於預設顏色
  const presetName = Object.entries(presetColors).find(
    ([, value]) => value.toLowerCase() === color.toLowerCase(),
  )?.[0]

  if (presetName && presetTextColors[presetName]) {
    return presetTextColors[presetName]
  }

  // 預設文字顏色（深色）
  return "#000000"
})

const hasLogo = computed(() => {
  return props.logo !== ""
})

// 初始化及監聽
onMounted(() => {
  handleResize() // 初次檢查
  window.addEventListener("resize", handleResize) // 監聽視窗大小變化
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize) // 清理監聽
})
</script>

<template>
  <template v-if="isMobile && isCollapsed && hasRWD">
    <Navbar
      :data-source="sortDataSource"
      :has-logo="hasLogo"
      :logo-src="props.mobileLogoSrc"
      class-name="ded-side-nav-rwd"
      style="position: fixed; top: 0; height: 60px; width: 100%;"
    />
  </template>
  <template v-if="!isMobile">
    <div class="ded-side-nav" :style="{ width: isCollapsed ? 'auto' : '100%', ...computedThemeColor } ">
      <template v-if="props.hasLogo">
        <div class="ded-side-nav-header">
          <template v-if="!isCollapsed">
            <div class="ded-side-nav-header-logo">
              <template v-if="props.logoLink">
                <a :href="props.logoLink">
                  <img :src="props.desktopLogoSrc" alt="logo">
                </a>
              </template>
              <template v-else>
                <Icon :name="props.logo" width="90" height="30" :color="computedContentColor" />
              </template>
            </div>
          </template>

          <button class="side-nav-toggle" @click="handleCollapsed">
            <Icon name="SvgArrowDown" size="24" color="#fff" :style="{ transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(90deg)' } " />
          </button>
        </div>
      </template>
      <template v-if="!isCollapsed">
        <div class="ded-side-nav-desktop">
          <Avatar
            shape="circle"
            size="large"
            :status="props.userStatus"
            :is-show-info="true"
            src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
            alt="無圖顯示"
            :user-name="props.userName"
            :caption="props.caption"
            class-name=""
          />
          <Button
            theme-color="primary"
            variant="text"
            size="large"
            prefix="SvgLogout"
          />
        </div>
      </template>

      <template v-else>
        <div class="ded-side-nav-mobile">
          <Avatar
            shape="circle"
            size="small"
            status="online"
            :is-show-info="false"
            src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
            alt="無圖顯示"
            user-name="Name"
            caption="Caption"
            class-name=""
          />
        </div>
      </template>
      <template v-if="!isCollapsed && props.hasSearch">
        <Input
          type="text"
          placeholder="Search..."
          prefix="SvgSearch"
          size="medium"
          init-value=""
          @change="() => {}"
        />
      </template>
      <Menu
        :data-source="sortDataSource"
        :is-collapsed="isCollapsed"
        :color="computedContentColor"
        :has-divider="false"
        class-name=""
      />
    </div>
  </template>
</template>

<style scoped lang="scss">

</style>

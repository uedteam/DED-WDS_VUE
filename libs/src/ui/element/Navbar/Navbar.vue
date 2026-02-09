<script setup>
import Avatar from '@/ui/element/Avatar/Avatar.vue';
import Badge from '@/ui/element/Badge/Badge.vue';
import Button from '@/ui/element/Button/Button.vue';
import Icon from '@/ui/element/Icon/Icon.vue';
import Input from '@/ui/element/Input/Input.vue';
import { computed } from 'vue';

// 定義 props
const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  hasLogo: {
    type: Boolean,
    default: true,
  },
  logoSrc: {
    type: String,
    required: true,
    default: '',
  },
  logoLink: {
    type: String,
  },
  avatarSrc: {
    type: String,
  },
  className: {
    type: String,
    default: '',
  },
});

// 定義 Model
const modelValue = defineModel();
// 購物車數量（可依實際狀態傳入或寫死 demo 數字）
const cartCount = 2;

const sortDataSource = computed(() => {
  return [...props.dataSource].sort((a, b) => a.order - b.order);
});

function handleLogoClick() {
  if (props.logoLink) {
    window.open(props.logoLink, '_self');
  }
}
</script>

<template>
  <nav class="navbar" :class="{ [props.className]: !!props.className }">
    <div class="navbar-menu">
      <!-- 公司logo -->
      <template v-if="props.hasLogo === true">
        <Button theme-color="primary" variant="text" @click="handleLogoClick">
          <Icon :src="props.logoSrc" alt="Logo" class="navbar-logo" />
        </Button>
      </template>

      <!-- links -->
      <ul class="navbar-links">
        <Button
          v-for="link in sortDataSource"
          :key="link.path"
          theme-color="primary"
          variant="text"
          @click="() => link.path && window.open(link.path, '_blank')"
        >
          {{ link.label }}
        </Button>
      </ul>
    </div>

    <div class="navbar-feature">
      <div class="navbar-icons">
        <div class="navbar-icons-icon">
          <Badge
            theme-color="error"
            :is-show-dot="true"
            :value="100"
            :limit="99"
            class-name=""
          >
            <Icon name="SvgNotification" size="26" />
          </Badge>
        </div>
        <!-- 購物車 icon -->
        <div class="navbar-icons-icon">
          <Badge
            theme-color="primary"
            :is-show-dot="false"
            :value="cartCount"
            :limit="99"
            class-name=""
          >
            <Icon name="SvgCart" size="26" />
          </Badge>
        </div>
        <div class="navbar-icons-icon">
          <Avatar
            shape="circle"
            size="small"
            status="online"
            :src="props.avatarSrc"
            user-name="Name"
            caption="Caption"
          />
        </div>
      </div>
      <button class="navbar-switch block md:hidden">
        <div class="navbar-switch-bar" />
        <div class="navbar-switch-bar" />
        <div class="navbar-switch-bar" />
        <span class="navbar-switch-sr-only">切換選單</span>
      </button>
    </div>
  </nav>
</template>

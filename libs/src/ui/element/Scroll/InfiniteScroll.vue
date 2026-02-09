<template>
  <div
    ref="infiniteScrollRef"
    :style="wrapperStyle(height)"
    @scroll="handleOnScroll"
  >
    <slot />
    <div v-if="isLoading" :style="loadingStyle">
      <span :style="spinnerStyle" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  height: {
    type: Number,
    default: 500,
  },
  onScrollBottom: Function,
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const infiniteScrollRef = ref(null);

const wrapperStyle = (h) => ({
  height: h + 'px',
  overflow: 'auto',
});

const loadingStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80px',
};

const spinnerStyle = {
  width: '32px',
  height: '32px',
  border: '4px solid #1976d2',
  borderTop: '4px solid #fff',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  margin: '40px 0',
};

const handleOnScroll = () => {
  const containerElem = infiniteScrollRef.value;
  if (containerElem) {
    const scrollPos = containerElem.scrollTop + containerElem.clientHeight;
    const divHeight = containerElem.scrollHeight;
    if (scrollPos >= divHeight && props.onScrollBottom) {
      props.onScrollBottom();
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

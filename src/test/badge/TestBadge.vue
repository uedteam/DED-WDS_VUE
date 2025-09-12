<script setup>
import Badge from '@/ui/element/Badge/Badge.vue';
import { ref, nextTick, onMounted } from 'vue';

const themeColor = ref('error');
const availableColors = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info',
];
const badgeValue = ref(5);
const badgeLimit = ref(9);
const isShowDot = ref(false);
const radius = ref('8px');
const className = ref('');

const toggleThemeColor = async () => {
  const currentIndex = availableColors.indexOf(themeColor.value);
  const nextIndex =
    currentIndex !== -1 ? (currentIndex + 1) % availableColors.length : 0;
  themeColor.value = availableColors[nextIndex];
  await nextTick();
};

const increaseRadius = () => {
  const currentRadius = parseInt(radius.value);
  radius.value = `${currentRadius + 2}px`;
};
const decreaseRadius = () => {
  const currentRadius = parseInt(radius.value);
  if (currentRadius > 0) {
    radius.value = `${currentRadius - 2}px`;
  }
};

onMounted(() => {
  // 可加上 debug log
});
</script>

<template>
  <div class="test-badge-container">
    <Badge
      :themeColor="themeColor"
      :value="badgeValue"
      :limit="badgeLimit"
      :isShowDot="isShowDot"
      :className="className"
      :style="{ borderRadius: radius }"
    >
      <span v-if="isShowDot" style="padding: 0 8px">有 Dot 樣式 slot</span>
      <span v-else style="padding: 0 8px">數字模式 slot</span>
    </Badge>

    <div class="badge-controls">
      <button @click="toggleThemeColor" class="control-button">切換顏色</button>
      <button @click="badgeValue++" class="control-button">增加數字</button>
      <button
        @click="badgeValue = Math.max(0, badgeValue - 1)"
        class="control-button"
      >
        減少數字
      </button>
      <button @click="isShowDot = !isShowDot" class="control-button">
        切換 Dot
      </button>
      <button @click="increaseRadius" class="control-button">增加圓角</button>
      <button @click="decreaseRadius" class="control-button">減少圓角</button>
    </div>

    <div class="badge-status">
      <p>當前 Badge 設定:</p>
      <ul>
        <li>
          主題顏色: <strong>{{ themeColor }}</strong>
        </li>
        <li>
          數值: <strong>{{ badgeValue }}</strong>
        </li>
        <li>
          上限: <strong>{{ badgeLimit }}</strong>
        </li>
        <li>
          Dot 模式: <strong>{{ isShowDot ? '顯示' : '隱藏' }}</strong>
        </li>
        <li>
          圓角: <strong>{{ radius }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.test-badge-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
}
.badge-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 15px;
}
.control-button {
  padding: 6px 12px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
}
.control-button:hover {
  background-color: #e5e5e5;
}
.badge-status {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #eaeaea;
}
.badge-status ul {
  margin-bottom: 0;
  padding-left: 20px;
}
</style>

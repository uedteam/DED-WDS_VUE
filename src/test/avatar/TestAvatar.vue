<template>
  <div class="test-avatar-container">
    <div class="avatar-demo-row">
      <div style="position: relative; display: inline-block">
        <Avatar :src="src" :size="size" :shape="shape" :alt="alt" />
        <AvatarStatus
          :avatarSize="size"
          :avatarStatus="status"
          style="position: absolute; right: -6px; bottom: -6px"
        />
      </div>
      <div style="position: relative; display: inline-block">
        <Avatar :src="src2" :size="size" :shape="shape" :alt="alt2" />
        <AvatarStatus
          :avatarSize="size"
          :avatarStatus="status2"
          style="position: absolute; right: -6px; bottom: -6px"
        />
      </div>
    </div>
    <div class="avatar-info">
      <ul>
        <li>
          尺寸：<strong>{{ size }}</strong>
        </li>
        <li>
          形狀：<strong>{{ shape }}</strong>
        </li>
        <li>
          alt：<strong>{{ alt }}</strong>
        </li>
        <li>
          狀態1：<strong>{{ status }}</strong>
        </li>
        <li>
          狀態2：<strong>{{ status2 }}</strong>
        </li>
      </ul>
    </div>
    <div class="control-buttons">
      <button @click="toggleSize" class="control-button">切換尺寸</button>
      <button @click="toggleShape" class="control-button">切換形狀</button>
      <button @click="toggleStatus" class="control-button">切換狀態1</button>
      <button @click="toggleStatus2" class="control-button">切換狀態2</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Avatar from '../../../libs/src/ui/element/Avatar/Avatar.vue';
import AvatarStatus from '../../../libs/src/ui/element/Avatar/AvatarStatus.vue';

const src = ref('https://randomuser.me/api/portraits/men/32.jpg');
const src2 = ref('https://randomuser.me/api/portraits/women/44.jpg');
const size = ref('medium');
const shape = ref('circle');
const alt = ref('男生頭像');
const alt2 = ref('女生頭像');
const status = ref('online');
const status2 = ref('offline');

const statusList = ['none', 'online', 'idle', 'busy', 'offline'];
function toggleSize() {
  size.value = size.value === 'medium' ? 'large' : 'medium';
}
function toggleShape() {
  shape.value = shape.value === 'circle' ? 'square' : 'circle';
}
function toggleStatus() {
  const idx = statusList.indexOf(status.value);
  status.value = statusList[(idx + 1) % statusList.length];
}
function toggleStatus2() {
  const idx = statusList.indexOf(status2.value);
  status2.value = statusList[(idx + 1) % statusList.length];
}
</script>

<style scoped>
.test-avatar-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-sizing: border-box;
}

.test-avatar-container h3 {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
}

.avatar-demo-row {
  display: flex;
  gap: 32px;
  align-items: center;
  margin-bottom: 16px;
}

.avatar-info {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}
.avatar-info ul {
  margin-bottom: 15px;
  padding-left: 20px;
}

.control-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
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
.control-button:disabled {
  background-color: #e0e0e0;
  color: #aaa;
  cursor: not-allowed;
}
.control-button:hover:not(:disabled) {
  background-color: #e5e5e5;
}
</style>

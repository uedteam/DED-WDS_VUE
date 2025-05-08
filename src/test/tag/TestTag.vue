<script setup>
import Tag from '@/ui/element/Tag/Tag.vue';
import { ref, onMounted, nextTick } from 'vue';

// 定義 Tag 元件的各種屬性
const themeColor = ref('primary');
const variant = ref('filled');
const label = ref('標籤文字');
const href = ref('');
const prefix = ref('');
const closable = ref(true);
const isDisabled = ref(false);
const tagRef = ref(null);

// 事件處理函數
const handleClose = () => {
  console.log('Tag closed');
};

// 控制函數
const toggleThemeColor = async () => {
  const availableColors = [
    'primary',
    'secondary',
    'neutral',
    'info',
    'success',
    'warning',
    'error',
  ];
  const currentIndex = availableColors.indexOf(themeColor.value);
  themeColor.value =
    availableColors[(currentIndex + 1) % availableColors.length];

  await nextTick();
  console.log(`顏色已切換到: ${themeColor.value}`);
};

const toggleVariant = () => {
  const variants = ['filled', 'ghost'];
  const currentIndex = variants.indexOf(variant.value);
  variant.value = variants[(currentIndex + 1) % variants.length];
};

const toggleClosable = () => {
  closable.value = !closable.value;
};

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
};

const toggleHref = () => {
  href.value = href.value ? '' : 'https://example.com';
};

const togglePrefix = () => {
  prefix.value = prefix.value ? '' : 'SvgSearch';
};

onMounted(() => {
  console.log('Tag component mounted');
  console.log('初始顏色:', themeColor.value);
});
</script>

<template>
  <div class="test-tag-container">
    <Tag
      ref="tagRef"
      :themeColor="themeColor"
      :variant="variant"
      :label="label"
      :href="href"
      :prefix="prefix"
      :closable="closable"
      :isDisabled="isDisabled"
      @onClose="handleClose"
    />

    <div class="tag-controls">
      <p>當前標籤設定:</p>
      <ul>
        <li>
          主題顏色: <strong>{{ themeColor }}</strong>
        </li>
        <li>
          樣式變體: <strong>{{ variant }}</strong>
        </li>
        <li>
          標籤文字: <strong>{{ label }}</strong>
        </li>
        <li>
          Href: <strong>{{ href || '無' }}</strong>
        </li>
        <li>
          Prefix: <strong>{{ prefix || '無' }}</strong>
        </li>
        <li>
          可關閉: <strong>{{ closable ? '是' : '否' }}</strong>
        </li>
        <li>
          狀態: <strong>{{ isDisabled ? '禁用' : '啟用' }}</strong>
        </li>
      </ul>

      <div class="control-buttons">
        <button @click="toggleThemeColor" class="control-button">
          切換顏色
        </button>
        <button @click="toggleVariant" class="control-button">切換變體</button>
        <button @click="toggleClosable" class="control-button">
          切換可關閉
        </button>
        <button @click="toggleDisabled" class="control-button">
          {{ isDisabled ? '啟用' : '禁用' }}
        </button>
        <button @click="toggleHref" class="control-button">切換 Href</button>
        <button @click="togglePrefix" class="control-button">
          切換 Prefix
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test-tag-container {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 600px;
  margin: 20px auto;
}

.tag-controls {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
}

.tag-controls p {
  margin-bottom: 10px;
  font-weight: 500;
}

.tag-controls ul {
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

.control-button:hover {
  background-color: #e5e5e5;
}
</style>

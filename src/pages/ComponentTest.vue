<script setup>
import TestButton from '../test/button/TestButton.vue';
import TestInput from '../test/input/TestInput.vue';
import TestRadio from '../test/radio/TestRadio.vue';
import TestCheckbox from '../test/checkbox/TestCheckbox.vue';
import TestTag from '../test/tag/TestTag.vue';
import TestTabs from '../test/tab/TestTabs.vue';
import TestTextarea from '../test/textarea/TestTextarea.vue';
import TestBadge from '../test/badge/TestBadge.vue';
import TestPagination from '../test/pagination/TestPagination.vue';
import TestStepper from '../test/stepper/TestStepper.vue';
import TestSlider from '../test/slider/TestSlider.vue';
import TestTable from '../test/table/TestTable.vue';
import TestAvatar from '../test/avatar/TestAvatar.vue';
import TestAccordion from '../test/accordion/TestAccordion.vue';
import TestBreadcrumb from '../test/breadcrumb/TestBreadcrumb.vue';
import TestDatePicker from '../test/datepicker/TestDatePicker.vue';
import TestDivider from '../test/divider/TestDivider.vue';
import TestImage from '../test/image/TestImage.vue';
import TestToggle from '../test/toggle/TestToggle.vue';
import TestSelect from '../test/select/TestSelect.vue';
import TestForm from '../test/form/TestForm.vue';

import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const showBackTop = ref(false);
const quickListScrollTop = ref(false);
const quickListScrollBottom = ref(false);
const quickListRef = ref(null);

function handleScroll() {
  // 取得第二個元件區塊的位置
  const secondSection = document.getElementById('section-input');
  if (!secondSection) return;
  const threshold = secondSection.getBoundingClientRect().top;
  showBackTop.value = window.scrollY > threshold;
}

function handleQuickListScroll(event) {
  const target = event.target;
  const scrollTop = target.scrollTop;
  const scrollHeight = target.scrollHeight;
  const clientHeight = target.clientHeight;

  // 檢查是否可以向上滾動（有上方內容）
  quickListScrollTop.value = scrollTop > 5;

  // 檢查是否可以向下滾動（有下方內容）
  quickListScrollBottom.value = scrollTop < scrollHeight - clientHeight - 5;
}

function checkInitialScrollState() {
  nextTick(() => {
    if (quickListRef.value) {
      const target = quickListRef.value;
      const scrollHeight = target.scrollHeight;
      const clientHeight = target.clientHeight;

      // 初始狀態：如果內容超出容器高度，顯示底部漸層
      quickListScrollBottom.value = scrollHeight > clientHeight;
      quickListScrollTop.value = false;
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  checkInitialScrollState();
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// ...existing code...

const sections = [
  { label: '按鈕 Button', id: 'section-button' },
  { label: '輸入框 Input', id: 'section-input' },
  { label: '單選框 Radio', id: 'section-radio' },
  { label: '多選框 Checkbox', id: 'section-checkbox' },
  { label: '標籤 Tag', id: 'section-tag' },
  { label: '文字區域 Textarea', id: 'section-textarea' },
  { label: '徽章 Badge', id: 'section-badge' },
  { label: '分頁 Pagination', id: 'section-pagination' },
  { label: '步進器 Stepper', id: 'section-stepper' },
  { label: '滑桿 Slider', id: 'section-slider' },
  { label: '表格 Table', id: 'section-table', isUpdated: true },
  { label: '頭像 Avatar', id: 'section-avatar', isUpdated: true },
  { label: '手風琴 Accordion', id: 'section-accordion', isUpdated: true },
  { label: '麵包屑 Breadcrumb', id: 'section-breadcrumb', isUpdated: true },
  { label: '日期選擇器 DatePicker', id: 'section-datepicker', isUpdated: true },
  { label: '分隔線 Divider', id: 'section-divider' },
  { label: '圖片 Image', id: 'section-image' },
  { label: '開關 Toggle', id: 'section-toggle' },
  { label: '選擇器 Select', id: 'section-select' },
  { label: '頁籤 Tabs', id: 'section-tabs' },
  { label: '表單 Form', id: 'section-form' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
</script>

<template>
  <div class="p-6 bg-gray-100">
    <transition name="fade">
      <button
        v-if="showBackTop"
        class="back-to-top-btn"
        @click="scrollToTop"
        aria-label="回到最上層"
      >
        ▲
      </button>
    </transition>

    <!-- 組件快速清單浮動側欄 -->
    <div class="quick-list">
      <!-- 上方漸層提示 -->
      <div
        v-if="quickListScrollTop"
        class="scroll-gradient scroll-gradient-top"
      ></div>

      <!-- 滾動內容區域 -->
      <div
        ref="quickListRef"
        class="quick-list-content"
        @scroll="handleQuickListScroll"
      >
        <ul>
          <li v-for="section in sections" :key="section.id">
            <button class="quick-list-btn" @click="scrollToSection(section.id)">
              <span class="btn-content">
                <span class="btn-text">{{ section.label }}</span>
                <span v-if="section.isNew" class="new-badge">NEW</span>
                <span v-if="section.isUpdated" class="updated-badge"
                  >UPDATE</span
                >
              </span>
            </button>
          </li>
        </ul>
      </div>

      <!-- 下方漸層提示 -->
      <div
        v-if="quickListScrollBottom"
        class="scroll-gradient scroll-gradient-bottom"
      ></div>
    </div>

    <div class="test-title flex justify-center mb-10">
      <h1
        class="gradient-text text-5xl font-extrabold drop-shadow-lg tracking-wide"
      >
        UI 元件測試
      </h1>
    </div>

    <!-- <div
      class="search-bar"
      style="
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
        justify-content: center;
      "
    >
      <input
        v-model="searchText"
        @keyup.enter="handleSearch"
        type="text"
        placeholder="搜尋元件名稱..."
        style="
          padding: 6px 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 220px;
        "
      />
      <button
        @click="handleSearch"
        style="
          padding: 6px 16px;
          border-radius: 4px;
          background: #2563eb;
          color: #fff;
          border: none;
          cursor: pointer;
        "
      >
        搜尋
      </button>
    </div> -->

    <div class="flex flex-col mb-10" id="section-button">
      <h2 class="section-title-aligned text-xl">按鈕 Button</h2>
      <TestButton />
    </div>
    <div class="flex flex-col mb-10" id="section-input">
      <h2 class="section-title-aligned text-xl">輸入框 Input</h2>
      <TestInput />
    </div>
    <div class="flex flex-col mb-10" id="section-radio">
      <h2 class="section-title-aligned text-xl">單選框 Radio</h2>
      <TestRadio />
    </div>
    <div class="flex flex-col mb-10" id="section-checkbox">
      <h2 class="section-title-aligned text-xl">多選框 Checkbox</h2>
      <TestCheckbox />
    </div>
    <div class="flex flex-col mb-10" id="section-tag">
      <h2 class="section-title-aligned text-xl">標籤 Tag</h2>
      <TestTag />
    </div>

    <div class="flex flex-col mb-10" id="section-textarea">
      <h2 class="section-title-aligned text-xl">文字區域 Textarea</h2>
      <TestTextarea />
    </div>
    <div class="flex flex-col mb-10" id="section-badge">
      <h2 class="section-title-aligned text-xl">徽章 Badge</h2>
      <TestBadge />
    </div>
    <div class="flex flex-col mb-10" id="section-pagination">
      <h2 class="section-title-aligned text-xl">分頁 Pagination</h2>
      <TestPagination />
    </div>
    <div class="flex flex-col mb-10" id="section-stepper">
      <h2 class="section-title-aligned text-xl">步進器 Stepper</h2>
      <TestStepper />
    </div>
    <div class="flex flex-col mb-10" id="section-slider">
      <h2 class="section-title-aligned text-xl">滑桿 Slider</h2>
      <TestSlider />
    </div>
    <div class="flex flex-col mb-10" id="section-table">
      <h2 class="section-title-aligned text-xl">表格 Table</h2>
      <TestTable />
    </div>
    <div class="flex flex-col mb-10" id="section-avatar">
      <h2 class="section-title-aligned text-xl">頭像 Avatar</h2>
      <TestAvatar />
    </div>
    <div class="flex flex-col mb-10" id="section-accordion">
      <h2 class="section-title-aligned text-xl">手風琴 Accordion</h2>
      <TestAccordion />
    </div>
    <div class="flex flex-col mb-10" id="section-breadcrumb">
      <h2 class="section-title-aligned text-xl">麵包屑 Breadcrumb</h2>
      <TestBreadcrumb />
    </div>
    <div class="flex flex-col mb-10" id="section-datepicker">
      <h2 class="section-title-aligned text-xl">日期選擇器 DatePicker</h2>
      <TestDatePicker />
    </div>
    <div class="flex flex-col mb-10" id="section-divider">
      <h2 class="section-title-aligned text-xl">分隔線 Divider</h2>
      <TestDivider />
    </div>
    <div class="flex flex-col mb-10" id="section-image">
      <h2 class="section-title-aligned text-xl">圖片 Image</h2>
      <TestImage />
    </div>
    <div class="flex flex-col mb-10" id="section-toggle">
      <h2 class="section-title-aligned text-xl">開關 Toggle</h2>
      <TestToggle />
    </div>
    <div class="flex flex-col mb-10" id="section-select">
      <h2 class="section-title-aligned text-xl">選擇器 Select</h2>
      <TestSelect />
    </div>
    <div class="flex flex-col mb-10" id="section-tabs">
      <h2 class="section-title-aligned text-xl">頁籤 Tabs</h2>
      <TestTabs />
    </div>
    <div class="flex flex-col mb-10" id="section-form">
      <h2 class="section-title-aligned text-xl">表單 Form</h2>
      <TestForm />
    </div>
  </div>
</template>

<style scoped>
.navigation-hint {
  text-align: center;
  margin-bottom: 32px;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f1f5f9;
  color: #2563eb;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: #e2e8f0;
  transform: translateX(-2px);
}

.back-to-top-btn {
  position: fixed;
  right: 80px;
  bottom: 32px;
  z-index: 100;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background 0.2s;
}
.back-to-top-btn:hover {
  background: #1e40af;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.quick-list {
  position: fixed;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  z-index: 99;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 140px;
  max-height: 70vh;
  overflow: hidden;
}

.quick-list-content {
  min-width: 250px;
  padding: 12px 8px;
  max-height: 50vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(37, 99, 235, 0.3) transparent;
}

.quick-list-content::-webkit-scrollbar {
  width: 3px;
}

.quick-list-content::-webkit-scrollbar-track {
  background: transparent;
}

.quick-list-content::-webkit-scrollbar-thumb {
  background: rgba(37, 99, 235, 0.3);
  border-radius: 2px;
}

.quick-list-content::-webkit-scrollbar-thumb:hover {
  background: rgba(37, 99, 235, 0.5);
}

.scroll-gradient {
  position: absolute;
  left: 0;
  right: 0;
  height: 24px;
  pointer-events: none;
  z-index: 1;
}

.scroll-gradient-top {
  top: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    transparent 100%
  );
  border-radius: 12px 12px 0 0;
}

.scroll-gradient-bottom {
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    transparent 100%
  );
  border-radius: 0 0 12px 12px;
}
.quick-list ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.quick-list-btn {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 15px;
  color: #2563eb;
  cursor: pointer;
  transition: background 0.2s;
}

.quick-list-btn:hover {
  background: #e0e7ff;
}

.btn-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.btn-text {
  flex: 1;
}

.new-badge {
  min-width: 56px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  color: white;
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 8px;
  box-shadow: 0 1px 3px rgba(255, 107, 107, 0.3);
  animation: pulse-new 2s ease-in-out infinite;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.updated-badge {
  min-width: 56px;
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: white;
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 8px;
  box-shadow: 0 1px 3px rgba(14, 165, 233, 0.18);
  animation: pulse-updated 2s ease-in-out infinite;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  text-align: center;
}

@keyframes pulse-updated {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 1px 3px rgba(14, 165, 233, 0.18);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 2px 6px rgba(14, 165, 233, 0.28);
  }
}

@keyframes pulse-new {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 1px 3px rgba(255, 107, 107, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 2px 6px rgba(255, 107, 107, 0.4);
  }
}

.test-title {
  padding-top: 12px;
  padding-bottom: 12px;
}
.test-title .icon {
  display: flex;
  align-items: center;
}
.gradient-text {
  background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 標題對齊樣式 */
.section-title-aligned {
  max-width: 600px;
  margin: 0 auto 10px auto;
  padding-left: 20px;
  font-weight: 600;
  color: #2563eb;
}

/* 響應式調整 */
@media (max-width: 640px) {
  .section-title-aligned {
    padding-left: 16px;
  }
}
</style>

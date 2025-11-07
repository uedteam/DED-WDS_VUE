<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '../../libs/src/index';

const route = useRoute();
const isTemplateDropdownOpen = ref(false);
const isChartsDropdownOpen = ref(false);

const toggleTemplateDropdown = () => {
  isTemplateDropdownOpen.value = !isTemplateDropdownOpen.value;
  isChartsDropdownOpen.value = false; // 關閉其他下拉選單
};

const toggleChartsDropdown = () => {
  isChartsDropdownOpen.value = !isChartsDropdownOpen.value;
  isTemplateDropdownOpen.value = false; // 關閉其他下拉選單
};

const closeTemplateDropdown = () => {
  isTemplateDropdownOpen.value = false;
};

const closeChartsDropdown = () => {
  isChartsDropdownOpen.value = false;
};

// 點擊外部區域關閉下拉選單
const handleClickOutside = (event) => {
  if (!event.target.closest('.nav-dropdown')) {
    isTemplateDropdownOpen.value = false;
    isChartsDropdownOpen.value = false;
  }
};

// 監聽全域點擊事件
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div id="app">
    <!-- 全域導航欄 -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <Icon
              name="SvgLogo"
              size="32"
              color="transparent"
              class="brand-icon"
            />
            <span class="brand-text">Web Design System</span>
          </router-link>
        </div>

        <div class="nav-menu">
          <router-link
            to="/components"
            class="nav-link"
            :class="{ 'router-link-active': route.name === 'components' }"
          >
            組件測試
          </router-link>

          <!-- Charts 下拉選單 -->
          <div class="nav-dropdown">
            <button
              class="nav-link dropdown-toggle"
              :class="{
                'router-link-active': [
                  'charts',
                  'chartsControl',
                  'chartSpacingTest',
                  'chartSpacingFixed',
                  'chartOverlapFull',
                ].includes(route.name),
              }"
              @click="toggleChartsDropdown"
            >
              <Icon
                name="SvgBarChart"
                size="20"
                color="currentColor"
                class="template-icon"
              />
              Charts
              <Icon
                name="SvgArrowDown"
                size="20"
                color="currentColor"
                class="dropdown-icon"
                :class="{ 'rotate-180': isChartsDropdownOpen }"
              />
            </button>
            <div
              class="dropdown-menu"
              :style="{ display: isChartsDropdownOpen ? 'block' : 'none' }"
            >
              <router-link
                to="/charts"
                class="dropdown-item"
                :class="{ active: route.name === 'charts' }"
                @click="closeChartsDropdown"
              >
                <Icon
                  name="SvgBarChart"
                  size="20"
                  color="transparent"
                  className="item-icon charts-item"
                />
                圖表展示
              </router-link>
              <router-link
                to="/charts-control"
                class="dropdown-item"
                :class="{ active: route.name === 'chartsControl' }"
                @click="closeChartsDropdown"
              >
                <Icon
                  name="SvgNotification"
                  size="20"
                  color="currentColor"
                  className="item-icon control-item"
                />
                圖表控制台
              </router-link>
              <router-link
                to="/chart-spacing-test"
                class="dropdown-item"
                :class="{ active: route.name === 'chartSpacingTest' }"
                @click="closeChartsDropdown"
              >
                <Icon
                  name="SvgMail"
                  size="20"
                  color="transparent"
                  className="item-icon spacing-item"
                />
                間距測試
              </router-link>
              <router-link
                to="/chart-spacing-fixed"
                class="dropdown-item"
                :class="{ active: route.name === 'chartSpacingFixed' }"
                @click="closeChartsDropdown"
              >
                <Icon
                  name="SvgCheck"
                  size="20"
                  color="currentColor"
                  className="item-icon fixed-item"
                />
                間距修復
              </router-link>
              <router-link
                to="/chart-overlap-full"
                class="dropdown-item"
                :class="{ active: route.name === 'chartOverlapFull' }"
                @click="closeChartsDropdown"
              >
                <Icon
                  name="SvgUser"
                  size="20"
                  color="transparent"
                  className="item-icon overlap-item"
                />
                重疊測試
              </router-link>
            </div>
          </div>

          <div class="nav-dropdown">
            <button
              class="nav-link dropdown-toggle"
              :class="{
                'router-link-active': [
                  'login',
                  'landing',
                  'cms',
                  'crm',
                ].includes(route.name),
              }"
              @click="toggleTemplateDropdown"
            >
              Template
              <Icon
                name="SvgArrowDown"
                size="20"
                color="currentColor"
                class="dropdown-icon"
                :class="{ 'rotate-180': isTemplateDropdownOpen }"
              />
            </button>
            <div
              class="dropdown-menu"
              :style="{ display: isTemplateDropdownOpen ? 'block' : 'none' }"
            >
              <router-link
                to="/login"
                class="dropdown-item"
                :class="{ active: route.name === 'login' }"
                @click="closeTemplateDropdown"
              >
                <Icon
                  name="SvgLogin"
                  size="20"
                  color="transparent"
                  className="item-icon login-item"
                />
                Login 模板
              </router-link>
              <router-link
                to="/landing"
                class="dropdown-item"
                :class="{ active: route.name === 'landing' }"
                @click="closeTemplateDropdown"
              >
                <Icon
                  name="SvgHome"
                  size="20"
                  color="currentColor"
                  className="item-icon landing-item"
                />
                Landing 模板
              </router-link>
              <!-- <router-link
                to="/cms"
                class="dropdown-item"
                :class="{ active: route.name === 'cms' }"
                @click="closeTemplateDropdown"
              >
                <Icon
                  name="SvgDocument"
                  size="20"
                  color="transparent"
                  className="item-icon cms-item"
                />
                CMS 模板
              </router-link> -->
              <router-link
                to="/crm"
                class="dropdown-item"
                :class="{ active: route.name === 'crm' }"
                @click="closeTemplateDropdown"
              >
                <Icon name="SvgUser" size="20" className="item-icon crm-item" />
                CRM 模板
              </router-link>
            </div>
          </div>
          <a
            href="https://github.com/uedteam/DED-WDS_VUE"
            target="_blank"
            class="nav-link external-link"
          >
            GitHub
            <Icon
              name="SvgExternalLink"
              size="16"
              color="transparent"
              class="item-icon"
            />
          </a>
        </div>
      </div>
    </nav>

    <!-- 路由視圖 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 導航欄樣式 */
.navbar {
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.nav-container {
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #1e293b;
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.brand-link:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}

.brand-icon {
  flex-shrink: 0;
}

.brand-text {
  background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: #64748b;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.nav-link:hover {
  color: #2563eb;
  background: #f1f5f9;
}

.nav-link.router-link-active {
  color: #2563eb;
  background: #dbeafe;
  font-weight: 600;
}

.external-link {
  color: #64748b !important;
}

.external-link:hover {
  color: #2563eb !important;
}

/* 下拉選單樣式 - 現代化設計 */
.nav-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  position: relative;
}

.dropdown-icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 2px;
  opacity: 0.7;
}

.dropdown-toggle:hover .dropdown-icon {
  opacity: 1;
}

.dropdown-icon.rotate-180 {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 180px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 12px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(37, 99, 235, 0.05);
  z-index: 1000;
  padding: 8px;
  backdrop-filter: blur(16px);
  transform: translateY(-10px) scale(0.95);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-menu[style*='block'] {
  transform: translateY(0) scale(1);
  opacity: 1;
  visibility: visible;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
}

.dropdown-item:last-child {
  margin-bottom: 0;
}

.dropdown-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(37, 99, 235, 0.08),
    transparent
  );
  transition: left 0.6s ease;
}

.dropdown-item:hover::before {
  left: 100%;
}

.dropdown-item:hover {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #2563eb;
  transform: translateX(2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12);
}

.dropdown-item.active {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  color: #1d4ed8;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
}

.dropdown-item.active::after {
  content: '';
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: #2563eb;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.4);
}

/* 進場動畫 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.dropdown-menu[style*='block'] {
  animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 無障礙設計 */
.dropdown-toggle:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  border-radius: 6px;
}

.dropdown-item:focus {
  outline: 2px solid #2563eb;
  outline-offset: -2px;
}

/* 暗色模式支援 */
@media (prefers-color-scheme: dark) {
  .dropdown-menu {
    background: rgba(17, 24, 39, 0.98);
    border-color: rgba(75, 85, 99, 0.6);
  }

  .dropdown-item {
    color: #d1d5db;
  }

  .dropdown-item:hover {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
    color: #60a5fa;
  }

  .dropdown-item.active {
    background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
    color: #dbeafe;
  }

  .dropdown-item.active::after {
    background: #60a5fa;
    box-shadow: 0 0 8px rgba(96, 165, 250, 0.4);
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 16px;
  }

  .nav-menu {
    gap: 16px;
  }

  .nav-link {
    padding: 6px 12px;
    font-size: 0.9rem;
  }

  .brand-text {
    font-size: 1.1rem;
  }

  .dropdown-menu {
    min-width: 160px;
    right: 0;
    left: auto;
  }

  .dropdown-item {
    padding: 10px 14px;
    font-size: 0.9rem;
  }
}

@media (max-width: 640px) {
  .nav-menu {
    gap: 8px;
  }

  .brand-text {
    display: none;
  }

  .dropdown-menu {
    min-width: 140px;
    font-size: 0.85rem;
    padding: 6px;
  }

  .dropdown-item {
    padding: 8px 12px;
  }
}

/* 減少動畫偏好設定 */
@media (prefers-reduced-motion: reduce) {
  .dropdown-menu,
  .dropdown-item,
  .dropdown-icon {
    transition: none !important;
    animation: none !important;
  }

  .dropdown-item::before {
    display: none;
  }
}

/* Template 圖標樣式 */
.template-icon {
  transition: all 0.3s ease;
}

.dropdown-toggle:hover .template-icon {
  color: #2563eb;
  transform: scale(1.1);
}

/* 項目圖標樣式 */
.item-icon {
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.dropdown-item:hover .item-icon {
  color: #2563eb;
  transform: scale(1.1) rotate(5deg);
}

.dropdown-item.active .item-icon {
  color: #1d4ed8;
  transform: scale(1.1);
}

/* 項目徽章樣式 */
.item-badge {
  margin-left: auto;
  padding: 2px 8px;
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
  color: #64748b;
  font-size: 11px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dropdown-item:hover .item-badge {
  background: linear-gradient(135deg, #bfdbfe, #93c5fd);
  color: #1d4ed8;
  transform: scale(1.05);
}

.dropdown-item.active .item-badge {
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  color: white;
  box-shadow: 0 2px 4px rgba(29, 78, 216, 0.3);
}

/* 特殊項目樣式 */
.charts-item:hover {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  border-left: 3px solid #3b82f6;
}

.control-item:hover {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  border-left: 3px solid #8b5cf6;
}

.spacing-item:hover {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border-left: 3px solid #10b981;
}

.fixed-item:hover {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-left: 3px solid #f59e0b;
}

.overlap-item:hover {
  background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
  border-left: 3px solid #ef4444;
}

.charts-item.active {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-left: 3px solid #1d4ed8;
}

.control-item.active {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border-left: 3px solid #6d28d9;
}

.spacing-item.active {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-left: 3px solid #047857;
}

.fixed-item.active {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border-left: 3px solid #b45309;
}

.overlap-item.active {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  border-left: 3px solid #b91c1c;
}

.login-item:hover {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-left: 3px solid #f59e0b;
}

.landing-item:hover {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-left: 3px solid #10b981;
}

.cms-item:hover {
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  border-left: 3px solid #6366f1;
}

.crm-item:hover {
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
  border-left: 3px solid #ec4899;
}

.login-item.active {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-left: 3px solid #d97706;
}

.landing-item.active {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-left: 3px solid #047857;
}

.cms-item.active {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  border-left: 3px solid #4338ca;
}

.crm-item.active {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  border-left: 3px solid #be185d;
}

/* 下拉選單開啟動畫 */
@keyframes dropdownSlideIn {
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.dropdown-menu[style*='block'] {
  animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 項目入場動畫 */
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.dropdown-menu[style*='block'] .dropdown-item {
  animation: slideInFromLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.dropdown-menu[style*='block'] .dropdown-item:nth-child(1) {
  animation-delay: 0.1s;
}

.dropdown-menu[style*='block'] .dropdown-item:nth-child(2) {
  animation-delay: 0.2s;
}

.dropdown-menu[style*='block'] .dropdown-item:nth-child(3) {
  animation-delay: 0.3s;
}

.dropdown-menu[style*='block'] .dropdown-item:nth-child(4) {
  animation-delay: 0.4s;
}

.main-content {
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 16px;
  }

  .nav-menu {
    gap: 16px;
  }

  .nav-link {
    padding: 6px 12px;
    font-size: 0.9rem;
  }

  .brand-text {
    font-size: 1.1rem;
  }

  .dropdown-menu {
    min-width: 160px;
    right: 0;
    left: auto;
  }

  .dropdown-item {
    padding: 10px 14px;
    font-size: 0.9rem;
  }

  .item-badge {
    font-size: 10px;
    padding: 1px 6px;
  }

  .template-icon {
    width: 14px;
    height: 14px;
  }

  .item-icon {
    width: 14px;
    height: 14px;
  }
}

@media (max-width: 640px) {
  .nav-menu {
    gap: 8px;
  }

  .brand-text {
    display: none;
  }

  .dropdown-menu {
    min-width: 140px;
    font-size: 0.85rem;
  }

  .dropdown-item {
    padding: 8px 12px;
  }

  .item-badge {
    display: none;
  }

  .dropdown-toggle {
    gap: 4px;
  }

  .template-icon {
    width: 12px;
    height: 12px;
  }

  .dropdown-icon {
    width: 12px;
    height: 12px;
  }
}

/* 暗色模式支援 */
@media (prefers-color-scheme: dark) {
  .dropdown-menu {
    background: rgba(31, 41, 55, 0.95);
    border-color: rgba(75, 85, 99, 0.6);
  }

  .dropdown-item {
    color: #d1d5db;
  }

  .dropdown-item:hover {
    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
    color: #60a5fa;
  }

  .dropdown-item.active {
    background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
    color: #dbeafe;
  }

  .item-badge {
    background: linear-gradient(135deg, #4b5563, #6b7280);
    color: #d1d5db;
  }

  .dropdown-item:hover .item-badge {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: white;
  }
}

/* 高對比度模式支援 */
@media (prefers-contrast: high) {
  .dropdown-menu {
    border-width: 2px;
    border-color: #000;
  }

  .dropdown-item {
    border: 1px solid transparent;
  }

  .dropdown-item:hover {
    border-color: #2563eb;
  }

  .dropdown-item.active {
    border-color: #1d4ed8;
    border-width: 2px;
  }
}

/* 減少動畫模式支援 */
@media (prefers-reduced-motion: reduce) {
  .dropdown-icon,
  .template-icon,
  .item-icon,
  .item-badge,
  .dropdown-item,
  .dropdown-menu {
    transition: none !important;
    animation: none !important;
  }
}

/* 聚焦樣式無障礙支援 */
.dropdown-toggle:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.dropdown-item:focus {
  outline: 2px solid #2563eb;
  outline-offset: -2px;
}

/* 添加微妙的脈衝效果 */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.dropdown-toggle.router-link-active .template-icon {
  animation: pulse 2s infinite;
}
</style>

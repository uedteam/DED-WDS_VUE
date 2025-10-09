<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section
      class="hero-section bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center"
    >
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div class="hero-content space-y-8">
            <div class="space-y-4">
              <Title
                :level="0"
                class="flex text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                打造
                <Title
                  :level="0"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  優雅
                </Title>
                的設計體驗
              </Title>
              <p class="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Web Design System 提供一致、高效且美觀的設計組件，
                幫助您快速構建現代化的用戶界面。
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <Button
                size="large"
                @click="navigateToComponents"
                className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                開始探索組件
              </Button>
              <Button
                size="large"
                @click="scrollToFeatures"
                className="btn-secondary border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all w-full sm:w-auto"
              >
                了解更多
              </Button>
            </div>

            <!-- Stats -->
            <div
              class="flex flex-wrap gap-8 pt-8 justify-evenly sm:justify-start"
            >
              <div class="stat-item">
                <div class="text-3xl font-bold text-blue-600">30+</div>
                <div class="text-gray-600">設計組件</div>
              </div>
              <div class="stat-item">
                <div class="text-3xl font-bold text-blue-600">Vue 3</div>
                <div class="text-gray-600">現代框架</div>
              </div>
              <div class="stat-item">
                <div class="text-3xl font-bold text-blue-600">100%</div>
                <div class="text-gray-600">響應式設計</div>
              </div>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="hero-visual">
            <div class="relative">
              <!-- 3D Card Stack Effect -->
              <div class="card-stack space-y-4">
                <div
                  class="design-card bg-white rounded-2xl shadow-xl p-8 transform rotate-3 hover:rotate-1 transition-transform"
                >
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div class="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div class="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="space-y-3">
                    <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div class="h-4 bg-blue-200 rounded w-full"></div>
                    <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>

                <div
                  class="design-card bg-white rounded-2xl shadow-xl p-8 transform -rotate-2 hover:rotate-0 transition-transform"
                >
                  <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-2 space-y-2">
                      <div class="h-3 bg-purple-200 rounded"></div>
                      <div class="h-3 bg-gray-200 rounded"></div>
                    </div>
                    <div
                      class="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Floating Elements -->
              <div
                class="floating-elements absolute inset-0 pointer-events-none"
              >
                <div
                  class="absolute top-0 left-0 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"
                ></div>
                <div
                  class="absolute bottom-0 right-0 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse"
                ></div>
                <div
                  class="absolute top-1/2 right-10 w-8 h-8 bg-pink-200 rounded-full opacity-25 animate-ping"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 section-header">
          <Title
            className="block text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            為什麼選擇 DED Design System？
          </Title>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            我們致力於提供最佳的開發體驗，讓您專注於創造優秀的產品
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div
            class="feature-card feature-card-1 group bg-gray-50 hover:bg-blue-50 p-8 rounded-2xl transition-all hover:shadow-lg"
          >
            <div
              class="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mb-6 transition-colors"
            >
              <Icon
                name="SvgLightning"
                size="24"
                color="transparent"
                className="w-6 h-6 text-blue-600"
              />
            </div>
            <Title className="text-xl font-semibold text-gray-900 mb-3"
              >快速開發</Title
            >
            <p class="text-gray-600">
              預先構建的組件讓您快速搭建界面，大幅縮短開發時間
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="feature-card feature-card-2 group bg-gray-50 hover:bg-green-50 p-8 rounded-2xl transition-all hover:shadow-lg"
          >
            <div
              class="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center mb-6 transition-colors"
            >
              <Icon
                name="SvgCheckCircle"
                size="24"
                color="transparent"
                className="w-6 h-6 text-green-600"
              />
            </div>
            <Title className="text-xl font-semibold text-gray-900 mb-3"
              >一致性設計</Title
            >
            <p class="text-gray-600">
              統一的設計語言確保整個應用程式的視覺一致性
            </p>
          </div>

          <!-- Feature 3 -->
          <div
            class="feature-card feature-card-3 group bg-gray-50 hover:bg-purple-50 p-8 rounded-2xl transition-all hover:shadow-lg"
          >
            <div
              class="w-12 h-12 bg-purple-100 group-hover:bg-purple-200 rounded-xl flex items-center justify-center mb-6 transition-colors"
            >
              <Icon
                name="SvgMobile"
                size="24"
                color="transparent"
                className="w-6 h-6 text-purple-600"
              />
            </div>
            <Title className="text-xl font-semibold text-gray-900 mb-3"
              >響應式設計</Title
            >
            <p class="text-gray-600">所有組件都完美適配各種設備和螢幕尺寸</p>
          </div>

          <!-- Feature 4 -->
          <div
            class="feature-card feature-card-4 group bg-gray-50 hover:bg-orange-50 p-8 rounded-2xl transition-all hover:shadow-lg"
          >
            <div
              class="w-12 h-12 bg-orange-100 group-hover:bg-orange-200 rounded-xl flex items-center justify-center mb-6 transition-colors"
            >
              <Icon
                name="SvgBottle"
                size="24"
                color="transparent"
                className="w-6 h-6 text-orange-600"
              />
            </div>
            <Title className="text-xl font-semibold text-gray-900 mb-3">
              TypeScript 支援
            </Title>
            <p class="text-gray-600">
              完整的 TypeScript 類型定義，提供更好的開發體驗
            </p>
          </div>

          <!-- Feature 5 -->
          <div
            class="feature-card feature-card-5 group bg-gray-50 hover:bg-red-50 p-8 rounded-2xl transition-all hover:shadow-lg"
          >
            <div
              class="w-12 h-12 bg-red-100 group-hover:bg-red-200 rounded-xl flex items-center justify-center mb-6 transition-colors"
            >
              <Icon
                name="SvgHeart"
                size="24"
                color="transparent"
                className="w-6 h-6 text-red-600"
              />
            </div>
            <Title className="text-xl font-semibold text-gray-900 mb-3"
              >開源友善</Title
            >
            <p class="text-gray-600">MIT 授權，社群驅動，持續更新和改進</p>
          </div>

          <!-- Feature 6 -->
          <div
            class="feature-card feature-card-6 group bg-gray-50 hover:bg-teal-50 p-8 rounded-2xl transition-all hover:shadow-lg"
          >
            <div
              class="w-12 h-12 bg-teal-100 group-hover:bg-teal-200 rounded-xl flex items-center justify-center mb-6 transition-colors"
            >
              <div class="icon">
                <Icon
                  name="SvgDocument"
                  size="24"
                  color="transparent"
                  className="w-6 h-6 text-teal-600"
                />
              </div>
            </div>
            <Title className="text-xl font-semibold text-gray-900 mb-3"
              >完整文檔</Title
            >
            <p class="text-gray-600">詳細的使用指南和 API 文檔，讓您快速上手</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Components Preview Section -->
    <section class="components-preview py-20 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16 components-section-header">
          <Title
            className="block text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            豐富的組件庫
          </Title>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            從基礎的按鈕到複雜的數據表格，我們提供全面的 UI 組件
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Component Preview Cards -->
          <div
            class="component-preview-card component-card-1 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Title :level="5" className="font-semibold text-gray-900 mb-3"
              >按鈕組件</Title
            >
            <div class="space-y-2">
              <Button
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm"
              >
                Primary Button
              </Button>
              <Button
                className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm"
              >
                Secondary Button
              </Button>
            </div>
          </div>

          <div
            class="component-preview-card component-card-2 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Title :level="5" className="font-semibold text-gray-900 mb-3"
              >輸入框</Title
            >
            <div class="space-y-2">
              <Input size="small" type="text" placeholder="用戶名稱" />
              <Input size="small" type="password" placeholder="密碼" />
            </div>
          </div>

          <div
            class="component-preview-card component-card-3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Title :level="5" className="font-semibold text-gray-900 mb-3"
              >卡片組件</Title
            >
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="w-full h-16 bg-gray-100 rounded mb-2"></div>
              <div class="h-3 bg-gray-200 rounded mb-1"></div>
              <div class="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>

          <div
            class="component-preview-card component-card-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Title :level="5" className="font-semibold text-gray-900 mb-3"
              >徽章組件</Title
            >
            <div class="flex flex-wrap gap-2">
              <Tag
                label="Primary"
                :closable="false"
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              ></Tag>
              <Tag
                label="Success"
                :closable="false"
                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
              ></Tag>
              <Tag
                label="Error"
                :closable="false"
                className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded"
              ></Tag>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 components-cta-section">
          <Button
            size="large"
            @click="navigateToComponents"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            查看所有組件
          </Button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="cta-section py-20 bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div class="container mx-auto px-6 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <Title
            className="block text-3xl md:text-4xl font-bold text-white mb-6"
          >
            開始使用 Web Design System
          </Title>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            立即開始構建美觀、一致且高效的用戶界面。
            加入我們的社群，一起創造更好的設計體驗。
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="large"
              @click="navigateToComponents"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              開始使用
            </Button>
            <Button
              href="https://github.com/uedteam/DED-WDS_VUE"
              target="_blank"
              @click="
                navigateExternalLink('https://github.com/uedteam/DED-WDS_VUE')
              "
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center gap-2 w-full sm:w-auto"
            >
              <Icon name="SvgGithub" size="20" color="currentColor" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <Icon
                name="SvgPalette"
                size="32"
                color="white"
                className="w-8 h-8"
              />
              <span class="text-xl font-bold">Web Design System</span>
            </div>
            <p class="text-gray-300 mb-4 max-w-md">
              打造優雅且一致的用戶界面，提升開發效率和用戶體驗。
            </p>
            <div class="text-sm text-gray-400">
              © 2024 Web Design System. MIT License.
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-white mb-4">快速連結</h4>
            <ul class="space-y-2 text-gray-300">
              <li>
                <router-link
                  to="/components"
                  class="hover:text-white transition-colors"
                  >組件庫</router-link
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">文檔</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">範例</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">教學</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-white mb-4">社群</h4>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://github.com/uedteam/DED-WDS_VUE"
                  target="_blank"
                  class="hover:text-white transition-colors"
                  >GitHub</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >問題回報</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >功能建議</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >討論區</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';
import { Title, Button, Input, Tag, Icon } from '../../libs/src/index';

const router = useRouter();

// Navigation methods
const navigateToComponents = () => {
  router.push('/components');
};

const scrollToFeatures = () => {
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const navigateExternalLink = (url: string) => {
  window.open(url, '_blank');
};

// Intersection Observer for scroll-triggered animations
let observer: IntersectionObserver | null = null;

onMounted(() => {
  // 設置 Intersection Observer 來觸發卡片動畫
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // 當元素進入視窗 50px 時觸發
    threshold: 0.2, // 當 20% 的元素可見時觸發
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 添加一個小延遲確保動畫順暢
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, 100);
      }
    });
  }, observerOptions);

  // 等待 DOM 渲染完成後再觀察元素
  setTimeout(() => {
    // 觀察標題區塊
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
      observer?.observe(sectionHeader);
    }

    // 觀察組件庫標題區塊
    const componentsSectionHeader = document.querySelector(
      '.components-section-header',
    );
    if (componentsSectionHeader) {
      observer?.observe(componentsSectionHeader);
    }

    // 觀察所有 feature card
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      observer?.observe(card);
    });

    // 觀察所有 component preview card
    const componentCards = document.querySelectorAll('.component-preview-card');
    componentCards.forEach((card) => {
      observer?.observe(card);
    });

    // 觀察組件 CTA 區塊
    const componentsCta = document.querySelector('.components-cta-section');
    if (componentsCta) {
      observer?.observe(componentsCta);
    }
  }, 100);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
/* Animation classes */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom animations */
.hero-content {
  animation: fadeInUp 1s ease-out;
}

.hero-visual {
  animation: fadeInUp 1s ease-out 0.3s both;
}

.floating-elements > div {
  animation: float 3s ease-in-out infinite;
}

.floating-elements > div:nth-child(2) {
  animation-delay: 1s;
}

.floating-elements > div:nth-child(3) {
  animation-delay: 2s;
}

/* Card hover effects */
.design-card {
  transition: all 0.3s ease;
}

.design-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Section header animation */
.section-header {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: opacity, transform;
}

.section-header.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Feature cards */
.feature-card {
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(60px) scale(0.95);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: opacity, transform;
}

.feature-card.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.feature-card-1.animate-in {
  transition-delay: 0.1s;
}

.feature-card-2.animate-in {
  transition-delay: 0.25s;
}

.feature-card-3.animate-in {
  transition-delay: 0.4s;
}

.feature-card-4.animate-in {
  transition-delay: 0.55s;
}

.feature-card-5.animate-in {
  transition-delay: 0.7s;
}

.feature-card-6.animate-in {
  transition-delay: 0.85s;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.feature-card:hover::before {
  left: 100%;
}

/* Components section header animation */
.components-section-header {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: opacity, transform;
}

.components-section-header.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Component preview cards */
.component-preview-card {
  transition: all 0.3s ease;
  border: 1px solid transparent;
  opacity: 0;
  transform: translateY(60px) scale(0.95);
  will-change: opacity, transform;
}

.component-preview-card.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.component-card-1.animate-in {
  transition-delay: 0.1s;
}

.component-card-2.animate-in {
  transition-delay: 0.25s;
}

.component-card-3.animate-in {
  transition-delay: 0.4s;
}

.component-card-4.animate-in {
  transition-delay: 0.55s;
}

.component-preview-card:hover {
  transform: translateY(-5px);
  border-color: rgba(59, 130, 246, 0.2);
}

/* Components CTA animation */
.components-cta-section {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: opacity, transform;
}

.components-cta-section.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.7s;
}

/* Responsive design improvements */
@media (max-width: 768px) {
  .hero-section {
    min-height: 90vh;
  }

  .hero-content h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .stats {
    flex-direction: column;
    gap: 1rem;
  }

  .card-stack {
    margin-top: 2rem;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Button hover effects */
.btn-primary,
.btn-secondary {
  position: relative;
  overflow: hidden;
}

.btn-primary::before,
.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn-primary:hover::before,
.btn-secondary:hover::before {
  left: 100%;
}
</style>

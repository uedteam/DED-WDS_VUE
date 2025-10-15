<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-icon">
          <svg width="80" height="80" viewBox="0 0 48 48" fill="none">
            <rect
              x="6"
              y="6"
              width="14"
              height="14"
              rx="4"
              fill="url(#grad1)"
              stroke="#2563eb"
              stroke-width="2"
            />
            <rect
              x="28"
              y="6"
              width="14"
              height="14"
              rx="4"
              fill="url(#grad2)"
              stroke="#2563eb"
              stroke-width="2"
            />
            <rect
              x="6"
              y="28"
              width="14"
              height="14"
              rx="4"
              fill="url(#grad3)"
              stroke="#2563eb"
              stroke-width="2"
            />
            <rect
              x="28"
              y="28"
              width="14"
              height="14"
              rx="4"
              fill="url(#grad4)"
              stroke="#2563eb"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="grad1"
                x1="6"
                y1="6"
                x2="20"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2563eb" />
                <stop offset="1" stop-color="#60a5fa" />
              </linearGradient>
              <linearGradient
                id="grad2"
                x1="28"
                y1="6"
                x2="42"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#60a5fa" />
                <stop offset="1" stop-color="#2563eb" />
              </linearGradient>
              <linearGradient
                id="grad3"
                x1="6"
                y1="28"
                x2="20"
                y2="42"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#38bdf8" />
                <stop offset="1" stop-color="#2563eb" />
              </linearGradient>
              <linearGradient
                id="grad4"
                x1="28"
                y1="28"
                x2="42"
                y2="42"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2563eb" />
                <stop offset="1" stop-color="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
          <h1 class="hero-title">Web Design System</h1>
        </div>

        <p class="hero-subtitle">基於 Vue 3 的現代化設計系統</p>
        <p class="hero-description">
          提供一致、美觀且易於使用的 UI 組件庫，幫助您快速構建優秀的用戶界面。
        </p>

        <div class="hero-actions">
          <router-link to="/components" class="btn btn-primary">
            查看組件
          </router-link>
          <router-link to="/charts-control" class="btn btn-primary">
            圖表控制台
          </router-link>
          <router-link to="/charts" class="btn btn-secondary">
            圖表展示
          </router-link>
          <router-link to="/crm" class="btn btn-secondary">
            CRM 系統
          </router-link>
          <router-link to="/cms" class="btn btn-secondary">
            CMS 系統
          </router-link>
          <router-link to="/landing" class="btn btn-secondary">
            Landing Page
          </router-link>
          <a
            href="https://github.com/uedteam/DED-WDS_VUE"
            target="_blank"
            class="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">核心特色</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"></polygon>
              </svg>
            </div>
            <h3>快速開發</h3>
            <p>預製的高品質組件，加速您的開發流程</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>響應式設計</h3>
            <p>所有組件都支援多種螢幕尺寸和設備</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
            </div>
            <h3>高品質</h3>
            <p>經過精心設計和測試的穩定組件</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22,4 12,14.01 9,11.01"></polyline>
              </svg>
            </div>
            <h3>TypeScript 支援</h3>
            <p>完整的 TypeScript 類型定義，提供更好的開發體驗</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start Section -->
    <section class="quick-start-section">
      <div class="container">
        <h2 class="section-title">快速開始</h2>
        <div class="code-example">
          <div class="code-header">
            <span class="code-title">安裝</span>
          </div>
          <pre class="code-block"><code>npm install @ded-wds-vue/ui</code></pre>
        </div>

        <div class="code-example">
          <div class="code-header">
            <span class="code-title">使用</span>
          </div>
          <pre
            class="code-block"
          ><code>import { Button } from '@ded-wds-vue/ui'</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-icon {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(45deg, #ffffff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 16px;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.125rem;
  margin-bottom: 48px;
  opacity: 0.8;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-secondary:hover {
  background: white;
  color: #2563eb;
  transform: translateY(-2px);
}

/* Features Section */
.features-section {
  padding: 100px 0;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 64px;
  color: #1e293b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.feature-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e293b;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
}

/* Quick Start Section */
.quick-start-section {
  padding: 100px 0;
  background: white;
}

.code-example {
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.code-header {
  background: #374151;
  padding: 12px 20px;
  color: white;
  font-weight: 600;
}

.code-block {
  background: #1f2937;
  color: #f9fafb;
  padding: 20px;
  margin: 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.code-block code {
  color: #10b981;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>

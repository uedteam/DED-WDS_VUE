<template>
  <div class="corporate-portfolio-page">
    <!-- Hero Section -->
    <section
      class="hero-section bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen flex items-center relative overflow-hidden"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid grid-cols-12 gap-4 h-full">
          <div
            v-for="i in 144"
            :key="i"
            class="bg-white/5 rounded-lg animate-pulse"
            :style="{ animationDelay: `${Math.random() * 3}s` }"
          ></div>
        </div>
      </div>

      <div class="container mx-auto px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Hero Content -->
          <div class="hero-content space-y-8 text-white">
            <div class="space-y-6">
              <div class="space-y-2">
                <p class="text-blue-300 text-lg font-medium tracking-wide">
                  Design Innovation Hub
                </p>
                <Title
                  :level="0"
                  class="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight"
                >
                  友達設計中心
                </Title>
                <Title
                  :level="0"
                  class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight"
                >
                  AUO Design Center
                </Title>
              </div>

              <div class="space-y-4">
                <Title
                  :level="2"
                  class="text-2xl md:text-3xl font-light text-blue-100 leading-relaxed"
                >
                  創意設計 & 使用者體驗創新引擎
                </Title>
                <p class="text-xl text-gray-300 leading-relaxed max-w-lg">
                  我們是友達光電的創新設計引擎，專注於創造以人為本的設計體驗，
                  結合前瞻視覺技術與創意設計思維，為未來顯示應用注入靈魂。
                </p>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <Button
                variant="filled"
                theme-color="primary"
                size="large"
                @click="scrollToServices"
                class="portfolio-cta-primary"
              >
                探索設計作品
              </Button>
              <Button
                variant="outlined"
                theme-color="primary"
                size="large"
                @click="scrollToContact"
                class="portfolio-cta-secondary border-white text-white hover:bg-white hover:text-gray-900"
              >
                設計合作
              </Button>
            </div>

            <!-- Company Stats -->
            <div class="flex gap-8 pt-4">
              <div
                v-for="stat in companyStats"
                :key="stat.label"
                class="stat-item text-center"
              >
                <div class="text-3xl font-bold text-blue-300">
                  {{ stat.value }}
                </div>
                <div class="text-gray-400 text-sm">{{ stat.label }}</div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="flex gap-6 pt-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="social-link text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                :aria-label="social.name"
              >
                <Icon :name="social.icon" size="24" />
              </a>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="hero-visual flex justify-center lg:justify-end relative">
            <div class="relative w-full max-w-lg h-96 lg:h-[500px]">
              <!-- Background Decorative Elements -->
              <div class="absolute inset-0 pointer-events-none">
                <!-- Large gradient circles -->
                <div
                  class="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse"
                ></div>
                <div
                  class="absolute bottom-16 left-8 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-lg animate-pulse"
                  style="animation-delay: 1s"
                ></div>
                <div
                  class="absolute top-1/2 right-4 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-md animate-pulse"
                  style="animation-delay: 2s"
                ></div>

                <!-- Geometric shapes -->
                <div
                  class="absolute top-12 left-12 w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                  style="animation-delay: 0.5s"
                ></div>
                <div
                  class="absolute bottom-24 right-16 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                  style="animation-delay: 1.5s"
                ></div>
                <div
                  class="absolute top-32 right-24 w-4 h-4 bg-purple-400 rotate-45 animate-spin"
                  style="animation-duration: 8s; animation-delay: 1s"
                ></div>
              </div>

              <!-- Main Corporate Logo Container -->
              <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div class="relative">
                  <!-- Dynamic Orbital Rings for Design Center -->
                  <div
                    class="design-orbital-container relative w-48 h-48 lg:w-56 lg:h-56"
                  >
                    <!-- Outer Orbital Ring -->
                    <div
                      class="orbital-ring orbital-ring-1 absolute inset-0 rounded-full"
                    >
                      <div class="orbital-dot orbital-dot-1"></div>
                      <div class="orbital-dot orbital-dot-2"></div>
                      <div class="orbital-dot orbital-dot-3"></div>
                    </div>

                    <!-- Middle Orbital Ring -->
                    <div
                      class="orbital-ring orbital-ring-2 absolute inset-2 rounded-full"
                    >
                      <div class="orbital-dot orbital-dot-4"></div>
                      <div class="orbital-dot orbital-dot-5"></div>
                    </div>

                    <!-- Inner Orbital Ring -->
                    <div
                      class="orbital-ring orbital-ring-3 absolute inset-4 rounded-full"
                    >
                      <div class="orbital-dot orbital-dot-6"></div>
                    </div>

                    <!-- Glowing Rings -->
                    <div
                      class="glow-ring glow-ring-1 absolute inset-0 rounded-full"
                    ></div>
                    <div
                      class="glow-ring glow-ring-2 absolute inset-1 rounded-full"
                    ></div>
                    <div
                      class="glow-ring glow-ring-3 absolute inset-2 rounded-full"
                    ></div>

                    <!-- Design Center Hero Image with custom size -->
                    <div class="relative w-full h-full z-10 group">
                      <!-- Design Center Hero Image -->
                      <div
                        class="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl transform hover:scale-105 transition-all duration-500 relative z-20 group-hover:shadow-2xl"
                      >
                        <!-- Design workspace image -->
                        <img
                          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop&crop=center"
                          alt="AUO Design Center - Corporate Design Office"
                          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <!-- Overlay with design center branding -->
                        <div
                          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-full"
                        >
                          <div
                            class="absolute bottom-4 left-4 right-4 text-white"
                          >
                            <div class="flex items-center gap-3 mb-2">
                              <div
                                class="p-2 bg-white/20 backdrop-blur-sm rounded-lg"
                              >
                                <Icon
                                  name="SvgPalette"
                                  size="20"
                                  color="white"
                                />
                              </div>
                              <div>
                                <div class="text-sm font-bold tracking-wide">
                                  AUO
                                </div>
                                <div class="text-xs opacity-90 font-medium">
                                  Design
                                </div>
                              </div>
                            </div>
                            <div class="text-xs opacity-80 italic text-center">
                              "Creative Hub"
                            </div>
                          </div>

                          <!-- Floating design elements overlay -->
                          <div class="absolute top-4 right-4">
                            <div class="flex gap-1">
                              <div
                                class="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                              ></div>
                              <div
                                class="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
                                style="animation-delay: 0.5s"
                              ></div>
                              <div
                                class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
                                style="animation-delay: 1s"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Pulse Effect -->
                      <div
                        class="pulse-ring absolute inset-0 rounded-full border-2 border-blue-400 opacity-0"
                      ></div>
                      <div
                        class="pulse-ring pulse-ring-delayed absolute inset-0 rounded-full border-2 border-purple-400 opacity-0"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Enhanced Floating Tech Stack -->
              <div
                class="floating-tech-stack absolute inset-0 pointer-events-none"
              >
                <div
                  v-for="(tech, index) in enhancedTechStack"
                  :key="tech.name"
                  class="floating-tech absolute bg-white/15 backdrop-blur-md rounded-full px-3 py-1 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  :style="tech.position"
                  :class="[
                    `animate-float-${(index % 6) + 1}`,
                    index % 3 === 0 ? 'z-30' : 'z-10',
                  ]"
                >
                  <div class="flex items-center gap-2">
                    <Icon :name="tech.icon" size="12" color="white" />
                    <span
                      class="text-white text-xs font-medium hidden sm:block"
                      >{{ tech.name }}</span
                    >
                  </div>
                </div>
              </div>

              <!-- Design Center Status indicators -->
              <div class="absolute top-4 right-4 z-30">
                <div class="flex flex-col gap-2">
                  <div
                    class="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-300/30"
                  >
                    <Icon
                      name="SvgPalette"
                      size="12"
                      color="rgb(147 197 253)"
                    />
                    <span class="text-blue-100 text-xs font-medium"
                      >設計驅動</span
                    >
                  </div>
                  <div
                    class="flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-300/30"
                  >
                    <Icon
                      name="SvgLightning"
                      size="12"
                      color="rgb(196 181 253)"
                    />
                    <span class="text-purple-100 text-xs font-medium"
                      >創新引擎</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio-section py-20 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex flex-col justify-center items-center mb-16">
          <Title class="text-4xl font-bold text-gray-900 mb-6">
            精選設計案例
          </Title>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            展示我們為客戶創造的創新設計解決方案，每個專案都體現了我們對設計品質的堅持與創新思維。
          </p>

          <!-- Portfolio Filter -->
          <div class="portfolio-filter flex flex-wrap justify-center gap-3">
            <Button
              v-for="filter in portfolioFilters"
              :key="filter.value"
              :variant="
                selectedPortfolioFilter === filter.value ? 'filled' : 'outlined'
              "
              theme-color="primary"
              size="small"
              @click="handlePortfolioFilterChange(filter.value)"
              class="filter-btn"
            >
              {{ filter.label }}
            </Button>
          </div>
        </div>

        <!-- Portfolio Grid -->
        <div class="portfolio-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            v-for="project in filteredPortfolioProjects"
            :key="project.id"
            class="portfolio-card group bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0"
          >
            <template #cardHeader>
              <div class="portfolio-image relative overflow-hidden">
                <Image
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  class="portfolio-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div
                    class="absolute bottom-4 left-4 right-4 flex justify-start"
                  >
                    <Button
                      variant="filled"
                      theme-color="primary"
                      size="small"
                      @click="viewPortfolioProject(project.url)"
                      class="view-portfolio-btn px-4"
                    >
                      查看詳情
                    </Button>
                  </div>
                </div>
                <div class="portfolio-category absolute top-4 left-4">
                  <span
                    class="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {{ project.category }}
                  </span>
                </div>
              </div>
            </template>

            <div class="p-6 space-y-4">
              <div>
                <Title
                  :level="3"
                  class="text-lg font-semibold text-gray-900 mb-2"
                >
                  {{ project.title }}
                </Title>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ project.description }}
                </p>
              </div>

              <!-- Project Details -->
              <div class="project-details space-y-2">
                <div class="client-info flex items-center gap-2">
                  <Icon name="SvgUser" size="14" class="text-blue-500" />
                  <span class="text-xs text-gray-500"
                    >客戶：{{ project.client }}</span
                  >
                </div>
                <div class="year-info flex items-center gap-2">
                  <Icon name="SvgCalendar" size="14" class="text-blue-500" />
                  <span class="text-xs text-gray-500"
                    >年份：{{ project.year }}</span
                  >
                </div>
              </div>

              <!-- Project Technologies -->
              <div class="project-technologies flex flex-wrap gap-2">
                <Tag
                  v-for="tech in project.technologies"
                  :key="tech"
                  :label="tech"
                  :closable="false"
                  class="tech-tag bg-gray-100 text-gray-700 text-xs hover:bg-blue-100 hover:text-blue-700 transition-colors"
                />
              </div>
            </div>
          </Card>
        </div>

        <!-- View More Button -->
        <div class="text-center mt-12">
          <Button
            variant="outlined"
            theme-color="primary"
            size="large"
            @click="viewAllPortfolioProjects"
            class="view-more-portfolio-btn"
          >
            查看所有作品
          </Button>
        </div>
      </div>
    </section>

    <!-- Awards Section -->
    <section class="awards-section py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <Title
            class="flex flex-col justify-center items-center text-4xl font-bold text-gray-900 mb-6"
          >
            國際設計獎項殊榮
          </Title>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            友達設計中心的創新設計作品屢獲國際設計大獎肯定，展現我們在設計領域的專業實力與創新能力。
          </p>
        </div>

        <!-- Awards Grid -->
        <div class="awards-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            v-for="award in designAwards"
            :key="award.id"
            class="award-card group bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
          >
            <template #cardHeader>
              <div
                class="award-header p-6 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden"
              >
                <!-- Background Pattern -->
                <div class="absolute inset-0 opacity-20">
                  <div
                    class="absolute top-4 right-4 w-20 h-20 border-2 border-white/30 rounded-full"
                  ></div>
                  <div
                    class="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/30 rounded-full"
                  ></div>
                </div>

                <div class="relative z-10">
                  <div
                    class="award-icon w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon :name="award.icon" size="32" color="white" />
                  </div>
                  <Title :level="3" class="text-xl font-bold text-white mb-2">
                    {{ award.name }}
                  </Title>
                  <p class="text-blue-100 text-sm">
                    {{ award.organization }}
                  </p>
                </div>
              </div>
            </template>

            <div class="p-6 space-y-4">
              <div class="award-info space-y-3">
                <div class="project-title">
                  <h4 class="font-semibold text-gray-900 mb-1">
                    {{ award.project }}
                  </h4>
                  <p class="text-sm text-gray-600">{{ award.description }}</p>
                </div>

                <!-- Award Details -->
                <div class="award-details space-y-2">
                  <div class="award-year flex items-center gap-2">
                    <Icon name="SvgCalendar" size="14" class="text-blue-500" />
                    <span class="text-sm text-gray-500"
                      >獲獎年份：{{ award.year }}</span
                    >
                  </div>
                  <div class="award-category flex items-center gap-2">
                    <Icon
                      name="SvgSuccessCircle"
                      size="14"
                      class="text-blue-500"
                    />
                    <span class="text-sm text-gray-500"
                      >獎項類別：{{ award.category }}</span
                    >
                  </div>
                </div>

                <!-- Award Recognition -->
                <div
                  class="award-recognition bg-blue-50 rounded-lg p-3 border border-gray-200"
                >
                  <div class="flex items-center gap-2 mb-2">
                    <Icon
                      name="SvgSuccessCircle"
                      size="16"
                      class="text-blue-600"
                    />
                    <span class="text-sm font-medium text-blue-800"
                      >獲獎殊榮</span
                    >
                  </div>
                  <p class="text-xs text-blue-700">{{ award.recognition }}</p>
                </div>
              </div>

              <!-- Award Tags -->
              <div class="award-tags flex flex-wrap gap-2 pt-2">
                <Tag
                  v-for="tag in award.tags"
                  :key="tag"
                  :label="tag"
                  :closable="false"
                  class="award-tag bg-blue-100 text-blue-700 text-xs border border-blue-200 hover:bg-blue-200 transition-colors"
                />
              </div>
            </div>
          </Card>
        </div>

        <!-- Awards Statistics -->
        <div
          class="awards-stats mt-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
        >
          <div class="text-center mb-8">
            <Title :level="3" class="text-2xl font-bold text-gray-900 mb-4">
              設計成就統計
            </Title>
            <p class="text-gray-600">累積的設計獎項展現我們持續創新的成果</p>
          </div>

          <div class="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              v-for="stat in awardStats"
              :key="stat.label"
              class="award-stat text-center group"
            >
              <div
                class="stat-icon w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <Icon :name="stat.icon" size="24" color="white" />
              </div>
              <div
                class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
              >
                {{ stat.value }}
              </div>
              <div class="text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="contact-section py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white"
    >
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div class="contact-content space-y-8">
            <div class="space-y-4">
              <Title class="text-4xl font-bold leading-tight text-blue-700">
                開始您的設計合作之旅
              </Title>
              <p class="text-xl text-blue-100 leading-relaxed">
                我們期待與您合作，為您的專案帶來創新的設計解決方案。
                無論是產品設計諮詢或設計服務需求，歡迎與我們聯繫！
              </p>
            </div>

            <div class="contact-methods space-y-6">
              <div
                v-for="method in contactMethods"
                :key="method.type"
                class="contact-method flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <div
                  class="contact-icon w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                >
                  <Icon :name="method.icon" size="20" />
                </div>
                <div>
                  <div class="font-medium">{{ method.label }}</div>
                  <div class="text-blue-200">{{ method.value }}</div>
                </div>
              </div>
            </div>

            <div class="social-links-contact flex gap-4 pt-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="social-contact-link w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors transform hover:scale-110"
              >
                <Icon :name="social.icon" size="20" />
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form">
            <Card
              class="contact-form-card bg-white text-gray-900 border-0 shadow-2xl"
            >
              <div class="p-8 space-y-6">
                <Title
                  :level="4"
                  class="text-2xl font-semibold text-gray-900 mb-6"
                >
                  發送合作需求
                </Title>

                <form @submit.prevent="submitContactForm" class="space-y-6">
                  <div class="form-group">
                    <Input
                      v-model="contactForm.name"
                      type="text"
                      placeholder="公司/組織名稱"
                      size="medium"
                      class="contact-input"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <Input
                      v-model="contactForm.email"
                      type="email"
                      placeholder="聯絡人電子郵件"
                      size="medium"
                      class="contact-input"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <Input
                      v-model="contactForm.subject"
                      type="text"
                      placeholder="合作主題"
                      size="medium"
                      class="contact-input"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <Textarea
                      v-model="contactForm.message"
                      placeholder="詳細描述您的設計需求或合作構想"
                      :rows="6"
                      class="contact-textarea"
                      required
                    />
                  </div>

                  <Button
                    variant="filled"
                    theme-color="primary"
                    size="large"
                    width="full"
                    type="submit"
                    :disabled="isSubmittingContact"
                    class="contact-submit-btn"
                  >
                    {{ isSubmittingContact ? '發送中...' : '發送合作需求' }}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center space-y-6">
          <!-- AUO Design Center Logo/Avatar -->
          <div class="flex justify-center">
            <div class="footer-logo-container">
              <div
                class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg"
              >
                <Icon name="SvgPalette" size="32" color="white" />
              </div>
            </div>
          </div>

          <!-- Company Info -->
          <div class="space-y-2">
            <Title :level="5" class="text-xl font-semibold text-white">
              友達設計中心
            </Title>
            <Title :level="6" class="text-lg font-medium text-blue-300">
              AUO Design Center
            </Title>
            <p class="text-gray-400">創新設計 · 使用者體驗 · 未來科技</p>
          </div>

          <!-- Quick Links -->
          <div
            class="footer-links grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto py-6"
          >
            <div class="footer-link-group">
              <h4 class="text-sm font-semibold text-white mb-3">服務項目</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >UI/UX設計</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >視覺設計</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >產品設計</a
                  >
                </li>
              </ul>
            </div>
            <div class="footer-link-group">
              <h4 class="text-sm font-semibold text-white mb-3">關於我們</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#about" class="hover:text-white transition-colors"
                    >設計理念</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >團隊介紹</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >獲獎紀錄</a
                  >
                </li>
              </ul>
            </div>
            <div class="footer-link-group">
              <h4 class="text-sm font-semibold text-white mb-3">作品展示</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >精選案例</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >設計系統</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >創新概念</a
                  >
                </li>
              </ul>
            </div>
            <div class="footer-link-group">
              <h4 class="text-sm font-semibold text-white mb-3">聯絡資訊</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#contact" class="hover:text-white transition-colors"
                    >聯絡我們</a
                  >
                </li>
                <li>
                  <a
                    href="mailto:design.center@auo.com"
                    class="hover:text-white transition-colors"
                    >電子郵件</a
                  >
                </li>
                <li>
                  <a href="#" class="hover:text-white transition-colors"
                    >設計合作</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Social Links -->
          <div class="social-links-footer flex justify-center gap-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="footer-social-link w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" size="20" />
            </a>
          </div>

          <!-- Company Stats Footer -->
          <div
            class="footer-stats grid grid-cols-3 gap-8 max-w-md mx-auto py-6 border-t border-gray-800"
          >
            <div
              v-for="stat in companyStats"
              :key="stat.label"
              class="footer-stat text-center"
            >
              <div class="text-2xl font-bold text-blue-400">
                {{ stat.value }}
              </div>
              <div class="text-gray-500 text-xs">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Copyright -->
          <div class="border-t border-gray-800 pt-6">
            <div
              class="flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <p class="text-gray-400 text-sm">
                © 2025 友達光電設計中心. 保留所有權利.
              </p>
              <div class="flex items-center gap-4 text-xs text-gray-500">
                <span>使用 Vue.js、Tailwind CSS 和 WDS 建構</span>
                <div class="flex items-center gap-1">
                  <Icon name="SvgHeart" size="12" class="text-red-500" />
                  <span>用心設計</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, reactive } from 'vue';
import {
  Title,
  Button,
  Icon,
  Card,
  Tag,
  Image,
  Input,
  Textarea,
} from '../../libs/src/index';

// Reactive Data
const selectedPortfolioFilter = ref('all');
const isSubmittingContact = ref(false);

// Form data
const contactForm = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

// Data
const socialLinks = [
  {
    name: 'Behance',
    icon: 'SvgPalette',
    url: 'https://behance.net/auodesigncenter',
  },
  {
    name: 'Dribbble',
    icon: 'SvgHeart',
    url: 'https://dribbble.com/auodesign',
  },
  {
    name: 'Instagram',
    icon: 'SvgFavorite',
    url: 'https://instagram.com/auodesigncenter',
  },
  { name: 'Design Portfolio', icon: 'SvgHome', url: 'https://design.auo.com' },
];

// Company Stats
const companyStats = [
  { value: '300+', label: '設計專案' },
  { value: '50+', label: '設計師團隊' },
  { value: '15+', label: '設計獎項' },
];

// Contact Methods
const contactMethods = [
  {
    type: 'email',
    label: '電子郵件',
    value: 'design.center@auo.com',
    icon: 'SvgMail',
  },
  {
    type: 'phone',
    label: '聯絡電話',
    value: '+886-3-500-8800',
    icon: 'SvgUser',
  },
  {
    type: 'location',
    label: '設計中心',
    value: 'AUO 台北辦公室',
    icon: 'SvgLocation',
  },
];

// Design Awards
const designAwards = [
  {
    id: 1,
    name: 'Red Dot Design Award',
    organization: 'Red Dot Institute',
    project: 'AUO 智慧顯示解決方案',
    description: '創新的顯示技術與使用者介面設計，獲得國際設計界最高殊榮。',
    year: '2024',
    category: 'Product Design',
    recognition: '在全球超過17,000件參賽作品中脫穎而出，獲得Red Dot最佳設計獎',
    icon: 'SvgSuccessCircle',
    tags: ['產品設計', '創新技術', '使用者體驗'],
  },
  {
    id: 2,
    name: 'iF Design Award',
    organization: 'iF International Forum Design',
    project: '醫療顯示器使用者介面',
    description: '為醫療專業人員設計的直觀操作介面，提升醫療效率與安全性。',
    year: '2024',
    category: 'Interface Design',
    recognition: '德國iF設計獎肯定其在醫療設備界面設計上的突破性創新',
    icon: 'SvgSuccessCircle',
    tags: ['醫療設計', '介面設計', '安全性'],
  },
  {
    id: 3,
    name: 'Good Design Award',
    organization: 'Japan Institute of Design Promotion',
    project: '教育互動顯示系統',
    description: '為教育環境打造的互動式顯示解決方案，提升學習體驗與參與度。',
    year: '2023',
    category: 'Communication Design',
    recognition: '日本Good Design Award表揚其在教育科技設計領域的卓越貢獻',
    icon: 'SvgSuccessCircle',
    tags: ['教育科技', '互動設計', '使用者體驗'],
  },
  {
    id: 4,
    name: 'CES Innovation Award',
    organization: 'Consumer Technology Association',
    project: '車載顯示系統設計',
    description: '為智慧汽車開發的先進顯示系統，結合安全性與易用性。',
    year: '2023',
    category: 'Vehicle Technology',
    recognition: 'CES創新獎肯定其在車載顯示技術與設計整合上的領先地位',
    icon: 'SvgSuccessCircle',
    tags: ['車載系統', '智慧汽車', '安全設計'],
  },
  {
    id: 5,
    name: 'Taiwan Excellence Award',
    organization: 'Taiwan External Trade Development Council',
    project: '綠能顯示解決方案',
    description: '環保節能的顯示器設計，實現永續發展與優秀設計的完美結合。',
    year: '2023',
    category: 'Sustainable Design',
    recognition: '台灣精品獎彰顯在永續設計與技術創新方面的傑出表現',
    icon: 'SvgSuccessCircle',
    tags: ['永續設計', '綠色科技', '環保創新'],
  },
  {
    id: 6,
    name: 'Design for Asia Award',
    organization: 'Hong Kong Design Centre',
    project: '亞洲智慧城市顯示系統',
    description: '專為亞洲城市環境設計的智慧顯示解決方案，融合在地文化與科技。',
    year: '2022',
    category: 'Smart City Design',
    recognition: 'DFA亞洲最具影響力設計獎，表彰在智慧城市設計領域的創新貢獻',
    icon: 'SvgSuccessCircle',
    tags: ['智慧城市', '在地文化', '系統設計'],
  },
];

// Award Statistics
const awardStats = [
  { value: '20+', label: '國際大獎', icon: 'SvgSuccessCircle' },
  { value: '5+', label: '設計領域', icon: 'SvgPalette' },
  { value: '8', label: '連續獲獎年份', icon: 'SvgCalendar' },
  { value: '100%', label: '設計創新率', icon: 'SvgLightning' },
];

// Portfolio Filters
const portfolioFilters = [
  { label: '全部', value: 'all' },
  { label: 'UI/UX', value: 'uiux' },
  { label: '視覺設計', value: 'visual' },
  { label: '產品設計', value: 'product' },
  { label: '品牌設計', value: 'branding' },
];

// Portfolio Projects
const portfolioProjects = [
  {
    id: 1,
    title: '智慧顯示器介面設計',
    description:
      '為新世代智慧顯示器打造直觀的使用者介面，結合觸控操作與語音控制。',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    category: 'UI/UX',
    client: '友達光電',
    year: '2024',
    technologies: ['Figma', 'Prototyping', 'User Research'],
    url: '#',
    type: 'uiux',
  },
  {
    id: 2,
    title: '企業視覺識別系統',
    description: '為科技公司建立全新的視覺識別系統，提升品牌專業形象和識別度。',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    category: '視覺設計',
    client: '科技企業',
    year: '2024',
    technologies: ['Branding', 'Logo Design', 'Visual Identity'],
    url: '#',
    type: 'visual',
  },
  {
    id: 3,
    title: '醫療設備產品設計',
    description: '設計符合人體工學的醫療設備，提供更安全舒適的使用體驗。',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    category: '產品設計',
    client: '醫療器材公司',
    year: '2024',
    technologies: ['Industrial Design', '3D Modeling', 'Ergonomics'],
    url: '#',
    type: 'product',
  },
  {
    id: 4,
    title: '教育平台介面設計',
    description: '為線上教育平台設計直觀易用的學習介面，提升學習效率和體驗。',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    category: 'UI/UX',
    client: '教育科技公司',
    year: '2023',
    technologies: ['UI Design', 'UX Research', 'Interactive Design'],
    url: '#',
    type: 'uiux',
  },
  {
    id: 5,
    title: '永續品牌形象設計',
    description: '為環保企業打造永續概念的品牌形象，傳達環保理念和企業價值。',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
    category: '品牌設計',
    client: '永續企業',
    year: '2023',
    technologies: ['Branding', 'Sustainability Design', 'Visual Communication'],
    url: '#',
    type: 'branding',
  },
  {
    id: 6,
    title: '智慧家居控制系統',
    description: '設計整合性的智慧家居控制介面，簡化複雜的家電操作流程。',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'UI/UX',
    client: '智慧家居公司',
    year: '2023',
    technologies: ['IoT Design', 'Mobile App', 'Smart Home'],
    url: '#',
    type: 'uiux',
  },
];

// Computed Properties
const filteredPortfolioProjects = computed(() => {
  if (selectedPortfolioFilter.value === 'all') {
    return portfolioProjects;
  }
  return portfolioProjects.filter(
    (project) => project.type === selectedPortfolioFilter.value,
  );
});

// Enhanced tech stack - 友達設計中心專業領域
const enhancedTechStack = [
  // 左上角區域 - 避免重疊
  { name: 'UI/UX', icon: 'SvgPalette', position: { top: '8%', left: '5%' } },
  { name: 'Figma', icon: 'SvgDocument', position: { top: '18%', left: '22%' } },
  { name: 'Sketch', icon: 'SvgSettings', position: { top: '5%', left: '38%' } },

  // 右上角區域 - 分散佈局
  {
    name: 'Adobe CC',
    icon: 'SvgPalette',
    position: { top: '28%', left: '75%' },
  },
  {
    name: 'Prototyping',
    icon: 'SvgLightning',
    position: { top: '15%', left: '88%' },
  },

  // 左側中間區域 - 垂直間距加大
  { name: '品牌設計', icon: 'SvgHome', position: { top: '38%', left: '2%' } },
  {
    name: '介面設計',
    icon: 'SvgMobile',
    position: { top: '65%', left: '8%' },
  },

  // 右側中間區域 - 避免擁擠
  {
    name: '視覺設計',
    icon: 'SvgPalette',
    position: { top: '42%', left: '82%' },
  },
  {
    name: '動效設計',
    icon: 'SvgLightning',
    position: { top: '58%', left: '75%' },
  },

  // 下方區域 - 重新分佈避免重疊
  {
    name: '設計系統',
    icon: 'SvgDocument',
    position: { top: '78%', left: '18%' },
  },
  {
    name: '使用者研究',
    icon: 'SvgUser',
    position: { top: '85%', left: '38%' },
  },
  {
    name: '創意工坊',
    icon: 'SvgSuccessCircle',
    position: { top: '72%', left: '62%' },
  },

  // 底部區域 - 水平分散
  {
    name: '設計思維',
    icon: 'SvgInfoCircle',
    position: { top: '92%', left: '8%' },
  },
  {
    name: '服務設計',
    icon: 'SvgCheckCircle',
    position: { top: '95%', left: '32%' },
  },
  {
    name: '未來概念',
    icon: 'SvgLightning',
    position: { top: '88%', left: '78%' },
  },
];

// Methods
const scrollToServices = () => {
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const handlePortfolioFilterChange = (filterValue: string) => {
  selectedPortfolioFilter.value = filterValue;
};

const viewPortfolioProject = (url: string) => {
  window.open(url, '_blank');
};

const viewAllPortfolioProjects = () => {
  console.log('View all portfolio projects');
  // Navigate to projects page or show more projects
};

const submitContactForm = async () => {
  isSubmittingContact.value = true;

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    Object.keys(contactForm).forEach((key) => {
      contactForm[key] = '';
    });

    alert('合作需求已成功發送！我們會盡快與您聯繫。');
  } catch (error) {
    alert('發送失敗，請稍後再試。');
  } finally {
    isSubmittingContact.value = false;
  }
};

// Animation setup
onMounted(() => {
  // Animation initialization code can be added here
});
</script>

<style scoped>
/* Custom animations */
@keyframes float1 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(-3deg);
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-25px) rotate(3deg);
  }
}

@keyframes float4 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-18px) rotate(4deg);
  }
  66% {
    transform: translateY(-8px) rotate(-2deg);
  }
}

@keyframes float5 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(-22px) rotate(-4deg) scale(1.05);
  }
}

@keyframes float6 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-12px) rotate(2deg);
  }
  75% {
    transform: translateY(-16px) rotate(-3deg);
  }
}

.animate-float-1 {
  animation: float1 6s ease-in-out infinite;
}
.animate-float-2 {
  animation: float2 8s ease-in-out infinite;
}
.animate-float-3 {
  animation: float3 7s ease-in-out infinite;
}
.animate-float-4 {
  animation: float4 9s ease-in-out infinite;
}
.animate-float-5 {
  animation: float5 5s ease-in-out infinite;
}
.animate-float-6 {
  animation: float6 10s ease-in-out infinite;
}

/* Hero animations */
.hero-content {
  animation: fadeInUp 1s ease-out;
}

.hero-visual {
  animation: fadeInUp 1s ease-out 0.3s both;
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

/* Hover effects */
.social-link {
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-2px);
}

/* Enhanced hero visual effects */
.hero-visual {
  position: relative;
}

.hero-visual::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

/* Floating tech stack enhancements */
.floating-tech {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.floating-tech:hover {
  transform: translateY(-2px) scale(1.05);
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
}

/* Corporate Avatar Orbital Animation Effects */
.corporate-orbital-container {
  position: relative;
}

/* Orbital Rings */
.orbital-ring {
  border: 1px solid rgba(59, 130, 246, 0.3);
  background: transparent;
  pointer-events: none;
}

.orbital-ring-1 {
  animation: rotateClockwise 20s linear infinite;
  border-color: rgba(59, 130, 246, 0.4);
}

.orbital-ring-2 {
  animation: rotateCounterClockwise 15s linear infinite;
  border-color: rgba(139, 92, 246, 0.4);
}

.orbital-ring-3 {
  animation: rotateClockwise 10s linear infinite;
  border-color: rgba(6, 182, 212, 0.4);
}

/* Orbital Dots */
.orbital-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
}

.orbital-dot-1 {
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #3b82f6, #1d4ed8);
}

.orbital-dot-2 {
  top: 50%;
  right: -4px;
  transform: translateY(-50%);
  background: linear-gradient(45deg, #8b5cf6, #7c3aed);
}

.orbital-dot-3 {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #06b6d4, #0891b2);
}

.orbital-dot-4 {
  top: -4px;
  right: 30%;
  background: linear-gradient(45deg, #10b981, #059669);
}

.orbital-dot-5 {
  bottom: -4px;
  left: 30%;
  background: linear-gradient(45deg, #f59e0b, #d97706);
}

.orbital-dot-6 {
  top: 50%;
  left: -4px;
  transform: translateY(-50%);
  background: linear-gradient(45deg, #ef4444, #dc2626);
}

/* Glowing Rings */
.glow-ring {
  border: 2px solid transparent;
  background: linear-gradient(
    45deg,
    rgba(59, 130, 246, 0.3),
    rgba(139, 92, 246, 0.3),
    rgba(6, 182, 212, 0.3),
    rgba(16, 185, 129, 0.3)
  );
  background-size: 400% 400%;
  animation: glowingRing 8s ease-in-out infinite;
  pointer-events: none;
  filter: blur(2px);
}

.glow-ring-1 {
  animation-delay: 0s;
  opacity: 0.6;
}

.glow-ring-2 {
  animation-delay: 2s;
  opacity: 0.4;
}

.glow-ring-3 {
  animation-delay: 4s;
  opacity: 0.3;
}

/* Pulse Rings */
.pulse-ring {
  animation: pulseRing 2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
}

.pulse-ring-delayed {
  animation-delay: 1s;
}

/* Keyframe Animations */
@keyframes rotateClockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotateCounterClockwise {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes glowingRing {
  0%,
  100% {
    background-position: 0% 50%;
    opacity: 0.6;
    transform: scale(1);
  }
  25% {
    background-position: 100% 50%;
    opacity: 0.8;
    transform: scale(1.02);
  }
  50% {
    background-position: 200% 50%;
    opacity: 0.4;
    transform: scale(0.98);
  }
  75% {
    background-position: 300% 50%;
    opacity: 0.7;
    transform: scale(1.01);
  }
}

@keyframes pulseRing {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

/* Hover Effects for Corporate Logo */
.corporate-orbital-container:hover .orbital-ring-1 {
  animation-duration: 15s;
  border-color: rgba(59, 130, 246, 0.8);
}

.corporate-orbital-container:hover .orbital-ring-2 {
  animation-duration: 10s;
  border-color: rgba(139, 92, 246, 0.8);
}

.corporate-orbital-container:hover .orbital-ring-3 {
  animation-duration: 5s;
  border-color: rgba(6, 182, 212, 0.8);
}

.corporate-orbital-container:hover .orbital-dot {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.9);
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.corporate-orbital-container:hover .glow-ring {
  opacity: 1;
  filter: blur(1px);
}

/* Design Center Orbital Effects */
.design-orbital-container:hover .orbital-ring-1 {
  animation-duration: 12s;
  border-color: rgba(236, 72, 153, 0.8);
}

.design-orbital-container:hover .orbital-ring-2 {
  animation-duration: 8s;
  border-color: rgba(168, 85, 247, 0.8);
}

.design-orbital-container:hover .orbital-ring-3 {
  animation-duration: 4s;
  border-color: rgba(59, 130, 246, 0.8);
}

.design-orbital-container:hover .orbital-dot {
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.9);
  transform: scale(1.3);
  transition: all 0.3s ease;
}

.design-orbital-container:hover .glow-ring {
  opacity: 1;
  filter: blur(1px);
}

/* Design Center Specific Orbital Ring Colors */
.design-orbital-container .orbital-ring-1 {
  border-color: rgba(236, 72, 153, 0.4);
}

.design-orbital-container .orbital-ring-2 {
  border-color: rgba(168, 85, 247, 0.4);
}

.design-orbital-container .orbital-ring-3 {
  border-color: rgba(59, 130, 246, 0.4);
}

/* Design Center Orbital Dots with Creative Colors */
.design-orbital-container .orbital-dot-1 {
  background: linear-gradient(45deg, #ec4899, #be185d);
}

.design-orbital-container .orbital-dot-2 {
  background: linear-gradient(45deg, #a855f7, #7c3aed);
}

.design-orbital-container .orbital-dot-3 {
  background: linear-gradient(45deg, #3b82f6, #1d4ed8);
}

.design-orbital-container .orbital-dot-4 {
  background: linear-gradient(45deg, #06b6d4, #0891b2);
}

.design-orbital-container .orbital-dot-5 {
  background: linear-gradient(45deg, #10b981, #059669);
}

.design-orbital-container .orbital-dot-6 {
  background: linear-gradient(45deg, #f59e0b, #d97706);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-tech-stack {
    display: none;
  }

  .hero-content h1 {
    font-size: 3rem;
  }

  .orbital-dot {
    width: 6px;
    height: 6px;
  }

  .glow-ring {
    border-width: 1px;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}
</style>

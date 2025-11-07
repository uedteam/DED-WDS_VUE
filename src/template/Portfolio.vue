<template>
  <div class="portfolio-page">
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
                  你好，我是
                </p>
                <Title
                  :level="0"
                  class="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight"
                >
                  楊凱文
                </Title>
              </div>

              <div class="space-y-4">
                <Title
                  :level="2"
                  class="text-2xl md:text-3xl font-light text-blue-100 leading-relaxed"
                >
                  全端開發工程師 & 專業救火隊
                </Title>
                <p class="text-xl text-gray-300 leading-relaxed max-w-lg">
                  我專注於創造美觀、實用且以使用者為中心的數位體驗，
                  透過簡潔的程式碼和深思熟慮的設計來解決現實世界的問題。
                </p>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <Button
                variant="filled"
                theme-color="primary"
                size="large"
                @click="scrollToPortfolio"
                class="portfolio-cta-primary"
              >
                查看我的作品
              </Button>
              <Button
                variant="outlined"
                theme-color="primary"
                size="large"
                @click="scrollToContact"
                class="portfolio-cta-secondary border-white text-white hover:bg-white hover:text-gray-900"
              >
                聯絡我
              </Button>
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

          <!-- Hero Avatar/Photo -->
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

              <!-- Main Avatar Container -->
              <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div class="relative">
                  <!-- Dynamic Orbital Rings -->
                  <div
                    class="avatar-orbital-container relative w-48 h-48 lg:w-56 lg:h-56"
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

                    <!-- Avatar with custom size -->
                    <div class="relative w-full h-full z-10">
                      <img
                        :src="'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'"
                        alt="楊凱文"
                        class="w-full h-full rounded-full object-cover border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300 relative z-20"
                      />

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

              <!-- Status indicators -->
              <div class="absolute top-4 right-4 z-30">
                <div class="flex flex-col gap-2">
                  <div
                    class="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-300/30"
                  >
                    <div
                      class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                    ></div>
                    <span class="text-green-100 text-xs font-medium"
                      >可接案</span
                    >
                  </div>
                  <div
                    class="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-300/30"
                  >
                    <Icon
                      name="SvgLocation"
                      size="12"
                      color="rgb(147 197 253)"
                    />
                    <span class="text-blue-100 text-xs font-medium">台北</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- About Content -->
          <div class="about-content space-y-8">
            <div class="space-y-4">
              <div class="inline-block">
                <span
                  class="about-badge bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  關於我
                </span>
              </div>
              <Title class="text-4xl font-bold text-gray-900 leading-tight">
                用<span class="text-blue-600 text-4xl">熱情與精準度</span
                >打造數位體驗
              </Title>
            </div>

            <div class="space-y-6 text-gray-600 leading-relaxed">
              <p class="text-lg">
                擁有超過 5
                年的網頁開發和設計經驗，我專精於創造無縫的使用者體驗，
                在美觀設計與功能性程式碼之間建立橋樑。
              </p>
              <p>
                我的旅程始於對透過技術解決問題的熱情。如今，我使用最前沿的技術
                來建構可擴展的應用程式，創造真正有影響力的解決方案。
              </p>
            </div>

            <!-- Skills -->
            <div class="skills-section space-y-4">
              <Title :level="4" class="text-xl font-semibold text-gray-900">
                技術技能
              </Title>
              <div class="flex flex-wrap gap-3">
                <Tag
                  v-for="skill in skills"
                  :key="skill"
                  :label="skill"
                  :closable="false"
                  class="skill-tag bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                />
              </div>
            </div>

            <!-- Stats -->
            <div class="stats-grid grid grid-cols-3 gap-8 pt-8">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="stat-item text-center"
              >
                <div class="text-3xl font-bold text-blue-600">
                  {{ stat.value }}
                </div>
                <div class="text-gray-600 text-sm">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- About Visual -->
          <div class="about-visual">
            <Card
              class="about-card bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-2xl"
            >
              <template #cardHeader>
                <div class="flex items-center gap-3 p-6">
                  <div class="flex gap-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span class="text-gray-600 text-sm font-mono"
                    >portfolio.js</span
                  >
                </div>
              </template>

              <div class="p-6 space-y-4">
                <div class="code-preview font-mono text-sm">
                  <div class="text-purple-600">
                    const <span class="text-blue-600">developer</span> = {
                  </div>
                  <div class="ml-4 text-gray-700">
                    name: <span class="text-green-600">'楊凱文'</span>,
                  </div>
                  <div class="ml-4 text-gray-700">
                    role:
                    <span class="text-green-600">'全端開發工程師'</span>,
                  </div>
                  <div class="ml-4 text-gray-700">
                    passion:
                    <span class="text-green-600">'創造驚豔的網站'</span>,
                  </div>
                  <div class="ml-4 text-gray-700">
                    coffee: <span class="text-orange-600">true</span>
                  </div>
                  <div class="text-purple-600">};</div>
                </div>

                <div class="achievements space-y-3 pt-4">
                  <div
                    v-for="achievement in achievements"
                    :key="achievement.title"
                    class="achievement-item flex items-center gap-3 p-3 bg-white/50 rounded-lg"
                  >
                    <Icon
                      :name="achievement.icon"
                      size="20"
                      class="text-blue-600"
                    />
                    <div>
                      <div class="font-semibold text-gray-900">
                        {{ achievement.title }}
                      </div>
                      <div class="text-sm text-gray-600">
                        {{ achievement.description }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio-section py-20 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span
              class="portfolio-badge bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              我的作品
            </span>
          </div>
          <Title class="text-4xl font-bold text-gray-900 mb-6">
            精選專案
          </Title>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            以下是我最近參與的一些專案。每個專案都代表著獨特的挑戰和學習經驗。
          </p>

          <!-- Project Filter -->
          <div class="project-filter flex flex-wrap justify-center gap-3">
            <Button
              v-for="filter in projectFilters"
              :key="filter.value"
              :variant="selectedFilter === filter.value ? 'filled' : 'outlined'"
              theme-color="primary"
              size="small"
              @click="handleFilterChange(filter.value)"
              class="filter-btn"
            >
              {{ filter.label }}
            </Button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card group bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0"
          >
            <template #cardHeader>
              <div class="project-image relative overflow-hidden">
                <Image
                  :src="project.image"
                  :alt="project.title"
                  ratio="16x9"
                  object-fit="cover"
                  class="group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  class="project-overlay absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div class="absolute bottom-4 left-4 right-4">
                    <div class="flex gap-2">
                      <Button
                        variant="filled"
                        theme-color="primary"
                        size="small"
                        @click="viewProject(project.demo)"
                        class="project-demo-btn"
                      >
                        即時預覽
                      </Button>
                      <Button
                        variant="outlined"
                        theme-color="primary"
                        size="small"
                        @click="viewProject(project.github)"
                        class="project-code-btn border-white text-white hover:bg-white hover:text-gray-900"
                      >
                        原始碼
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <div class="p-6 space-y-4">
              <div class="flex items-center justify-between mb-2">
                <span
                  class="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                >
                  {{ project.category }}
                </span>
                <span class="text-xs text-gray-500">
                  {{ project.duration }}
                </span>
              </div>

              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <Title
                    :level="5"
                    class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                  >
                    {{ project.title }}
                  </Title>
                  <span
                    class="text-xs px-2 py-1 rounded-full"
                    :class="{
                      'bg-green-100 text-green-700':
                        project.status === '已完成' ||
                        project.status === '已發布',
                      'bg-blue-100 text-blue-700':
                        project.status === '進行中' ||
                        project.status === '開發中',
                      'bg-yellow-100 text-yellow-700':
                        project.status === 'Beta 測試' ||
                        project.status === '原型開發',
                      'bg-purple-100 text-purple-700':
                        project.status === '開源',
                      'bg-gray-100 text-gray-700': project.status === '維護中',
                    }"
                  >
                    {{ project.status }}
                  </span>
                </div>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ project.description }}
                </p>
              </div>

              <div class="tech-stack flex flex-wrap gap-2">
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
            @click="viewAllProjects"
            class="view-more-btn"
          >
            查看所有專案
          </Button>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section
      class="skills-section py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span
              class="skills-badge bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              專業技能
            </span>
          </div>
          <Title class="text-4xl font-bold text-gray-900 mb-6">
            技術專長
          </Title>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            多年的學習和實戰經驗，讓我在各個技術領域都有深度的理解和實作能力。
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div
            v-for="skillCategory in skillCategories"
            :key="skillCategory.name"
            class="skill-category-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="skill-icon w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
              >
                <Icon
                  :name="skillCategory.icon"
                  size="24"
                  class="text-blue-600"
                />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">
                  {{ skillCategory.name }}
                </h3>
                <p class="text-sm text-gray-600">{{ skillCategory.level }}</p>
              </div>
            </div>

            <div class="space-y-3">
              <div
                v-for="skill in skillCategory.skills"
                :key="skill.name"
                class="skill-item"
              >
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-gray-700">{{
                    skill.name
                  }}</span>
                  <span class="text-xs text-gray-500">{{ skill.level }}%</span>
                </div>
                <div class="skill-progress bg-gray-200 rounded-full h-2">
                  <div
                    class="skill-progress-bar bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certification Section -->
        <div class="certifications-section">
          <Title
            :level="3"
            class="text-2xl font-bold text-gray-900 text-center mb-8"
          >
            認證與證書
          </Title>

          <div class="grid md:grid-cols-3 gap-6">
            <Card
              v-for="cert in certifications"
              :key="cert.name"
              class="certification-card bg-white hover:shadow-lg transition-all duration-300"
            >
              <div class="p-6 text-center">
                <div
                  class="cert-icon w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                >
                  <Icon :name="cert.icon" size="32" color="white" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-2">
                  {{ cert.name }}
                </h4>
                <p class="text-sm text-gray-600 mb-2">{{ cert.issuer }}</p>
                <p class="text-xs text-gray-500">{{ cert.date }}</p>
                <div v-if="cert.credentialId" class="mt-3">
                  <span
                    class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    憑證編號: {{ cert.credentialId }}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section - Consistent with Site Style -->
    <section
      class="experience-section py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span
              class="experience-badge bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              工作經歷
            </span>
          </div>
          <Title class="text-4xl font-bold text-gray-900 mb-6">
            職涯歷程
          </Title>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            從實習生到資深工程師的成長歷程，每一步都是技能提升和經驗累積的見證。
          </p>
        </div>

        <!-- Modern Timeline -->
        <div class="experience-timeline max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="experience-item group"
              :class="{ 'lg:translate-y-16': index % 2 === 1 }"
            >
              <!-- Enhanced Experience Card -->
              <div class="relative">
                <!-- Subtle Glow Effect -->
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"
                ></div>

                <!-- Main Card -->
                <Card
                  class="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0"
                >
                  <!-- Card Header -->
                  <template #cardHeader>
                    <div
                      class="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    >
                      <!-- Position Number -->
                      <div
                        class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                      >
                        <span class="text-white text-sm font-bold font-mono">{{
                          String(index + 1).padStart(2, '0')
                        }}</span>
                      </div>

                      <!-- Time Period -->
                      <div
                        class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3"
                      >
                        <div
                          class="w-2 h-2 bg-white rounded-full animate-pulse"
                        ></div>
                        <span class="text-white text-xs font-medium">{{
                          exp.period
                        }}</span>
                      </div>

                      <!-- Job Title -->
                      <Title
                        :level="4"
                        class="text-xl font-bold text-white mb-2 group-hover:scale-105 transform transition-transform duration-300"
                      >
                        {{ exp.position }}
                      </Title>

                      <!-- Company -->
                      <div class="flex items-center gap-2">
                        <Icon name="SvgHome" size="14" class="text-white/80" />
                        <span class="text-white/90 font-medium">{{
                          exp.company
                        }}</span>
                      </div>
                    </div>
                  </template>

                  <!-- Card Content -->
                  <div class="p-6 space-y-6">
                    <!-- Description -->
                    <div class="description-section">
                      <div class="flex items-center gap-2 mb-3">
                        <Icon
                          name="SvgDocument"
                          size="16"
                          class="text-blue-600"
                        />
                        <h4
                          class="text-sm font-semibold text-gray-900 uppercase tracking-wide"
                        >
                          工作內容
                        </h4>
                      </div>
                      <div class="bg-blue-50 rounded-lg p-4">
                        <p class="text-gray-700 leading-relaxed">
                          {{ exp.description }}
                        </p>
                      </div>
                    </div>

                    <!-- Achievements -->
                    <div v-if="exp.achievements" class="achievements-section">
                      <div class="flex items-center gap-2 mb-3">
                        <Icon
                          name="SvgSuccessCircle"
                          size="16"
                          class="text-yellow-600"
                        />
                        <h4
                          class="text-sm font-semibold text-gray-900 uppercase tracking-wide"
                        >
                          主要成就
                        </h4>
                      </div>
                      <div class="space-y-2">
                        <div
                          v-for="(achievement, achIndex) in exp.achievements"
                          :key="achievement"
                          class="achievement-item group/achievement"
                          :style="{ animationDelay: `${achIndex * 0.1}s` }"
                        >
                          <div
                            class="flex items-start gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                          >
                            <div
                              class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/achievement:scale-110 transition-transform duration-300"
                            >
                              <Icon
                                name="SvgCheckCircle"
                                size="12"
                                color="white"
                              />
                            </div>
                            <span
                              class="text-gray-700 font-medium leading-relaxed"
                              >{{ achievement }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Skills -->
                    <div class="skills-section">
                      <div class="flex items-center gap-2 mb-3">
                        <Icon
                          name="SvgSettings"
                          size="16"
                          class="text-purple-600"
                        />
                        <h4
                          class="text-sm font-semibold text-gray-900 uppercase tracking-wide"
                        >
                          技術技能
                        </h4>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <Tag
                          v-for="(skill, skillIndex) in exp.skills"
                          :key="skill"
                          :label="skill"
                          :closable="false"
                          class="skill-tag bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium hover:scale-105 transform transition-all duration-200 shadow-md"
                          :style="{ animationDelay: `${skillIndex * 0.05}s` }"
                        />
                      </div>
                    </div>

                    <!-- Duration Indicator -->
                    <div
                      class="duration-indicator bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4"
                    >
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                          <Icon
                            name="SvgClock"
                            size="16"
                            class="text-gray-600"
                          />
                          <span class="text-sm text-gray-600 font-medium"
                            >任職期間</span
                          >
                        </div>
                        <span class="text-sm font-semibold text-blue-600">{{
                          exp.period
                        }}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
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
              <div class="inline-block">
                <span
                  class="contact-badge bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  聯絡我
                </span>
              </div>
              <Title class="text-4xl font-bold leading-tight">
                讓我們一起合作
              </Title>
              <p class="text-xl text-blue-100 leading-relaxed">
                我總是對新的機會和令人興奮的專案感興趣。
                無論您有任何問題或只是想打個招呼，我都會盡力回覆您！
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
                  發送訊息給我
                </Title>

                <form @submit.prevent="submitForm" class="space-y-6">
                  <div class="form-group">
                    <Input
                      v-model="form.name"
                      type="text"
                      placeholder="您的姓名"
                      size="medium"
                      class="contact-input"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <Input
                      v-model="form.email"
                      type="email"
                      placeholder="您的電子郵件"
                      size="medium"
                      class="contact-input"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <Input
                      v-model="form.subject"
                      type="text"
                      placeholder="主旨"
                      size="medium"
                      class="contact-input"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <Textarea
                      v-model="form.message"
                      placeholder="您的訊息"
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
                    :disabled="isSubmitting"
                    class="contact-submit-btn"
                  >
                    {{ isSubmitting ? '發送中...' : '發送訊息' }}
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
          <div class="flex justify-center">
            <Avatar
              :user-name="'楊凱文'"
              :caption="'全端開發工程師'"
              :src="'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'"
              shape="circle"
              size="medium"
              class="footer-avatar"
            />
          </div>

          <div class="space-y-2">
            <Title :level="5" class="text-xl font-semibold"> 楊凱文 </Title>
            <p class="text-gray-400">全端開發工程師 & UI/UX 設計師</p>
          </div>

          <div class="flex justify-center gap-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="footer-social-link text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Icon :name="social.icon" size="20" />
            </a>
          </div>

          <div class="border-t border-gray-800 pt-6">
            <p class="text-gray-400 text-sm">
              © 2024 楊凱文. 使用 Vue.js 和 Tailwind CSS 建構.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, nextTick } from 'vue';
import {
  Title,
  Button,
  Avatar,
  Card,
  Tag,
  Input,
  Textarea,
  Icon,
  Image,
} from '../../libs/src/index';

// Form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const selectedFilter = ref('all');

// Data
const socialLinks = [
  { name: 'GitHub', icon: 'SvgGithub', url: 'https://github.com/kevin-yang' },
  {
    name: 'LinkedIn',
    icon: 'SvgUser',
    url: 'https://linkedin.com/in/kevin-yang',
  },
  { name: 'Email', icon: 'SvgMail', url: 'mailto:hello@kevin-yang.dev' },
  {
    name: 'Facebook',
    icon: 'SvgFacebook',
    url: 'https://facebook.com/kevin-yang.dev',
  },
];

// Enhanced tech stack - 自然有機分布，有層次感
const enhancedTechStack = [
  // 左上角區域 - 避開頭像
  { name: 'Vue.js', icon: 'SvgLogo', position: { top: '12%', left: '8%' } },
  { name: 'React', icon: 'SvgSettings', position: { top: '18%', left: '25%' } },
  {
    name: 'TypeScript',
    icon: 'SvgDocument',
    position: { top: '8%', left: '40%' },
  },

  // 右上角區域 - 狀態指示器下方
  {
    name: 'Tailwind',
    icon: 'SvgPalette',
    position: { top: '32%', left: '72%' },
  },
  {
    name: 'Node.js',
    icon: 'SvgDatabase',
    position: { top: '25%', left: '85%' },
  },

  // 左側中間區域
  {
    name: 'Python',
    icon: 'SvgCheckCircle',
    position: { top: '45%', left: '5%' },
  },
  {
    name: 'GraphQL',
    icon: 'SvgInfoCircle',
    position: { top: '58%', left: '18%' },
  },

  // 右側中間區域 - 頭像旁邊
  {
    name: 'Docker',
    icon: 'SvgSettings',
    position: { top: '48%', left: '78%' },
  },
  {
    name: 'GCP',
    icon: 'SvgSuccessCircle',
    position: { top: '62%', left: '68%' },
  },

  // 下方區域 - 自然散布
  {
    name: 'PostgreSQL',
    icon: 'SvgDatabase',
    position: { top: '75%', left: '15%' },
  },
  {
    name: 'MongoDB',
    icon: 'SvgDatabase',
    position: { top: '82%', left: '35%' },
  },
  { name: 'Git', icon: 'SvgSettings', position: { top: '78%', left: '58%' } },

  // 底部區域 - 分散排列
  {
    name: 'Jest',
    icon: 'SvgCheckCircle',
    position: { top: '88%', left: '8%' },
  },
  {
    name: 'Figma',
    icon: 'SvgPalette',
    position: { top: '92%', left: '28%' },
  },
  {
    name: 'Vite',
    icon: 'SvgLightning',
    position: { top: '85%', left: '75%' },
  },
];

const skills = [
  'Vue.js',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'GCP',
  'Docker',
  'Figma',
  'Tailwind CSS',
  'GraphQL',
];

const stats = [
  { value: '50+', label: '完成專案' },
  { value: '10+', label: '年經驗' },
  { value: '100%', label: '客戶滿意度' },
];

const achievements = [
  {
    title: 'GCP 認證',
    description: '解決方案架構師',
    icon: 'SvgSuccessCircle',
  },
  {
    title: '開源貢獻',
    description: '活躍貢獻者',
    icon: 'SvgGithub',
  },
  {
    title: '設計系統',
    description: '專家等級',
    icon: 'SvgPalette',
  },
];

const projects = [
  {
    id: 1,
    title: '電商平台系統',
    description:
      '完整的全端電商解決方案，具備即時庫存管理、購物車、訂單追蹤和金流整合功能。採用微服務架構，支援高併發和彈性擴展。',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/kevin-yang/ecommerce',
    category: '網頁應用',
    status: '已完成',
    duration: '6 個月',
  },
  {
    id: 2,
    title: '專案管理工具',
    description:
      '協作式專案管理平台，支援即時更新、團隊協作、甘特圖、看板管理和時程追蹤功能。提供直觀的使用者介面和豐富的報表分析。',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/kevin-yang/taskmanager',
    category: '生產力工具',
    status: '維護中',
    duration: '4 個月',
  },
  {
    id: 3,
    title: '設計系統組件庫',
    description:
      '企業級 UI 組件庫，包含完整的設計指南、元件文檔和設計 Token。支援多主題切換、無障礙設計和響應式佈局。',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    technologies: ['Vue.js', 'Storybook', 'Tailwind', 'TypeScript', 'Vite'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/kevin-yang/designsystem',
    category: '開發工具',
    status: '開源',
    duration: '8 個月',
  },
  {
    id: 4,
    title: '數據分析儀表板',
    description:
      '即時數據視覺化儀表板，整合多種圖表類型、互動式報表和自動化報告功能。支援大數據處理和即時更新。',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/kevin-yang/analytics',
    category: '數據分析',
    status: '進行中',
    duration: '5 個月',
  },
  {
    id: 5,
    title: '行動銀行應用',
    description:
      '安全的行動銀行應用程式，具備生物識別認證、交易紀錄、轉帳功能和個人財務管理工具。通過多項金融安全認證。',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'GCP'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/kevin-yang/mobilebank',
    category: '行動應用',
    status: '已發布',
    duration: '12 個月',
  },
  {
    id: 6,
    title: '社群媒體平台',
    description:
      '現代化社群網路平台，支援即時訊息、內容分享、動態牆、群組功能和媒體串流。採用 PWA 技術提供原生應用體驗。',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop',
    technologies: ['Vue.js', 'GraphQL', 'Redis', 'GCP', 'WebRTC'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/kevin-yang/social',
    category: '社群平台',
    status: 'Beta 測試',
    duration: '10 個月',
  },
  {
    id: 7,
    title: 'AI 聊天機器人',
    description:
      '智能客服聊天機器人，整合自然語言處理、意圖識別和知識庫查詢。支援多語言和個性化回應，大幅提升客戶服務效率。',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'Vue.js', 'WebSocket'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/kevin-yang/chatbot',
    category: 'AI 應用',
    status: '已完成',
    duration: '3 個月',
  },
  {
    id: 8,
    title: '物聯網監控系統',
    description:
      '智慧家居物聯網控制系統，支援設備監控、自動化規則設定、能耗分析和遠程控制。整合多種通訊協定和雲端服務。',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
    technologies: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'Docker'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/kevin-yang/iot-dashboard',
    category: '物聯網',
    status: '原型開發',
    duration: '4 個月',
  },
  {
    id: 9,
    title: '線上學習平台',
    description:
      '互動式線上教學平台，提供影片課程、即時問答、作業批改、進度追蹤和證書頒發功能。支援多種學習模式和個性化推薦。',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    technologies: ['Next.js', 'Prisma', 'tRPC', 'Tailwind', 'Vercel'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/kevin-yang/learning-platform',
    category: '教育科技',
    status: '開發中',
    duration: '7 個月',
  },
];

const experiences = [
  {
    position: '資深全端開發工程師',
    company: '創新科技股份有限公司',
    period: '2022 - 至今',
    description:
      '領導 5 人開發團隊建構可擴展的網頁應用程式。設計並實作微服務架構，將系統效能提升 40%。負責技術選型、架構設計和團隊技術指導。',
    skills: ['Vue.js', 'Node.js', 'GCP', 'PostgreSQL', 'Docker'],
    achievements: [
      '團隊生產力提升 35%',
      '系統穩定性達 99.9%',
      '獲得年度最佳員工',
    ],
  },
  {
    position: '前端開發工程師',
    company: '數位行銷代理商',
    period: '2020 - 2022',
    description:
      '為各類型客戶開發響應式網頁應用程式。與設計團隊密切合作，實現像素級完美的 UI/UX 設計。負責前端架構優化和效能調校。',
    skills: ['React', 'TypeScript', 'SCSS', 'Figma', 'Git'],
    achievements: [
      '客戶滿意度 98%',
      '網站載入速度提升 50%',
      '建立前端開發規範',
    ],
  },
  {
    position: '初級開發工程師',
    company: '新創科技公司',
    period: '2019 - 2020',
    description:
      '建構和維護公司官網及內部工具系統。參與全端開發流程，學習敏捷開發方法論。協助建立自動化測試和持續整合流程。',
    skills: ['JavaScript', 'Python', 'MongoDB', 'HTML/CSS'],
    achievements: ['獨立完成 3 個專案', '學習成長快速', '團隊合作優異'],
  },
  {
    position: '前端實習生',
    company: '軟體開發公司',
    period: '2018 - 2019',
    description:
      '協助前端開發工作，學習現代化前端框架和工具。參與程式碼審查和技術分享會議。負責維護和更新現有專案的使用者介面。',
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    achievements: ['順利完成實習任務', '獲得正職機會', '建立紮實基礎'],
  },
];

// 技能分類
const skillCategories = [
  {
    name: '前端開發',
    level: '專家',
    icon: 'SvgPalette',
    skills: [
      { name: 'Vue.js', level: 95 },
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    name: '後端開發',
    level: '高級',
    icon: 'SvgDatabase',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 83 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    name: '雲端服務',
    level: '中高級',
    icon: 'SvgSettings',
    skills: [
      { name: 'GCP', level: 82 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 80 },
    ],
  },
  {
    name: '設計工具',
    level: '中級',
    icon: 'SvgDocument',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 78 },
      { name: 'Sketch', level: 72 },
      { name: 'Photoshop', level: 75 },
    ],
  },
];

// 認證證書
const certifications = [
  {
    name: 'GCP Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: '2023.08',
    credentialId: 'GCP-PCA-2023',
    icon: 'SvgSuccessCircle',
  },
  {
    name: 'Vue.js 認證開發者',
    issuer: 'Vue School',
    date: '2023.03',
    credentialId: 'VS-VUE-ADV-2023',
    icon: 'SvgCheckCircle',
  },
  {
    name: '敏捷開發認證',
    issuer: 'Scrum Alliance',
    date: '2022.11',
    credentialId: 'CSM-SA-2022',
    icon: 'SvgInfoCircle',
  },
  {
    name: 'Google UX Design',
    issuer: 'Google',
    date: '2022.06',
    credentialId: 'GUX-CERT-2022',
    icon: 'SvgPalette',
  },
  {
    name: '全端開發專家',
    issuer: 'FreeCodeCamp',
    date: '2021.12',
    credentialId: 'FCC-FULL-2021',
    icon: 'SvgDocument',
  },
  {
    name: 'MongoDB 認證開發者',
    issuer: 'MongoDB University',
    date: '2021.09',
    credentialId: 'MDB-DEV-2021',
    icon: 'SvgDatabase',
  },
];

// 專案過濾器
const projectFilters = [
  { label: '全部', value: 'all' },
  { label: '網頁應用', value: '網頁應用' },
  { label: '行動應用', value: '行動應用' },
  { label: 'AI 應用', value: 'AI 應用' },
  { label: '物聯網', value: '物聯網' },
  { label: '開發工具', value: '開發工具' },
];

// 過濾後的專案
const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') {
    return projects;
  }
  return projects.filter(
    (project) => project.category === selectedFilter.value,
  );
});

const contactMethods = [
  {
    type: 'email',
    label: '電子郵件',
    value: 'hello@kevin-yang.dev',
    icon: 'SvgMail',
  },
  {
    type: 'phone',
    label: '電話',
    value: '+886 912-345-678',
    icon: 'SvgMobile',
  },
  {
    type: 'location',
    label: '所在地',
    value: '台北市, 台灣',
    icon: 'SvgLocation',
  },
];

// Methods
const scrollToPortfolio = () => {
  const portfolioSection = document.getElementById('portfolio');
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const viewProject = (url: string) => {
  window.open(url, '_blank');
};

const viewAllProjects = () => {
  // Navigate to projects page or show more projects
  console.log('View all projects');
};

const handleFilterChange = (filterValue: string) => {
  console.log('Filter changed to:', filterValue);
  selectedFilter.value = filterValue;

  // 強制觸發重新渲染
  nextTick(() => {
    console.log('Current filter:', selectedFilter.value);
    console.log('Filtered projects count:', filteredProjects.value.length);
  });
};

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Show success message (you can implement toast notification here)
    alert('訊息發送成功！');
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('發送訊息時發生錯誤，請重試。');
  } finally {
    isSubmitting.value = false;
  }
};

// Animation setup
let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Setup intersection observer for animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe animated elements
  setTimeout(() => {
    const animatedElements = document.querySelectorAll(
      '.project-card, .experience-card, .contact-method, .achievement-item',
    );
    animatedElements.forEach((el) => {
      observer?.observe(el);
    });
  }, 100);
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

/* Scroll animations */
.project-card,
.experience-card,
.contact-method,
.achievement-item {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.project-card.animate-in,
.experience-card.animate-in,
.contact-method.animate-in,
.achievement-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animations */
.project-card:nth-child(1).animate-in {
  transition-delay: 0.1s;
}
.project-card:nth-child(2).animate-in {
  transition-delay: 0.2s;
}
.project-card:nth-child(3).animate-in {
  transition-delay: 0.3s;
}
.project-card:nth-child(4).animate-in {
  transition-delay: 0.4s;
}
.project-card:nth-child(5).animate-in {
  transition-delay: 0.5s;
}
.project-card:nth-child(6).animate-in {
  transition-delay: 0.6s;
}

.experience-card:nth-child(1).animate-in {
  transition-delay: 0.1s;
}
.experience-card:nth-child(2).animate-in {
  transition-delay: 0.3s;
}
.experience-card:nth-child(3).animate-in {
  transition-delay: 0.5s;
}

/* Hover effects */
.social-link {
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-2px);
}

.project-card {
  transition: all 0.5s ease;
}

.project-card:hover {
  transform: translateY(-8px);
}

/* Profile avatar effect */
.profile-avatar {
  position: relative;
}

.profile-avatar::after {
  content: '';
  position: absolute;
  inset: -10px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981);
  border-radius: 50%;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
  filter: blur(20px);
}

.profile-avatar:hover::after {
  opacity: 0.7;
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

/* Gradient border animation */
@keyframes borderGradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.border-gradient-to-r {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981);
  background-size: 300% 300%;
  animation: borderGradient 4s ease infinite;
}

/* Status indicator animations */
@keyframes statusPulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-status-pulse {
  animation: statusPulse 2s ease-in-out infinite;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .floating-tech-stack {
    display: none;
  }

  .hero-content h1 {
    font-size: 3rem;
  }

  .stats-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
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

/* Experience Timeline Styles - Consistent with Site Style */
.experience-timeline {
  position: relative;
}

.experience-item {
  animation: slideInUp 0.8s ease-out;
  animation-fill-mode: both;
}

.experience-item:nth-child(1) {
  animation-delay: 0.1s;
}
.experience-item:nth-child(2) {
  animation-delay: 0.2s;
}
.experience-item:nth-child(3) {
  animation-delay: 0.3s;
}
.experience-item:nth-child(4) {
  animation-delay: 0.4s;
}

.experience-item:hover {
  transform: translateY(-8px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.achievement-item {
  animation: fadeInLeft 0.5s ease-out;
  animation-fill-mode: both;
}

.skill-tag {
  animation: scaleIn 0.4s ease-out;
  animation-fill-mode: both;
}

/* Consistent Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Consistent with site hover effects */
.experience-item .group:hover {
  transform: translateY(-4px);
}

/* Responsive Design consistent with other sections */
@media (max-width: 1024px) {
  .experience-item {
    transform: none !important;
  }

  .experience-timeline {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 5rem 0;
  }
}

/* Modern UI Enhancements - Consistent with Site Style */
.modern-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.modern-button {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  transition: all 0.3s ease;
}

.modern-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
}

/* Avatar Orbital Animation Effects */
.avatar-orbital-container {
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

/* Hover Effects for Avatar */
.avatar-orbital-container:hover .orbital-ring-1 {
  animation-duration: 15s;
  border-color: rgba(59, 130, 246, 0.8);
}

.avatar-orbital-container:hover .orbital-ring-2 {
  animation-duration: 10s;
  border-color: rgba(139, 92, 246, 0.8);
}

.avatar-orbital-container:hover .orbital-ring-3 {
  animation-duration: 5s;
  border-color: rgba(6, 182, 212, 0.8);
}

.avatar-orbital-container:hover .orbital-dot {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.9);
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.avatar-orbital-container:hover .glow-ring {
  opacity: 1;
  filter: blur(1px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .orbital-dot {
    width: 6px;
    height: 6px;
  }

  .glow-ring {
    border-width: 1px;
  }
}
</style>

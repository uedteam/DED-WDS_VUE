<template>
  <div class="crm-page">
    <!-- Header Section -->
    <header class="crm-header bg-white shadow-sm border-b">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo and Navigation -->
          <div class="flex items-center space-x-8">
            <div class="flex items-center space-x-3">
              <Icon
                name="SvgPalette"
                size="32"
                color="transparent"
                className="w-8 h-8 text-blue-600"
              />
              <Title :level="4" className="text-xl font-bold text-gray-900">
                CRM 系統
              </Title>
            </div>

            <!-- Navigation Menu -->
            <nav class="hidden md:flex space-x-6">
              <Button
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
                @click="setActiveTab('dashboard')"
              >
                儀表板
              </Button>
              <Button
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
                @click="setActiveTab('customers')"
              >
                客戶管理
              </Button>
              <Button
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
                @click="setActiveTab('sales')"
              >
                銷售機會
              </Button>
              <Button
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
                @click="setActiveTab('reports')"
              >
                報表分析
              </Button>
            </nav>
          </div>

          <!-- User Actions -->
          <div class="flex items-center space-x-4">
            <Button
              size="small"
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
              @click="showAddCustomerModal = true"
            >
              <Icon
                name="SvgPlus"
                size="16"
                color="white"
                className="w-4 h-4 mr-2"
              />
              新增客戶
            </Button>

            <!-- User Profile -->
            <div class="flex items-center space-x-2">
              <Avatar
                userName="Kevin"
                caption="系統管理員"
                size="large"
                shape="circle"
              />
              <span class="hidden sm:block text-sm text-gray-700 font-medium"
                >Kevin Yang</span
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="crm-main">
      <!-- Dashboard Section -->
      <section v-if="activeTab === 'dashboard'" class="dashboard-section py-8">
        <div class="container mx-auto px-6 lg:px-8">
          <!-- Page Header -->
          <div class="mb-8">
            <Title
              :level="1"
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
            >
              儀表板
            </Title>
            <p class="text-gray-600">總覽您的業務數據和關鍵指標</p>
          </div>

          <!-- Stats Cards -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <div
              class="stats-card bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-600 mb-1">總客戶數</p>
                  <Title
                    :level="3"
                    className="text-2xl font-bold text-gray-900"
                  >
                    {{ stats.totalCustomers }}
                  </Title>
                </div>
                <div
                  class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"
                >
                  <Icon
                    name="SvgDollar"
                    size="24"
                    color="transparent"
                    className="w-6 h-6 text-blue-600"
                  />
                </div>
              </div>
              <div class="flex items-center mt-4">
                <Tag
                  label="+12%"
                  :closable="false"
                  className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                />
                <span class="text-xs text-gray-500 ml-2">較上月</span>
              </div>
            </div>

            <div
              class="stats-card bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-600 mb-1">本月銷售額</p>
                  <Title
                    :level="3"
                    className="text-2xl font-bold text-gray-900"
                  >
                    NT$ {{ formatNumber(stats.monthlySales) }}
                  </Title>
                </div>
                <div
                  class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center"
                >
                  <Icon
                    name="SvgDollar"
                    size="24"
                    color="transparent"
                    className="w-6 h-6 text-green-600"
                  />
                </div>
              </div>
              <div class="flex items-center mt-4">
                <Tag
                  label="+8%"
                  :closable="false"
                  className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                />
                <span class="text-xs text-gray-500 ml-2">較上月</span>
              </div>
            </div>

            <div
              class="stats-card bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-600 mb-1">進行中機會</p>
                  <Title
                    :level="3"
                    className="text-2xl font-bold text-gray-900"
                  >
                    {{ stats.activeOpportunities }}
                  </Title>
                </div>
                <div
                  class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center"
                >
                  <Icon
                    name="SvgChart"
                    size="24"
                    color="transparent"
                    className="w-6 h-6 text-orange-600"
                  />
                </div>
              </div>
              <div class="flex items-center mt-4">
                <Tag
                  label="+5%"
                  :closable="false"
                  className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                />
                <span class="text-xs text-gray-500 ml-2">較上週</span>
              </div>
            </div>

            <div
              class="stats-card bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-600 mb-1">轉換率</p>
                  <Title
                    :level="3"
                    className="text-2xl font-bold text-gray-900"
                  >
                    {{ stats.conversionRate }}%
                  </Title>
                </div>
                <div
                  class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"
                >
                  <Icon
                    name="SvgTarget"
                    size="24"
                    color="transparent"
                    className="w-6 h-6 text-purple-600"
                  />
                </div>
              </div>
              <div class="flex items-center mt-4">
                <Tag
                  label="+2%"
                  :closable="false"
                  className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                />
                <span class="text-xs text-gray-500 ml-2">較上月</span>
              </div>
            </div>
          </div>

          <!-- Recent Activities -->
          <div class="bg-white rounded-xl shadow-sm border p-6 mb-8">
            <Title
              :level="3"
              className="text-lg font-semibold text-gray-900 mb-4"
            >
              最近活動
            </Title>
            <div class="space-y-4">
              <div
                v-for="activity in recentActivities"
                :key="activity.id"
                class="activity-item flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Avatar
                  :userName="(activity.userName as string) || '無名'"
                  :shape="'circle'"
                  :icon="activity.icon as string"
                  size="large"
                />
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-900">
                    {{ activity.description }}
                  </p>
                  <p class="text-xs text-gray-500">{{ activity.time }}</p>
                </div>
                <Tag
                  :label="activity.type"
                  :closable="false"
                  :className="getActivityTagClass(activity.type)"
                />
              </div>
            </div>
          </div>

          <!-- Charts Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- 銷售趨勢圖表 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <LineChart
                :title="chartConfigs.salesTrend.title"
                :categories="chartConfigs.salesTrend.categories"
                :series="chartConfigs.salesTrend.series"
                :xAxisTitle="chartConfigs.salesTrend.xAxisTitle"
                :yAxisTitle="chartConfigs.salesTrend.yAxisTitle"
                :tooltipSuffix="chartConfigs.salesTrend.tooltipSuffix"
              />
            </div>

            <!-- 客戶分布圓餅圖 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <PieChart
                :title="chartConfigs.customerDistribution.title"
                :data="chartConfigs.customerDistribution.data"
                :seriesName="chartConfigs.customerDistribution.seriesName"
              />
            </div>

            <!-- 銷售渠道柱狀圖 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <ColumnChart
                :title="chartConfigs.salesChannel.title"
                :categories="chartConfigs.salesChannel.categories"
                :series="chartConfigs.salesChannel.series"
                :xAxisTitle="chartConfigs.salesChannel.xAxisTitle"
                :yAxisTitle="chartConfigs.salesChannel.yAxisTitle"
                :tooltipSuffix="chartConfigs.salesChannel.tooltipSuffix"
              />
            </div>

            <!-- 轉換率趨勢圖 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <AreaChart
                :title="chartConfigs.conversionRate.title"
                :categories="chartConfigs.conversionRate.categories"
                :series="chartConfigs.conversionRate.series"
                :xAxisTitle="chartConfigs.conversionRate.xAxisTitle"
                :yAxisTitle="chartConfigs.conversionRate.yAxisTitle"
                :yAxisMax="chartConfigs.conversionRate.yAxisMax"
                :tooltipSuffix="chartConfigs.conversionRate.tooltipSuffix"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Customers Section -->
      <section v-if="activeTab === 'customers'" class="customers-section py-8">
        <div class="container mx-auto px-6 lg:px-8">
          <!-- Page Header -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8"
          >
            <div>
              <Title
                :level="1"
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
              >
                客戶管理
              </Title>
              <p class="text-gray-600">管理您的客戶資料和互動記錄</p>
            </div>
            <!-- <Button
              className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              @click="showAddCustomerModal = true"
            >
              <Icon
                name="SvgPlus"
                size="16"
                color="white"
                className="w-4 h-4 mr-2"
              />
              新增客戶
            </Button> -->
          </div>

          <!-- Search and Filters -->
          <div class="bg-white p-6 rounded-xl shadow-sm border mb-6">
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="flex-1">
                <Input
                  v-model="searchQuery"
                  type="text"
                  placeholder="搜尋客戶姓名、公司或電子郵件..."
                  size="large"
                  className="w-full"
                />
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <Select
                  v-model="statusFilter"
                  :dataSource="statusOptions"
                  placeholder="所有狀態"
                  suffix="SvgArrowDropDown"
                />
                <Button
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                  @click="resetFilters"
                >
                  重置篩選
                </Button>
              </div>
            </div>
          </div>

          <!-- Customers Table -->
          <div class="bg-white rounded-xl shadow-sm border overflow-hidden">
            <Table
              :columns="customerColumns"
              :dataSource="filteredCustomers"
              :showVerticalBorders="false"
              :isSprite="true"
              className="w-full"
            >
              <!-- 客戶資訊 slot -->
              <template #customerInfo="{ item }">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <Avatar
                      :userName="(item as Customer).name"
                      :caption="(item as Customer).email"
                      size="medium"
                      shape="circle"
                      className="w-10 h-10"
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {{ (item as Customer).name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ (item as Customer).email }}
                    </div>
                  </div>
                </div>
              </template>

              <!-- 公司資訊 slot -->
              <template #companyInfo="{ item }">
                <div class="">
                  <div class="text-sm text-gray-900">
                    {{ (item as Customer).company }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ (item as Customer).position }}
                  </div>
                </div>
              </template>

              <!-- 狀態 slot -->
              <template #status="{ item }">
                <div class="">
                  <Tag
                    :label="getStatusText((item as Customer).status)"
                    :closable="false"
                    :className="getStatusTagClass((item as Customer).status)"
                  />
                </div>
              </template>

              <!-- 最後聯繫 slot -->
              <template #lastContact="{ item }">
                <div class="text-sm text-gray-500">
                  {{ (item as Customer).lastContact }}
                </div>
              </template>

              <!-- 操作 slot -->
              <template #actions="{ item }">
                <div class="">
                  <div class="flex space-x-2">
                    <Button
                      size="small"
                      className="text-blue-600 hover:text-blue-900 transition-colors"
                      @click="viewCustomer(item as Customer)"
                    >
                      查看
                    </Button>
                    <Button
                      size="small"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      @click="editCustomer(item as Customer)"
                    >
                      編輯
                    </Button>
                  </div>
                </div>
              </template>
            </Table>
          </div>
        </div>
      </section>

      <!-- Sales Section -->
      <section v-if="activeTab === 'sales'" class="sales-section py-8">
        <div class="container mx-auto px-6 lg:px-8">
          <div class="text-center">
            <Title
              :level="1"
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              銷售機會
            </Title>
            <p class="text-gray-600 mb-8">追蹤和管理您的銷售機會</p>
            <div class="bg-white p-12 rounded-xl shadow-sm border">
              <Icon
                name="SvgChart"
                size="64"
                color="transparent"
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
              />
              <p class="text-gray-500">銷售機會功能開發中...</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Reports Section -->
      <section v-if="activeTab === 'reports'" class="reports-section py-8">
        <div class="container mx-auto px-6 lg:px-8">
          <!-- Page Header -->
          <div class="mb-8">
            <Title
              :level="1"
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
            >
              報表分析
            </Title>
            <p class="text-gray-600">深入分析您的業務數據和績效指標</p>
          </div>

          <!-- Comprehensive Charts Section -->
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <!-- 年度銷售對比 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <LineChart
                :title="chartConfigs.salesTrend.title"
                :categories="chartConfigs.salesTrend.categories"
                :series="chartConfigs.salesTrend.series"
                :xAxisTitle="chartConfigs.salesTrend.xAxisTitle"
                :yAxisTitle="chartConfigs.salesTrend.yAxisTitle"
                :tooltipSuffix="chartConfigs.salesTrend.tooltipSuffix"
              />
            </div>

            <!-- 客戶分布分析 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <PieChart
                :title="chartConfigs.customerDistribution.title"
                :data="chartConfigs.customerDistribution.data"
                :seriesName="chartConfigs.customerDistribution.seriesName"
              />
            </div>

            <!-- 銷售渠道表現 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <ColumnChart
                :title="chartConfigs.salesChannel.title"
                :categories="chartConfigs.salesChannel.categories"
                :series="chartConfigs.salesChannel.series"
                :xAxisTitle="chartConfigs.salesChannel.xAxisTitle"
                :yAxisTitle="chartConfigs.salesChannel.yAxisTitle"
                :tooltipSuffix="chartConfigs.salesChannel.tooltipSuffix"
              />
            </div>

            <!-- 轉換率分析 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <AreaChart
                :title="chartConfigs.conversionRate.title"
                :categories="chartConfigs.conversionRate.categories"
                :series="chartConfigs.conversionRate.series"
                :xAxisTitle="chartConfigs.conversionRate.xAxisTitle"
                :yAxisTitle="chartConfigs.conversionRate.yAxisTitle"
                :yAxisMax="chartConfigs.conversionRate.yAxisMax"
                :tooltipSuffix="chartConfigs.conversionRate.tooltipSuffix"
              />
            </div>

            <!-- 季度業績比較 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <ColumnChart
                :title="chartConfigs.quarterlyPerformance.title"
                :categories="chartConfigs.quarterlyPerformance.categories"
                :series="chartConfigs.quarterlyPerformance.series"
                :xAxisTitle="chartConfigs.quarterlyPerformance.xAxisTitle"
                :yAxisTitle="chartConfigs.quarterlyPerformance.yAxisTitle"
                :tooltipSuffix="chartConfigs.quarterlyPerformance.tooltipSuffix"
              />
            </div>

            <!-- 產品銷售排行 -->
            <div class="bg-white rounded-xl shadow-sm border p-6">
              <ColumnChart
                :title="chartConfigs.productSales.title"
                :categories="chartConfigs.productSales.categories"
                :series="chartConfigs.productSales.series"
                :xAxisTitle="chartConfigs.productSales.xAxisTitle"
                :yAxisTitle="chartConfigs.productSales.yAxisTitle"
                :tooltipSuffix="chartConfigs.productSales.tooltipSuffix"
                :showDataLabels="chartConfigs.productSales.showDataLabels"
                type="bar"
              />
            </div>
          </div>

          <!-- 業績總結卡片 -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-blue-100 text-sm">總營收</p>
                  <p class="text-2xl font-bold">NT$ 24,500,000</p>
                </div>
                <Icon
                  name="SvgDollar"
                  size="32"
                  color="white"
                  className="opacity-80"
                />
              </div>
            </div>

            <div
              class="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-green-100 text-sm">客戶成長</p>
                  <p class="text-2xl font-bold">+158%</p>
                </div>
                <Icon
                  name="SvgChart"
                  size="32"
                  color="white"
                  className="opacity-80"
                />
              </div>
            </div>

            <div
              class="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-purple-100 text-sm">市場佔有率</p>
                  <p class="text-2xl font-bold">32.5%</p>
                </div>
                <Icon
                  name="SvgTarget"
                  size="32"
                  color="white"
                  className="opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Add Customer Modal -->
    <div
      v-if="showAddCustomerModal"
      class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeModal"
    >
      <div
        class="modal-content bg-white rounded-xl shadow-xl max-w-md w-full mx-4"
        @click.stop
      >
        <div class="p-6">
          <div class="flex items-center justify-between mb-6">
            <Title :level="3" className="text-lg font-semibold text-gray-900">
              新增客戶
            </Title>
            <Button
              size="small"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              @click="closeModal"
            >
              <Icon
                name="SvgClose"
                size="20"
                color="currentColor"
                className="w-5 h-5"
              />
            </Button>
          </div>

          <form @submit.prevent="addCustomer" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >姓名</label
              >
              <Input
                v-model="newCustomer.name"
                type="text"
                placeholder="輸入客戶姓名"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >電子郵件</label
              >
              <Input
                v-model="newCustomer.email"
                type="email"
                placeholder="輸入電子郵件"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >公司</label
              >
              <Input
                v-model="newCustomer.company"
                type="text"
                placeholder="輸入公司名稱"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >職位</label
              >
              <Input
                v-model="newCustomer.position"
                type="text"
                placeholder="輸入職位"
              />
            </div>

            <div class="flex space-x-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                新增客戶
              </Button>
              <Button
                type="button"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                @click="closeModal"
              >
                取消
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import {
  Title,
  Button,
  Input,
  Tag,
  Icon,
  Select,
  Table,
  Avatar,
  LineChart,
  PieChart,
  ColumnChart,
  AreaChart,
} from '../../libs/src/index';
import { useChartData } from '../../libs/src/composable/useChartData';

// Type definitions
interface Customer {
  id: number;
  name: string;
  email: string;
  company: string;
  position: string;
  status: 'active' | 'inactive' | 'potential';
  lastContact: string;
}

// State management
const activeTab = ref('dashboard');
const showAddCustomerModal = ref(false);
const searchQuery = ref('');
const statusFilter = ref('');

// 使用圖表資料 composable
const {
  chartConfigs,
  crmStats,
  recentActivities,
  customers,
  statusOptions,
  customerColumns,
  addCustomer: addCustomerToStore,
  addActivity,
} = useChartData();

// 使用 computed 來讓資料具有響應性
const stats = computed(() => crmStats.value);

// New customer form data
const newCustomer = reactive({
  name: '',
  email: '',
  company: '',
  position: '',
});

// Methods
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};

const formatNumber = (num: number) => {
  return num.toLocaleString();
};

const getActivityTagClass = (type: string) => {
  const classes = {
    新客戶: 'bg-green-100 text-green-800 text-xs px-2 py-1 rounded',
    銷售: 'bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded',
    訊息: 'bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded',
    會議: 'bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded',
  };
  return (
    classes[type as keyof typeof classes] ||
    'bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded'
  );
};

const getStatusText = (status: string) => {
  const statusTexts = {
    active: '活躍',
    inactive: '非活躍',
    potential: '潛在客戶',
  };
  return statusTexts[status as keyof typeof statusTexts] || status;
};

const getStatusTagClass = (status: string) => {
  const classes = {
    active: 'bg-green-100 text-green-800 text-xs px-2 py-1 rounded',
    inactive: 'bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded',
    potential: 'bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded',
  };
  return (
    classes[status as keyof typeof classes] ||
    'bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded'
  );
};

const filteredCustomers = computed(() => {
  return customers.value.filter((customer) => {
    const matchesSearch =
      searchQuery.value === '' ||
      customer.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesStatus =
      statusFilter.value === '' || customer.status === statusFilter.value;

    return matchesSearch && matchesStatus;
  });
});

const resetFilters = () => {
  searchQuery.value = '';
  statusFilter.value = '';
};

const viewCustomer = (customer: Customer) => {
  console.log('查看客戶:', customer);
  // 實現查看客戶邏輯
};

const editCustomer = (customer: Customer) => {
  console.log('編輯客戶:', customer);
  // 實現編輯客戶邏輯
};

const addCustomer = () => {
  if (newCustomer.name && newCustomer.email) {
    // 使用 composable 中的方法新增客戶
    addCustomerToStore({
      name: newCustomer.name,
      email: newCustomer.email,
      company: newCustomer.company || '未設定',
      position: newCustomer.position || '未設定',
    });

    // 新增活動記錄
    addActivity({
      userName: 'System',
      description: `新客戶 "${newCustomer.name}" 已完成註冊`,
      type: '新客戶',
      icon: 'SvgUser',
    });

    // 重置表單
    Object.assign(newCustomer, {
      name: '',
      email: '',
      company: '',
      position: '',
    });

    closeModal();
  }
};

const closeModal = () => {
  showAddCustomerModal.value = false;
  // 重置表單
  Object.assign(newCustomer, {
    name: '',
    email: '',
    company: '',
    position: '',
  });
};
</script>

<style scoped>
/* Animation classes */
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

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Header animations */
.crm-header {
  animation: fadeInUp 0.6s ease-out;
}

/* Stats card animations */
.stats-card {
  animation: fadeInUp 0.8s ease-out;
  transition: all 0.3s ease;
}

.stats-card:nth-child(1) {
  animation-delay: 0.1s;
}

.stats-card:nth-child(2) {
  animation-delay: 0.2s;
}

.stats-card:nth-child(3) {
  animation-delay: 0.3s;
}

.stats-card:nth-child(4) {
  animation-delay: 0.4s;
}

.stats-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

/* Activity item hover effect */
.activity-item {
  transition: all 0.3s ease;
}

.activity-item:hover {
  transform: translateX(5px);
}

/* Table component custom styles */
.ded-table-container {
  background: transparent !important;
}

.ded-table-thead {
  background-color: #f9fafb;
}

.ded-table-thead-tr-th {
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  letter-spacing: 0.05em;
}

.ded-table-tbody-tr {
  transition: all 0.2s ease;
}

.ded-table-tbody-tr:hover {
  background-color: rgba(59, 130, 246, 0.05) !important;
}

.ded-table-tbody-tr-td {
  padding: 0 !important;
  border: none !important;
}

/* Modal animations */
.modal-overlay {
  animation: fadeInUp 0.3s ease-out;
}

.modal-content {
  animation: slideInFromRight 0.3s ease-out;
  transition: all 0.3s ease;
}

/* Custom scrollbar */
.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Button hover effects */
nav button {
  position: relative;
  overflow: hidden;
}

nav button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(59, 130, 246, 0.1),
    transparent
  );
  transition: left 0.5s;
}

nav button:hover::before {
  left: 100%;
}

/* Responsive design */
@media (max-width: 768px) {
  .crm-header h1 {
    font-size: 1.5rem;
  }

  .stats-card {
    margin-bottom: 1rem;
  }

  .modal-content {
    margin: 1rem;
    max-width: calc(100% - 2rem);
  }
}

/* Form focus effects */
input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Loading states */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

/* Custom transitions */
.section-transition {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>

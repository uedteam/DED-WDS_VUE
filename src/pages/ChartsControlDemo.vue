<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4">
      <!-- 標題 -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">圖表組件控制台</h1>
        <p class="text-lg text-gray-600">互動式圖表組件展示與程式碼範例</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 控制面板 -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">控制面板</h2>

            <div class="space-y-6">
              <!-- 圖表類型 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3"
                  >圖表類型</label
                >
                <select
                  v-model="selectedChartType"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="line">折線圖</option>
                  <option value="area">面積圖</option>
                  <option value="column">長條圖</option>
                  <option value="pie">圓餅圖</option>
                  <option value="donut">甜甜圈圖</option>
                </select>
              </div>

              <!-- 資料集選擇 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3"
                  >資料集</label
                >
                <select
                  v-model="selectedDataset"
                  class="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option
                    v-for="option in datasetOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <!-- 圖表高度 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">
                  圖表高度: {{ chartHeight }}px
                </label>
                <input
                  type="range"
                  v-model="chartHeight"
                  min="300"
                  max="600"
                  step="50"
                  class="w-full"
                />
              </div>

              <!-- 顯示選項 -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <label class="text-sm font-medium text-gray-700"
                    >顯示圖例</label
                  >
                  <Toggle v-model="showLegend" />
                </div>

                <div class="flex items-center justify-between">
                  <label class="text-sm font-medium text-gray-700"
                    >顯示資料標籤</label
                  >
                  <Toggle v-model="showDataLabels" />
                </div>

                <div
                  class="flex items-center justify-between"
                  v-if="selectedChartType !== 'pie'"
                >
                  <label class="text-sm font-medium text-gray-700"
                    >顯示網格線</label
                  >
                  <Toggle v-model="showGridLines" />
                </div>
              </div>

              <!-- 按鈕 -->
              <div class="pt-4 border-t space-y-3">
                <button
                  class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
                  @click="generateRandomData"
                >
                  產生隨機資料
                </button>
                <button
                  class="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors"
                  @click="resetSettings"
                >
                  重設設定
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 圖表展示區 -->
        <div class="lg:col-span-2 space-y-8">
          <!-- 圖表 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold text-gray-900">
                {{ currentChartData.title || '範例圖表' }}
              </h2>
              <div class="text-sm text-gray-500">
                {{ selectedChartType.toUpperCase() }} Chart
                <span class="ml-2 text-xs">
                  (圖例: {{ showLegend ? '顯示' : '隱藏' }}
                  <span v-if="selectedChartType !== 'pie'">
                    | 網格線: {{ showGridLines ? '開啟' : '關閉' }} </span
                  >)
                </span>
              </div>
            </div>

            <div class="chart-container" :key="chartKey">
              <!-- Line Chart -->
              <LineChart
                v-if="selectedChartType === 'line'"
                :title="currentChartData.title"
                :categories="currentChartData.categories"
                :series="currentChartData.series"
                :height="chartHeight"
                :showLegend="showLegend"
                :showDataLabels="showDataLabels"
                :showGridLines="showGridLines"
              />

              <!-- Area Chart -->
              <AreaChart
                v-else-if="selectedChartType === 'area'"
                :title="currentChartData.title"
                :categories="currentChartData.categories"
                :series="currentChartData.series"
                :height="chartHeight"
                :showLegend="showLegend"
                :showDataLabels="showDataLabels"
                :showGridLines="showGridLines"
              />

              <!-- Column Chart -->
              <ColumnChart
                v-else-if="selectedChartType === 'column'"
                :title="currentChartData.title"
                :categories="currentChartData.categories"
                :series="currentChartData.series"
                :height="chartHeight"
                :showLegend="showLegend"
                :showDataLabels="showDataLabels"
                :showGridLines="showGridLines"
              />

              <!-- Pie Chart -->
              <PieChart
                v-else-if="selectedChartType === 'pie'"
                :title="currentChartData.title"
                :data="currentChartData.data"
                :height="chartHeight"
                :showLegend="showLegend"
                :showDataLabels="showDataLabels"
              />
              <DonutChart
                v-else-if="selectedChartType === 'donut'"
                :title="currentChartData.title"
                :data="currentChartData.data"
                :height="chartHeight"
                :showLegend="showLegend"
                :showDataLabels="showDataLabels"
                innerSize="60%"
              />
            </div>
          </div>

          <!-- 程式碼 -->
          <CodeBlock
            :code="codeExample"
            language="html"
            title="Vue 組件程式碼範例"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import {
  LineChart,
  AreaChart,
  ColumnChart,
  PieChart,
  DonutChart,
  Toggle,
  CodeBlock,
} from '../../libs/src/index';
import { useChartData } from '../../libs/src/composable/useChartData';

// 圖表資料
const { chartConfigs } = useChartData();

// 響應式狀態
const selectedChartType = ref('line');
const selectedDataset = ref('salesTrend');
const chartHeight = ref(400);
const showLegend = ref(true);
const showDataLabels = ref(false);
const showGridLines = ref(true);
const chartKey = ref(0);

// 資料集選項
const datasetOptions = [
  { label: '銷售趨勢', value: 'salesTrend' },
  { label: '客戶分布', value: 'customerDistribution' },
  { label: '銷售渠道', value: 'salesChannel' },
  { label: '轉換率趨勢', value: 'conversionRate' },
  { label: '季度業績', value: 'quarterlyPerformance' },
  { label: '產品銷售', value: 'productSales' },
];

// 當前圖表資料
const currentChartData = computed(() => {
  const data = chartConfigs.value[selectedDataset.value];
  if (!data) return {};

  // 為圓餅圖調整資料格式
  if (
    selectedChartType.value === 'pie' ||
    selectedChartType.value === 'donut'
  ) {
    if (selectedDataset.value !== 'customerDistribution') {
      // 將其他資料轉換為圓餅圖/甜甜圈圖格式
      const series = data.series?.[0];
      if (series && data.categories) {
        return {
          title: data.title,
          data: data.categories.map((category, index) => ({
            name: category,
            y: series.data[index],
            color: `hsl(${(index * 60) % 360}, 70%, 50%)`,
          })),
        };
      }
    }
  } else {
    // 為其他圖表類型調整資料格式（當選擇客戶分布時）
    if (selectedDataset.value === 'customerDistribution' && data.data) {
      // 將圓餅圖格式轉換為其他圖表類型格式
      return {
        title: data.title,
        categories: data.data.map((item) => item.name),
        series: [
          {
            name: data.seriesName || '客戶數量',
            data: data.data.map((item) => item.y),
            color: '#3B82F6', // 使用藍色作為預設顏色
          },
        ],
      };
    }
  }

  return data;
});

// 計算屬性
const codeExample = computed(() => {
  const componentName = {
    line: 'LineChart',
    area: 'AreaChart',
    column: 'ColumnChart',
    pie: 'PieChart',
    donut: 'DonutChart',
  }[selectedChartType.value];

  const baseProps = [
    '<template>',
    `  <${componentName}`,
    '    title="範例圖表"',
    `    :height="${chartHeight.value}"`,
    `    :showLegend="${showLegend.value}"`,
    `    :showDataLabels="${showDataLabels.value}"`,
  ];

  // 圓餅圖不需要 showGridLines 屬性
  if (selectedChartType.value !== 'pie') {
    baseProps.push(`    :showGridLines="${showGridLines.value}"`);
  }

  const endProps = [
    '  />',
    '</template>',
    '',
    '<' + 'script setup>',
    `import { ${componentName} } from '@ded-wds-vue/ui';`,
    '</' + 'script>',
  ];

  return [...baseProps, ...endProps].join('\n');
});

// 方法
const generateRandomData = () => {
  const data = currentChartData.value;

  if (selectedChartType.value === 'pie' && data.data) {
    // 為圓餅圖產生隨機資料
    data.data.forEach((item) => {
      item.y = Math.floor(Math.random() * 1000) + 100;
    });
  } else if (data.series) {
    // 為其他圖表產生隨機資料
    data.series.forEach((series) => {
      if (series.data) {
        series.data = series.data.map(
          () => Math.floor(Math.random() * 500) + 50,
        );
      }
    });
  }

  // 強制重新渲染圖表
  chartKey.value++;
};

const resetSettings = () => {
  selectedChartType.value = 'line';
  selectedDataset.value = 'salesTrend';
  chartHeight.value = 400;
  showLegend.value = true;
  showDataLabels.value = false;
  showGridLines.value = true;
  chartKey.value++;
};

// 監聽器
watch(selectedChartType, () => {
  // 僅重新渲染圖表，不強制切換資料集
  chartKey.value++;
});

watch([selectedDataset, showLegend, showDataLabels, showGridLines], () => {
  chartKey.value++;
});
</script>

<style scoped>
.chart-container {
  transition: all 0.3s ease;
}
</style>

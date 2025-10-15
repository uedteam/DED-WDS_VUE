<template>
  <div class="p-6 space-y-8">
    <h1 class="text-2xl font-bold text-gray-900">圖表間距修復測試</h1>

    <!-- 錯誤顯示區域 -->
    <div
      v-if="error"
      class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
    >
      <div class="flex items-center">
        <svg
          class="w-5 h-5 text-red-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 class="text-red-800 font-medium">圖表載入錯誤</h3>
      </div>
      <p class="text-red-700 mt-2">{{ error.message }}</p>
      <button
        @click="retryLoadData"
        class="mt-3 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
      >
        重新載入
      </button>
    </div>

    <!-- 載入狀態 -->
    <div v-if="loading" class="flex items-center justify-center py-8">
      <div
        class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
      ></div>
      <span class="ml-3 text-gray-600">載入圖表資料中...</span>
    </div>

    <!-- 圖表內容 -->
    <template v-if="!loading && !error">
      <!-- 使用 useChartData 的資料 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4">銷售趨勢圖 - 修復後</h2>
        <ChartErrorBoundary @error="handleChartError">
          <LineChart
            v-if="isValidChartConfig(chartConfigs.salesTrend)"
            :title="chartConfigs.salesTrend.title"
            :categories="chartConfigs.salesTrend.categories"
            :series="chartConfigs.salesTrend.series"
            :height="400"
            :xAxisTitle="chartConfigs.salesTrend.xAxisTitle"
            :yAxisTitle="chartConfigs.salesTrend.yAxisTitle"
            :tooltipSuffix="chartConfigs.salesTrend.tooltipSuffix"
            :showLegend="true"
            :showDataLabels="false"
            :showGridLines="true"
          />
          <div v-else class="text-center py-8 text-gray-500">
            銷售趨勢圖資料格式錯誤
          </div>
        </ChartErrorBoundary>
      </div>

      <!-- 銷售渠道圖表 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4">銷售渠道表現 - 修復後</h2>
        <ChartErrorBoundary @error="handleChartError">
          <ColumnChart
            v-if="isValidChartConfig(chartConfigs.salesChannel)"
            :title="chartConfigs.salesChannel.title"
            :categories="chartConfigs.salesChannel.categories"
            :series="chartConfigs.salesChannel.series"
            :height="400"
            :xAxisTitle="chartConfigs.salesChannel.xAxisTitle"
            :yAxisTitle="chartConfigs.salesChannel.yAxisTitle"
            :tooltipSuffix="chartConfigs.salesChannel.tooltipSuffix"
            :showLegend="true"
            :showDataLabels="false"
            :showGridLines="true"
          />
          <div v-else class="text-center py-8 text-gray-500">
            銷售渠道圖表資料格式錯誤
          </div>
        </ChartErrorBoundary>
      </div>

      <!-- 季度業績比較 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4">季度業績比較 - 修復後</h2>
        <ChartErrorBoundary @error="handleChartError">
          <ColumnChart
            v-if="isValidChartConfig(chartConfigs.quarterlyPerformance)"
            :title="chartConfigs.quarterlyPerformance.title"
            :categories="chartConfigs.quarterlyPerformance.categories"
            :series="chartConfigs.quarterlyPerformance.series"
            :height="400"
            :xAxisTitle="chartConfigs.quarterlyPerformance.xAxisTitle"
            :yAxisTitle="chartConfigs.quarterlyPerformance.yAxisTitle"
            :tooltipSuffix="chartConfigs.quarterlyPerformance.tooltipSuffix"
            :showLegend="true"
            :showDataLabels="false"
            :showGridLines="true"
          />
          <div v-else class="text-center py-8 text-gray-500">
            季度業績圖表資料格式錯誤
          </div>
        </ChartErrorBoundary>
      </div>

      <!-- 產品銷售排行（水平長條圖） -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4">產品銷售排行 - 修復後</h2>
        <ChartErrorBoundary @error="handleChartError">
          <ColumnChart
            v-if="isValidChartConfig(chartConfigs.productSales)"
            :title="chartConfigs.productSales.title"
            :categories="chartConfigs.productSales.categories"
            :series="chartConfigs.productSales.series"
            :height="400"
            :xAxisTitle="chartConfigs.productSales.xAxisTitle"
            :yAxisTitle="chartConfigs.productSales.yAxisTitle"
            :tooltipSuffix="chartConfigs.productSales.tooltipSuffix"
            :type="getValidChartType(chartConfigs.productSales.type)"
            :showLegend="false"
            :showDataLabels="true"
            :showGridLines="true"
          />
          <div v-else class="text-center py-8 text-gray-500">
            產品銷售排行圖表資料格式錯誤
          </div>
        </ChartErrorBoundary>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onErrorCaptured } from 'vue';
import { LineChart, ColumnChart } from '../../../libs/src/index';
import { useChartData } from '../../../libs/src/composable/useChartData';
import ChartErrorBoundary from './ChartErrorBoundary.vue';
import { useToast } from '../../../libs/src/composable/useToast';
import {
  chartErrorHandler,
  chartRetryManager,
  handleChartError as utilHandleChartError,
} from './chartErrorUtils';

// 使用錯誤處理和通知
const { showToast } = useToast();

// 響應式狀態
const loading = ref(true);
const error = ref<Error | null>(null);

// 使用圖表資料
const { chartConfigs } = useChartData();

// 驗證圖表配置是否有效
const isValidChartConfig = (config: any): boolean => {
  try {
    if (!config) return false;

    // 檢查必要的屬性
    if (
      !config.categories ||
      !Array.isArray(config.categories) ||
      config.categories.length === 0
    ) {
      return false;
    }

    if (
      !config.series ||
      !Array.isArray(config.series) ||
      config.series.length === 0
    ) {
      return false;
    }

    // 檢查系列資料的有效性
    for (const series of config.series) {
      if (!series.name || !series.data || !Array.isArray(series.data)) {
        return false;
      }

      // 檢查資料長度是否與分類一致
      if (series.data.length !== config.categories.length) {
        console.warn(`系列 "${series.name}" 的資料長度與分類不符`);
      }
    }

    return true;
  } catch (err) {
    const chartError = utilHandleChartError(
      err instanceof Error ? err : new Error('驗證圖表配置時發生未知錯誤'),
      '圖表配置驗證',
    );
    console.error('驗證圖表配置時發生錯誤:', chartError);
    return false;
  }
};

// 取得有效的圖表類型
const getValidChartType = (type: string): 'column' | 'bar' => {
  if (type === 'bar' || type === 'column') {
    return type as 'column' | 'bar';
  }
  return 'column'; // 預設值
};

// 處理圖表錯誤
const handleChartError = (chartError: Error) => {
  const errorDetails = chartErrorHandler.handleRenderError(
    chartError,
    '圖表渲染',
    chartConfigs.value,
  );

  console.error('圖表渲染錯誤:', errorDetails);
  showToast('圖表載入失敗，請稍後再試', 'error');

  // 可以在這裡添加錯誤追蹤或回報機制
  // 例如：sendErrorToAnalytics(errorDetails);
};

// 重新載入資料
const retryLoadData = async () => {
  try {
    await chartRetryManager.executeWithRetry(
      async () => {
        loading.value = true;
        error.value = null;

        // 模擬資料重新載入過程
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // 檢查圖表配置是否有效
        if (!chartConfigs.value) {
          throw chartErrorHandler.createError(
            '無法載入圖表配置資料',
            'CHART_CONFIG_LOAD_ERROR',
            '圖表配置載入',
          );
        }

        // 驗證所有圖表配置
        const configs = chartConfigs.value;
        const configKeys = [
          'salesTrend',
          'salesChannel',
          'quarterlyPerformance',
          'productSales',
        ];

        for (const key of configKeys) {
          if (!isValidChartConfig(configs[key])) {
            throw chartErrorHandler.handleValidationError(
              `${key} 圖表配置無效`,
              key,
              configs[key],
            );
          }
        }

        loading.value = false;
        showToast('圖表資料載入成功', 'success');
      },
      'loadChartData',
      '圖表資料載入',
    );
  } catch (err) {
    const chartError = chartErrorHandler.handleDataLoadError(
      err instanceof Error ? err : new Error('未知的載入錯誤'),
      '圖表資料重新載入',
    );

    console.error('重新載入資料時發生錯誤:', chartError);
    error.value = chartError;
    loading.value = false;
    showToast('資料載入失敗', 'error');
  }
};

// 組件級錯誤捕獲
onErrorCaptured((err, target, errorInfo) => {
  const chartError = chartErrorHandler.createError(
    `組件渲染錯誤: ${err.message}`,
    'COMPONENT_ERROR',
    '組件錯誤捕獲',
    {
      target: target?.$?.type?.name || 'Unknown Component',
      errorInfo,
      originalError: err,
    },
  );

  chartErrorHandler.logError(chartError);
  console.error('組件錯誤捕獲:', chartError);

  error.value = chartError;
  loading.value = false;

  showToast('頁面發生錯誤，請重新整理', 'error');

  // 返回 false 阻止錯誤繼續向上傳播
  return false;
});

// 初始化載入
onMounted(async () => {
  try {
    await chartRetryManager.executeWithRetry(
      async () => {
        // 模擬初始載入過程
        await new Promise((resolve) => setTimeout(resolve, 500));

        // 驗證所有圖表配置
        const configs = chartConfigs.value;
        const configKeys = [
          'salesTrend',
          'salesChannel',
          'quarterlyPerformance',
          'productSales',
        ];

        for (const key of configKeys) {
          if (!isValidChartConfig(configs[key])) {
            throw chartErrorHandler.handleValidationError(
              `${key} 圖表配置無效`,
              key,
              configs[key],
            );
          }
        }

        loading.value = false;
      },
      'initializeCharts',
      '圖表初始化',
    );
  } catch (err) {
    const chartError = chartErrorHandler.handleDataLoadError(
      err instanceof Error ? err : new Error('初始化失敗'),
      '圖表初始化',
    );

    console.error('初始化載入失敗:', chartError);
    error.value = chartError;
    loading.value = false;
  }
});
</script>

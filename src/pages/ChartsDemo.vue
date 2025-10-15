<template>
  <div class="charts-demo-page p-8 bg-gray-50 min-h-screen">
    <!-- Page Header -->
    <div class="mb-8">
      <Title :level="1" className="text-3xl font-bold text-gray-900 mb-2">
        圖表組件展示 - 新版本
      </Title>
      <p class="text-gray-600">展示組件化的圖表系統</p>
    </div>

    <!-- 基本圖表展示 -->
    <div class="mb-12">
      <Title :level="2" className="text-2xl font-semibold text-gray-800 mb-6">
        基本圖表組件
      </Title>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 線圖範例 -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <LineChart
            title="月度銷售趨勢"
            :categories="basicExamples.line.categories"
            :series="basicExamples.line.series"
            xAxisTitle="時間軸 (月份)"
            yAxisTitle="銷售額 (萬元)"
            tooltipSuffix=" 萬元"
            :height="300"
          />
        </div>

        <!-- 圓餅圖範例 -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <PieChart
            title="市場佔有率"
            :data="basicExamples.pie.data"
            seriesName="佔有率"
            :height="300"
          />
        </div>

        <!-- 柱狀圖範例 -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <ColumnChart
            title="季度業績比較"
            :categories="basicExamples.column.categories"
            :series="basicExamples.column.series"
            xAxisTitle="季度區間"
            yAxisTitle="營收 (百萬元)"
            tooltipSuffix=" 百萬元"
            type="column"
            :height="300"
          />
        </div>

        <!-- 面積圖範例 -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <AreaChart
            title="用戶增長趨勢"
            :categories="basicExamples.area.categories"
            :series="basicExamples.area.series"
            xAxisTitle="時間軸 (月份)"
            yAxisTitle="用戶數 (千人)"
            tooltipSuffix=" 千人"
            :height="300"
          />
        </div>
      </div>
    </div>

    <!-- 進階圖表展示 -->
    <div class="mb-12">
      <Title :level="2" className="text-2xl font-semibold text-gray-800 mb-6">
        進階圖表範例
      </Title>

      <div class="grid grid-cols-1 gap-8">
        <!-- 橫向柱狀圖 -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <ColumnChart
            title="產品銷售排行 TOP 10"
            :categories="advancedExamples.bar.categories"
            :series="advancedExamples.bar.series"
            xAxisTitle="產品類別"
            yAxisTitle="銷售量 (件)"
            tooltipSuffix=" 件"
            type="bar"
            :showDataLabels="true"
            :height="400"
          />
        </div>

        <!-- 多系列線圖 -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <LineChart
            title="多年度收益對比分析"
            :categories="advancedExamples.multiLine.categories"
            :series="advancedExamples.multiLine.series"
            xAxisTitle="時間軸 (月份)"
            yAxisTitle="收益 (萬元)"
            tooltipSuffix=" 萬元"
            :height="400"
          />
        </div>
      </div>
    </div>

    <!-- 互動式圖表控制 -->
    <div class="mb-12">
      <Title :level="2" className="text-2xl font-semibold text-gray-800 mb-6">
        互動式圖表控制
      </Title>

      <div class="bg-white rounded-xl shadow-sm border p-6">
        <div class="mb-6 flex flex-wrap gap-4">
          <Button
            @click="updateChartData('sales')"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            更新銷售數據
          </Button>
          <Button
            @click="updateChartData('growth')"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            更新增長數據
          </Button>
          <Button
            @click="updateChartData('decline')"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            更新下降數據
          </Button>
          <Button
            @click="resetChartData()"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
          >
            重置數據
          </Button>
        </div>

        <LineChart
          title="動態數據展示"
          :categories="interactiveChart.categories"
          :series="interactiveChart.series"
          xAxisTitle="時間序列"
          yAxisTitle="數值範圍"
          :height="350"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import {
  Title,
  Button,
  LineChart,
  PieChart,
  ColumnChart,
  AreaChart,
} from '../../libs/src/index';

// 基本範例數據
const basicExamples = reactive({
  line: {
    categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
    series: [
      {
        name: '本年',
        data: [120, 135, 150, 142, 168, 175],
        color: '#3B82F6',
      },
      {
        name: '去年',
        data: [100, 115, 130, 125, 140, 155],
        color: '#10B981',
      },
    ],
  },
  pie: {
    data: [
      { name: '產品 A', y: 35, color: '#3B82F6' },
      { name: '產品 B', y: 25, color: '#10B981' },
      { name: '產品 C', y: 20, color: '#F59E0B' },
      { name: '產品 D', y: 15, color: '#EF4444' },
      { name: '其他', y: 5, color: '#8B5CF6' },
    ],
  },
  column: {
    categories: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      {
        name: '2024年',
        data: [5.2, 6.8, 7.1, 8.5],
        color: '#3B82F6',
      },
      {
        name: '2023年',
        data: [4.8, 5.9, 6.2, 7.1],
        color: '#10B981',
      },
    ],
  },
  area: {
    categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
    series: [
      {
        name: '新用戶',
        data: [12, 15, 18, 22, 28, 35],
        color: '#06B6D4',
        fillOpacity: 0.3,
      },
    ],
  },
});

// 進階範例數據
const advancedExamples = reactive({
  bar: {
    categories: [
      '筆記型電腦',
      '智慧手機',
      '平板電腦',
      '智慧手錶',
      '耳機',
      '鍵盤',
      '滑鼠',
      '顯示器',
      '印表機',
      '路由器',
    ],
    series: [
      {
        name: '銷售量',
        data: [2850, 2340, 1890, 1560, 1240, 980, 850, 720, 560, 420],
        color: '#8B5CF6',
      },
    ],
  },
  multiLine: {
    categories: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ],
    series: [
      {
        name: '2024年',
        data: [120, 135, 150, 142, 168, 175, 190, 185, 200, 215, 245, 280],
        color: '#3B82F6',
      },
      {
        name: '2023年',
        data: [100, 115, 130, 125, 140, 155, 160, 165, 170, 180, 195, 210],
        color: '#10B981',
      },
      {
        name: '2022年',
        data: [85, 95, 110, 105, 120, 135, 140, 145, 150, 160, 175, 185],
        color: '#F59E0B',
      },
    ],
  },
});

// 互動式圖表數據
const interactiveChart = reactive({
  categories: ['點1', '點2', '點3', '點4', '點5', '點6', '點7', '點8'],
  series: [
    {
      name: '數據系列',
      data: [10, 20, 15, 25, 30, 28, 35, 40],
      color: '#3B82F6',
    },
  ],
});

// 生成隨機數據的函數
const generateRandomData = (length: number, min: number, max: number) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
};

// 更新圖表數據
const updateChartData = (type: 'sales' | 'growth' | 'decline') => {
  let newData: number[];
  let color: string;

  switch (type) {
    case 'sales':
      newData = generateRandomData(8, 50, 100);
      color = '#10B981';
      break;
    case 'growth':
      newData = generateRandomData(8, 80, 150);
      color = '#F59E0B';
      break;
    case 'decline':
      newData = generateRandomData(8, 10, 50);
      color = '#EF4444';
      break;
    default:
      newData = generateRandomData(8, 10, 100);
      color = '#3B82F6';
  }

  interactiveChart.series[0].data = newData;
  interactiveChart.series[0].color = color;
};

// 重置圖表數據
const resetChartData = () => {
  interactiveChart.series[0].data = [10, 20, 15, 25, 30, 28, 35, 40];
  interactiveChart.series[0].color = '#3B82F6';
};
</script>

<style scoped>
/* 自定義樣式 */
.charts-demo-page {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 卡片懸停效果 */
.bg-white {
  transition: all 0.3s ease;
}

.bg-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}
</style>

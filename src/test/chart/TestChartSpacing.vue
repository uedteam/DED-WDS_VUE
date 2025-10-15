<template>
  <div class="p-6 space-y-8">
    <h1 class="text-2xl font-bold text-gray-900">圖表間距測試</h1>
    
    <!-- 測試案例：長分類名稱的折線圖 -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">折線圖 - 長分類名稱測試</h2>
      <LineChart
        title="月度銷售趨勢"
        :categories="longCategories"
        :series="lineSeriesData"
        :height="400"
        :showLegend="true"
        :showDataLabels="false"
        :showGridLines="true"
      />
    </div>

    <!-- 測試案例：多系列的長條圖 -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">長條圖 - 多系列測試</h2>
      <ColumnChart
        title="產品銷售對比"
        :categories="shortCategories"
        :series="multiSeriesData"
        :height="400"
        :showLegend="true"
        :showDataLabels="true"
        :showGridLines="true"
      />
    </div>

    <!-- 測試案例：隱藏圖例的圖表 -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">折線圖 - 隱藏圖例測試</h2>
      <LineChart
        title="簡化趨勢圖"
        :categories="mediumCategories"
        :series="singleSeriesData"
        :height="350"
        :showLegend="false"
        :showDataLabels="false"
        :showGridLines="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LineChart, ColumnChart } from '../../../libs/src/index';

// 測試資料
const longCategories = ref([
  '第一季度銷售報告',
  '第二季度成長分析',
  '第三季度市場評估',
  '第四季度年終總結',
  '下一年度預測規劃',
  '競爭對手分析報告'
]);

const shortCategories = ref([
  'Q1', 'Q2', 'Q3', 'Q4'
]);

const mediumCategories = ref([
  '一月', '二月', '三月', '四月', '五月', '六月'
]);

const lineSeriesData = ref([
  {
    name: '實際銷售額（萬元）',
    data: [120, 150, 180, 200, 160, 140],
    color: '#3b82f6'
  },
  {
    name: '預期銷售額（萬元）',
    data: [100, 140, 170, 190, 170, 150],
    color: '#ef4444'
  }
]);

const multiSeriesData = ref([
  {
    name: '產品A銷售量',
    data: [300, 400, 350, 500],
    color: '#10b981'
  },
  {
    name: '產品B銷售量',
    data: [250, 300, 400, 450],
    color: '#f59e0b'
  },
  {
    name: '產品C銷售量',
    data: [200, 250, 300, 350],
    color: '#8b5cf6'
  }
]);

const singleSeriesData = ref([
  {
    name: '月度成長率',
    data: [5.2, 6.8, 4.3, 7.1, 8.5, 6.9],
    color: '#06b6d4'
  }
]);
</script>
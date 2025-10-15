<template>
  <div class="p-6 space-y-8">
    <h1 class="text-2xl font-bold text-gray-900">圖表重疊問題全面測試</h1>

    <!-- 測試不同長度的 xAxisTitle -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">測試：非常長的 X 軸標題</h2>
      <LineChart
        title="銷售趨勢分析 - 長標題測試"
        :categories="[
          '一月份銷售數據',
          '二月份銷售數據',
          '三月份銷售數據',
          '四月份銷售數據',
          '五月份銷售數據',
          '六月份銷售數據',
        ]"
        :series="longTitleSeries"
        xAxisTitle="非常長的X軸標題 - 時間軸標籤與系列名稱分離測試"
        yAxisTitle="銷售金額 (新台幣萬元)"
        tooltipSuffix=" 萬元"
        :height="400"
        :showLegend="true"
        :showDataLabels="false"
        :showGridLines="true"
      />
    </div>

    <!-- 測試多系列圖表 -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">測試：多系列柱狀圖</h2>
      <ColumnChart
        title="多年度季度業績對比分析"
        :categories="['第一季度', '第二季度', '第三季度', '第四季度']"
        :series="multiSeriesData"
        xAxisTitle="季度時間區間 (按季度劃分)"
        yAxisTitle="營業收入 (百萬新台幣)"
        tooltipSuffix=" 百萬元"
        :height="400"
        :showLegend="true"
        :showDataLabels="true"
        :showGridLines="true"
      />
    </div>

    <!-- 測試橫向長條圖 -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">測試：橫向長條圖</h2>
      <ColumnChart
        title="產品銷售排行榜 TOP 8"
        :categories="[
          '筆記型電腦系列產品',
          '智慧型手機系列產品',
          '平板電腦系列產品',
          '智慧手錶系列產品',
          '無線耳機系列產品',
          '機械式鍵盤產品',
          '遊戲滑鼠產品',
          '顯示器產品',
        ]"
        :series="[
          {
            name: '年度銷售數量統計',
            data: [2850, 2340, 1890, 1560, 1240, 980, 850, 720],
            color: '#8B5CF6',
          },
        ]"
        xAxisTitle="產品類別分組 (按類型劃分)"
        yAxisTitle="銷售數量 (件數統計)"
        tooltipSuffix=" 件"
        type="bar"
        :height="500"
        :showLegend="false"
        :showDataLabels="true"
        :showGridLines="true"
      />
    </div>

    <!-- 測試面積圖 -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">測試：面積圖</h2>
      <AreaChart
        title="用戶成長趨勢分析圖表"
        :categories="[
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月',
        ]"
        :series="areaSeries"
        xAxisTitle="時間軸標示 (月份區間)"
        yAxisTitle="用戶數量成長 (千人單位)"
        :yAxisMax="100"
        tooltipSuffix=" 千人"
        :height="400"
        :showLegend="true"
        :showDataLabels="false"
        :showGridLines="true"
      />
    </div>

    <!-- 測試圓餅圖 -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-lg font-semibold mb-4">測試：圓餅圖</h2>
      <PieChart
        title="市場佔有率分析 - 產品類別分布圖"
        :data="pieData"
        seriesName="市場佔有率百分比統計"
        :height="400"
      />
    </div>

    <!-- 測試小尺寸圖表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4">測試：小尺寸圖表</h2>
        <LineChart
          title="簡化趨勢圖"
          :categories="['Q1', 'Q2', 'Q3', 'Q4']"
          :series="[
            {
              name: '業績表現指標',
              data: [100, 120, 110, 140],
              color: '#3B82F6',
            },
          ]"
          xAxisTitle="季度標示"
          yAxisTitle="數值"
          :height="250"
          :showLegend="true"
          :showDataLabels="false"
          :showGridLines="true"
        />
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4">測試：無圖例圖表</h2>
        <ColumnChart
          title="簡化柱狀圖"
          :categories="['類別A', '類別B', '類別C', '類別D']"
          :series="[
            { name: '數據系列', data: [50, 75, 60, 85], color: '#10B981' },
          ]"
          xAxisTitle="分類標籤"
          yAxisTitle="數值範圍"
          :height="250"
          :showLegend="false"
          :showDataLabels="true"
          :showGridLines="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  LineChart,
  ColumnChart,
  AreaChart,
  PieChart,
} from '../../../libs/src/index';

// 長標題測試資料
const longTitleSeries = ref([
  {
    name: '本年度實際銷售表現數據',
    data: [120, 135, 150, 142, 168, 175],
    color: '#3B82F6',
  },
  {
    name: '去年同期銷售表現數據',
    data: [100, 115, 130, 125, 140, 155],
    color: '#10B981',
  },
  {
    name: '前年同期銷售表現數據',
    data: [85, 95, 110, 105, 120, 135],
    color: '#F59E0B',
  },
]);

// 多系列測試資料
const multiSeriesData = ref([
  {
    name: '2024年度營收表現',
    data: [5.2, 6.8, 7.1, 8.5],
    color: '#3B82F6',
  },
  {
    name: '2023年度營收表現',
    data: [4.8, 5.9, 6.2, 7.1],
    color: '#10B981',
  },
  {
    name: '2022年度營收表現',
    data: [4.2, 5.1, 5.5, 6.3],
    color: '#F59E0B',
  },
  {
    name: '2021年度營收表現',
    data: [3.8, 4.5, 4.9, 5.8],
    color: '#EF4444',
  },
]);

// 面積圖測試資料
const areaSeries = ref([
  {
    name: '新增用戶數量統計',
    data: [12, 15, 18, 22, 28, 35, 42, 48, 55, 62, 68, 75],
    color: '#06B6D4',
    fillOpacity: 0.3,
  },
  {
    name: '活躍用戶數量統計',
    data: [8, 12, 15, 18, 23, 28, 35, 40, 45, 50, 55, 60],
    color: '#8B5CF6',
    fillOpacity: 0.3,
  },
]);

// 圓餅圖測試資料
const pieData = ref([
  { name: '高階產品線系列', y: 35, color: '#3B82F6' },
  { name: '中階產品線系列', y: 30, color: '#10B981' },
  { name: '入門產品線系列', y: 20, color: '#F59E0B' },
  { name: '企業解決方案系列', y: 10, color: '#EF4444' },
  { name: '其他產品類別', y: 5, color: '#8B5CF6' },
]);
</script>

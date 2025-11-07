<template>
  <div class="w-full h-96 flex items-center justify-center">
    <div ref="chartContainer" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Highcharts from 'highcharts'

const chartContainer = ref<HTMLElement | null>(null)
let chart: Highcharts.Chart | null = null

const chartOptions: Highcharts.Options = {
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
    height: '100%'
  },
  title: {
    text: 'Donut Chart Example',
    align: 'center',
    verticalAlign: 'middle',
    style: { fontSize: '1.25rem' }
  },
  plotOptions: {
    pie: {
      innerSize: '60%',
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y}'
      }
    }
  },
  series: [
    {
      name: 'Value',
      type: 'pie',
      data: [
        { name: 'A', y: 40 },
        { name: 'B', y: 30 },
        { name: 'C', y: 20 },
        { name: 'D', y: 10 }
      ]
    }
  ],
  credits: { enabled: false }
}

onMounted(() => {
  if (chartContainer.value) {
    chart = Highcharts.chart(chartContainer.value, chartOptions)
  }
})

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy()
    chart = null
  }
})
</script>

<style scoped>
.w-full {
  width: 100%;
}
.h-96 {
  height: 24rem;
}
</style>

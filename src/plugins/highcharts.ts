import { App } from 'vue';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';

// 設置全局配置
Highcharts.setOptions({
  lang: {
    thousandsSep: ',',
    loading: '載入中...',
    months: [
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
    ],
    shortMonths: [
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
    weekdays: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ],
    downloadCSV: '下載 CSV',
    downloadJPEG: '下載 JPEG',
    downloadPDF: '下載 PDF',
    downloadPNG: '下載 PNG',
    downloadSVG: '下載 SVG',
    downloadXLS: '下載 XLS',
    printChart: '列印圖表',
    viewFullscreen: '全螢幕查看',
  },
  credits: {
    enabled: false, // 隱藏 Highcharts 浮水印
  },
  colors: [
    '#3B82F6', // blue-500
    '#10B981', // green-500
    '#F59E0B', // yellow-500
    '#EF4444', // red-500
    '#8B5CF6', // purple-500
    '#06B6D4', // cyan-500
    '#F97316', // orange-500
    '#84CC16', // lime-500
  ],
});

export default function (app: App) {
  app.use(HighchartsVue);
}

export { Highcharts };

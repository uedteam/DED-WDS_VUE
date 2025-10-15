import { ref, computed } from 'vue';

// 圖表資料管理的 composable
export function useChartData() {
  // 錯誤狀態管理
  const errors = ref({});
  const loading = ref(false);

  // 資料驗證函數
  const validateSeriesData = (data, context = '') => {
    try {
      if (!data || typeof data !== 'object') {
        throw new Error(`${context}: 資料格式無效`);
      }

      if (!Array.isArray(data.categories) || data.categories.length === 0) {
        throw new Error(`${context}: categories 必須是非空陣列`);
      }

      if (!Array.isArray(data.series) || data.series.length === 0) {
        throw new Error(`${context}: series 必須是非空陣列`);
      }

      // 驗證每個系列的資料
      data.series.forEach((series, index) => {
        if (!series.name) {
          throw new Error(`${context}: 系列 ${index} 缺少 name 屬性`);
        }

        if (!Array.isArray(series.data)) {
          throw new Error(
            `${context}: 系列 "${series.name}" 的 data 必須是陣列`
          );
        }

        if (series.data.length !== data.categories.length) {
          console.warn(
            `${context}: 系列 "${series.name}" 的資料長度與分類數量不符`
          );
        }

        // 檢查數值有效性
        series.data.forEach((value, dataIndex) => {
          if (typeof value !== 'number' || isNaN(value)) {
            throw new Error(
              `${context}: 系列 "${series.name}" 包含無效數值 (位置 ${dataIndex})`
            );
          }
        });
      });

      return true;
    } catch (error) {
      console.error('資料驗證失敗:', error);
      return false;
    }
  };

  // 安全的資料創建函數
  const createSafeData = (dataCreator, context) => {
    try {
      const data = dataCreator();
      if (validateSeriesData(data, context)) {
        errors.value[context] = null;
        return data;
      } else {
        throw new Error(`${context}: 資料驗證失敗`);
      }
    } catch (error) {
      console.error(`創建 ${context} 資料時發生錯誤:`, error);
      errors.value[context] = error;

      // 返回預設的空資料結構
      return {
        categories: ['無資料'],
        series: [
          {
            name: '錯誤',
            data: [0],
            color: '#EF4444',
          },
        ],
      };
    }
  };

  // 銷售趨勢資料
  const salesTrendData = ref(
    createSafeData(
      () => ({
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
        ],
      }),
      '銷售趨勢'
    )
  );

  // 客戶分布資料
  const customerDistributionData = ref({
    data: [
      {
        name: '活躍客戶',
        y: 856,
        color: '#10B981',
      },
      {
        name: '潛在客戶',
        y: 284,
        color: '#F59E0B',
      },
      {
        name: '非活躍客戶',
        y: 108,
        color: '#EF4444',
      },
    ],
  });

  // 銷售渠道資料
  const salesChannelData = ref(
    createSafeData(
      () => ({
        categories: ['線上商店', '實體門市', '電話銷售', '合作夥伴', '直銷'],
        series: [
          {
            name: '本月',
            data: [450, 320, 180, 240, 150],
            color: '#3B82F6',
          },
          {
            name: '上月',
            data: [380, 285, 165, 220, 135],
            color: '#8B5CF6',
          },
        ],
      }),
      '銷售渠道'
    )
  );

  // 轉換率趨勢資料
  const conversionRateData = ref(
    createSafeData(
      () => ({
        categories: ['第1週', '第2週', '第3週', '第4週', '第5週', '第6週'],
        series: [
          {
            name: '轉換率',
            data: [22.5, 24.1, 25.8, 23.2, 26.4, 24.8],
            color: '#06B6D4',
            fillOpacity: 0.3,
          },
        ],
      }),
      '轉換率趨勢'
    )
  );

  // 季度業績資料
  const quarterlyPerformanceData = ref(
    createSafeData(
      () => ({
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
          {
            name: '2022年',
            data: [4.2, 5.1, 5.5, 6.3],
            color: '#F59E0B',
          },
        ],
      }),
      '季度業績'
    )
  );

  // 產品銷售資料
  const productSalesData = ref(
    createSafeData(
      () => ({
        categories: ['產品 A', '產品 B', '產品 C', '產品 D', '產品 E'],
        series: [
          {
            name: '銷售量',
            data: [2850, 2340, 1890, 1560, 1240],
            color: '#8B5CF6',
          },
        ],
      }),
      '產品銷售'
    )
  );

  // CRM 系統相關資料
  const crmStats = ref({
    totalCustomers: 1248,
    monthlySales: 2450000,
    activeOpportunities: 34,
    conversionRate: 24.8,
  });

  const recentActivities = ref([
    {
      id: 1,
      userName: 'Brian Wang',
      description: '新客戶 "王小明" 已完成註冊',
      time: '2 分鐘前',
      type: '新客戶',
      icon: 'SvgUser',
    },
    {
      id: 2,
      description: '銷售機會 "系統整合專案" 進展更新',
      time: '15 分鐘前',
      type: '銷售',
      icon: 'SvgChart',
    },
    {
      id: 3,
      userName: 'Bruce Lee',
      description: '客戶 "李小華" 發送了新訊息',
      time: '1 小時前',
      type: '訊息',
      icon: 'SvgMail',
    },
    {
      id: 4,
      userName: 'Alex Chen',
      description: '完成了與 "張先生" 的會議',
      time: '3 小時前',
      type: '會議',
      icon: 'SvgCalendar',
    },
  ]);

  const customers = ref([
    {
      id: 1,
      name: '王小明',
      email: 'wang@example.com',
      company: 'ABC 科技公司',
      position: '技術總監',
      status: 'active',
      lastContact: '2024-10-10',
    },
    {
      id: 2,
      name: '李小華',
      email: 'li@example.com',
      company: 'XYZ 企業',
      position: '採購經理',
      status: 'potential',
      lastContact: '2024-10-08',
    },
    {
      id: 3,
      name: '張大明',
      email: 'zhang@example.com',
      company: '創新科技',
      position: 'CEO',
      status: 'active',
      lastContact: '2024-10-12',
    },
    {
      id: 4,
      name: '陳小美',
      email: 'chen@example.com',
      company: '未來企業',
      position: '行銷總監',
      status: 'inactive',
      lastContact: '2024-09-28',
    },
  ]);

  const statusOptions = ref([
    { label: '所有狀態', value: '' },
    { label: '活躍', value: 'active' },
    { label: '非活躍', value: 'inactive' },
    { label: '潛在客戶', value: 'potential' },
  ]);

  const customerColumns = ref([
    { key: 'customerInfo', title: '客戶資訊', flex: 1 },
    { key: 'companyInfo', title: '公司', flex: 1 },
    { key: 'status', title: '狀態', width: '150px' },
    { key: 'lastContact', title: '最後聯繫', width: '150px' },
    { key: 'actions', title: '操作', width: '150px' },
  ]);

  // 計算屬性 - 合併後的圖表配置
  const chartConfigs = computed(() => ({
    salesTrend: {
      title: '銷售趨勢',
      xAxisTitle: '時間軸 (月份)',
      yAxisTitle: '銷售額 (萬元)',
      tooltipSuffix: ' 萬元',
      ...salesTrendData.value,
    },
    customerDistribution: {
      title: '客戶分布',
      seriesName: '客戶數量',
      ...customerDistributionData.value,
    },
    salesChannel: {
      title: '銷售渠道表現',
      xAxisTitle: '渠道類型',
      yAxisTitle: '銷售額 (萬元)',
      tooltipSuffix: ' 萬元',
      ...salesChannelData.value,
    },
    conversionRate: {
      title: '轉換率趨勢',
      xAxisTitle: '時間週期',
      yAxisTitle: '轉換率 (%)',
      yAxisMax: 100,
      tooltipSuffix: '%',
      ...conversionRateData.value,
    },
    quarterlyPerformance: {
      title: '季度業績比較',
      xAxisTitle: '季度區間',
      yAxisTitle: '營收 (百萬元)',
      tooltipSuffix: ' 百萬元',
      ...quarterlyPerformanceData.value,
    },
    productSales: {
      title: '產品銷售排行 TOP 5',
      xAxisTitle: '產品類別',
      yAxisTitle: '銷售量 (件)',
      tooltipSuffix: ' 件',
      showDataLabels: true,
      type: 'bar',
      ...productSalesData.value,
    },
  }));

  // 更新資料的方法 - 包含錯誤處理
  const updateSalesTrendData = (newData) => {
    try {
      const updatedData = { ...salesTrendData.value, ...newData };
      if (validateSeriesData(updatedData, '銷售趨勢更新')) {
        salesTrendData.value = updatedData;
        errors.value['銷售趨勢'] = null;
      }
    } catch (error) {
      console.error('更新銷售趨勢資料失敗:', error);
      errors.value['銷售趨勢'] = error;
    }
  };

  const updateCustomerDistributionData = (newData) => {
    try {
      customerDistributionData.value = {
        ...customerDistributionData.value,
        ...newData,
      };
      errors.value['客戶分布'] = null;
    } catch (error) {
      console.error('更新客戶分布資料失敗:', error);
      errors.value['客戶分布'] = error;
    }
  };

  const updateSalesChannelData = (newData) => {
    try {
      const updatedData = { ...salesChannelData.value, ...newData };
      if (validateSeriesData(updatedData, '銷售渠道更新')) {
        salesChannelData.value = updatedData;
        errors.value['銷售渠道'] = null;
      }
    } catch (error) {
      console.error('更新銷售渠道資料失敗:', error);
      errors.value['銷售渠道'] = error;
    }
  };

  const updateConversionRateData = (newData) => {
    try {
      const updatedData = { ...conversionRateData.value, ...newData };
      if (validateSeriesData(updatedData, '轉換率更新')) {
        conversionRateData.value = updatedData;
        errors.value['轉換率'] = null;
      }
    } catch (error) {
      console.error('更新轉換率資料失敗:', error);
      errors.value['轉換率'] = error;
    }
  };

  const updateQuarterlyPerformanceData = (newData) => {
    try {
      const updatedData = { ...quarterlyPerformanceData.value, ...newData };
      if (validateSeriesData(updatedData, '季度業績更新')) {
        quarterlyPerformanceData.value = updatedData;
        errors.value['季度業績'] = null;
      }
    } catch (error) {
      console.error('更新季度業績資料失敗:', error);
      errors.value['季度業績'] = error;
    }
  };

  const updateProductSalesData = (newData) => {
    try {
      const updatedData = { ...productSalesData.value, ...newData };
      if (validateSeriesData(updatedData, '產品銷售更新')) {
        productSalesData.value = updatedData;
        errors.value['產品銷售'] = null;
      }
    } catch (error) {
      console.error('更新產品銷售資料失敗:', error);
      errors.value['產品銷售'] = error;
    }
  };

  // 重設所有錯誤狀態
  const clearErrors = () => {
    errors.value = {};
  };

  // 檢查是否有錯誤
  const hasErrors = computed(() => {
    return Object.values(errors.value).some((error) => error !== null);
  });

  // 取得錯誤訊息列表
  const getErrorMessages = computed(() => {
    return Object.entries(errors.value)
      .filter(([, error]) => error !== null)
      .map(([context, error]) => `${context}: ${error.message}`);
  });

  // CRM 資料更新方法
  const updateCrmStats = (newStats) => {
    try {
      crmStats.value = { ...crmStats.value, ...newStats };
    } catch (error) {
      console.error('更新 CRM 統計資料失敗:', error);
    }
  };

  const addCustomer = (customer) => {
    try {
      const newCustomer = {
        id: customers.value.length + 1,
        ...customer,
        status: customer.status || 'potential',
        lastContact:
          customer.lastContact || new Date().toISOString().split('T')[0],
      };
      customers.value.push(newCustomer);
    } catch (error) {
      console.error('新增客戶失敗:', error);
    }
  };

  const updateCustomer = (customerId, updatedData) => {
    try {
      const index = customers.value.findIndex((c) => c.id === customerId);
      if (index !== -1) {
        customers.value[index] = { ...customers.value[index], ...updatedData };
      }
    } catch (error) {
      console.error('更新客戶資料失敗:', error);
    }
  };

  const removeCustomer = (customerId) => {
    try {
      const index = customers.value.findIndex((c) => c.id === customerId);
      if (index !== -1) {
        customers.value.splice(index, 1);
      }
    } catch (error) {
      console.error('刪除客戶失敗:', error);
    }
  };

  const addActivity = (activity) => {
    try {
      const newActivity = {
        id: recentActivities.value.length + 1,
        time: new Date().toLocaleString('zh-TW'),
        ...activity,
      };
      recentActivities.value.unshift(newActivity);

      // 限制活動記錄數量，最多保留 20 筆
      if (recentActivities.value.length > 20) {
        recentActivities.value = recentActivities.value.slice(0, 20);
      }
    } catch (error) {
      console.error('新增活動記錄失敗:', error);
    }
  };

  return {
    // 圖表資料
    salesTrendData,
    customerDistributionData,
    salesChannelData,
    conversionRateData,
    quarterlyPerformanceData,
    productSalesData,

    // CRM 資料
    crmStats,
    recentActivities,
    customers,
    statusOptions,
    customerColumns,

    // 計算屬性
    chartConfigs,

    // 圖表更新方法
    updateSalesTrendData,
    updateCustomerDistributionData,
    updateSalesChannelData,
    updateConversionRateData,
    updateQuarterlyPerformanceData,
    updateProductSalesData,

    // CRM 更新方法
    updateCrmStats,
    addCustomer,
    updateCustomer,
    removeCustomer,
    addActivity,

    // 錯誤處理
    errors,
    loading,
    clearErrors,
    hasErrors,
    getErrorMessages,
    validateSeriesData,
  };
}

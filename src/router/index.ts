import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue'),
      meta: {
        title: '首頁',
      },
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../pages/ComponentTest.vue'),
      meta: {
        title: 'UI 組件測試',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../template/Login.vue'),
      meta: {
        title: '登入',
      },
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('../template/Landing.vue'),
      meta: {
        title: 'Landing Page',
      },
    },
    {
      path: '/cms',
      name: 'cms',
      component: () => import('../template/CMS.vue'),
      meta: {
        title: '內容管理系統',
      },
    },
    {
      path: '/crm',
      name: 'crm',
      component: () => import('../template/CRM.vue'),
      meta: {
        title: '客戶關係管理',
      },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../template/Portfolio.vue'),
      meta: {
        title: 'Portfolio Template',
      },
    },
    {
      path: '/auo-design-center',
      name: 'auoDesignCenter',
      component: () => import('../template/CorporatePortfolio.vue'),
      meta: {
        title: 'AUO 友達設計中心 - Design Innovation Hub',
        description: '友達光電設計中心專業創意設計與使用者體驗創新',
        keywords:
          '友達設計中心, AUO Design Center, UI/UX設計, 創意設計, 視覺設計, 使用者體驗',
      },
    },
    {
      path: '/charts',
      name: 'charts',
      component: () => import('../pages/ChartsDemo.vue'),
      meta: {
        title: 'Highcharts 圖表展示',
      },
    },
    {
      path: '/charts-control',
      name: 'chartsControl',
      component: () => import('../pages/ChartsControlDemo.vue'),
      meta: {
        title: '圖表組件控制台',
      },
    },
    {
      path: '/chart-spacing-test',
      name: 'chartSpacingTest',
      component: () => import('../test/chart/TestChartSpacing.vue'),
      meta: {
        title: '圖表間距測試',
      },
    },
    {
      path: '/chart-spacing-fixed',
      name: 'chartSpacingFixed',
      component: () => import('../test/chart/TestChartSpacingFixed.vue'),
      meta: {
        title: '圖表間距修復測試',
      },
    },
    {
      path: '/chart-overlap-full',
      name: 'chartOverlapFull',
      component: () => import('../test/chart/TestChartOverlapFull.vue'),
      meta: {
        title: '圖表重疊問題全面測試',
      },
    },
    {
      path: '/form-test',
      name: 'formTest',
      component: () => import('../test/form/TestForm.vue'),
      meta: {
        title: 'Form 表單組件測試',
      },
    },
    // 重定向未匹配的路由到首頁
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

// 設定頁面標題
router.beforeEach((to, from, next) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title} - DED WDS Vue`;
  } else {
    document.title = 'DED WDS Vue';
  }
  next();
});

export default router;

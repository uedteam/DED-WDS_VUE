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

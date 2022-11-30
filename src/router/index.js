import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/error',
    name: 'error',
    component: () => import('../pages/Error.vue'),
  },
  {
    path: '',
    name: 'home-page',
    component: () => import('../pages/home/home.vue'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/discover',
    name: 'discover-page',
    component: () => import('../pages/discover/discover.vue'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/zingchart',
    name: 'zingchart-page',
    component: () => import('../pages/zingchart/zingchart.vue'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/radio',
    name: 'radio-page',
    component: () => import('../pages/radio/radio.vue'),
    meta: {
      layout: 'main',
    },
  },
  { path: '/404', name: '404', component: () => import('../pages/404.vue') },
  { path: '/:catchAll(.*)', redirect: '/404' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   next();
// });

export default router;

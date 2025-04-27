import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    component: () => import('@/layout/LayoutDefault.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/HomeView.vue'),
      },
      {
        path: '/404',
        name: 'NotFound',
        component: () => import('@/views/errors/NotFoundView.vue'),
      },      
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
];
const router = createRouter({
  history: createWebHistory(''),
  linkActiveClass: 'active',
  routes,
});

export default router;

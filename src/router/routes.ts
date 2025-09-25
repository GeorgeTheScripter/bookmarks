export const routes = [
  { path: '/', component: () => import('@/pages/AuthPage.vue') },
  {
    path: '/main',
    component: () => import('@/pages/MainPage.vue'),
    children: [
      { path: '', component: () => import('@/components/Test.vue'), name: 'main' },
      { path: '/development', component: () => import('@/components/Test_2.vue') },
    ],
  },
];

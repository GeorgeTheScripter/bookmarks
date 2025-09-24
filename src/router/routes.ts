import Test from '@/components/Test.vue';
import Test_2 from '@/components/Test_2.vue';
import AuthPage from '@/pages/AuthPage.vue';
import MainPage from '@/pages/MainPage.vue';

export const routes = [
  { path: '/', component: AuthPage },
  {
    path: '/main',
    component: MainPage,
    children: [
      { path: '', component: Test, name: 'main' },
      { path: '/development', component: Test_2 },
    ],
  },
];

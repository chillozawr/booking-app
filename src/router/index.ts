import { createRouter, createWebHistory } from 'vue-router';
import RegistrationPage from '@/views/RegistrationPage.vue';
import MainPage from '@/views/MainPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/registration',
      component: RegistrationPage
    }
  ]
});

export default router;

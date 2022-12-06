import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/CharactersView.vue'),
  },
  {
    path: '/EpisodesView',
    name: 'EpisodesView',
    component: () => import('@/views/EpisodesView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

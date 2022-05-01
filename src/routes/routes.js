import AppLayout from '../layouts/App.layout.vue';
import IndexPage from '../pages/Index.page.vue';

export const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [{ path: '/', name: 'index', component: IndexPage }],
  },
];

import { createApp } from 'vue';
import { store } from './stores';
import { router } from './routes';
import App from './App.vue';
import './index.css';

createApp(App).use(store).use(router).mount('#app');

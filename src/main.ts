import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';
import { icons } from '@ui';

const app = createApp(App);
app.use(router);
app.provide('icons', icons);
app.mount('#root');

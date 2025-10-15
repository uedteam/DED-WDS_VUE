import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';
import { icons } from '@ui';
import highchartsPlugin from './plugins/highcharts';

const app = createApp(App);
app.use(router);
app.use(highchartsPlugin);
app.provide('icons', icons);
app.mount('#root');

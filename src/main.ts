import { createApp } from 'vue';
import App from './app/App.vue';
import icons from '@/assets/icons/icons.js';

const app = createApp(App);
app.provide('icons', icons);
app.mount('#root');

import './bootstrap.js';
import './styles/app.css';
import { createApp } from 'vue';
import TimeClock from './components/TimeClock.vue';

// Create the Vue app and mount it to the `#app` div
const app = createApp({});
app.component('TimeClock', TimeClock);
app.mount('#app');
import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css'
import { createPinia } from 'pinia';
import {useWeatherStore} from "./store/weather-store.js";

const app = createApp(App);
app.use(createPinia());
app.mount('#app');

const weatherStore = useWeatherStore();
weatherStore.search = 'Chamonix-mont-blanc';
weatherStore.searchbar = 'Chamonix-mont-blanc';
weatherStore.getWeatherFromSearch();



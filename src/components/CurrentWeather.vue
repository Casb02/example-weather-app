<script setup>
import {useWeatherStore} from "../store/weather-store.js";
const weatherStore = useWeatherStore();

</script>

<template>
  <div class="flex flex-row justify-center content-center">
    <img :src="weatherStore.getWeatherIcon" alt="Current Weather" height="25">
    <h1 class="text-center leading-normal text-6xl">{{ weatherStore.getTemperatureRounded }}</h1>
  </div>

</template>


<style scoped>

</style>
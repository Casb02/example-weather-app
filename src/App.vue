<script setup>
import {useWeatherStore} from "./store/weather-store.js";
import CurrentWeather from "./components/CurrentWeather.vue";
import Searchbar from "./components/Searchbar.vue";

const weatherStore = useWeatherStore();
</script>

<template>
  <template v-if="weatherStore.isLoaded">
    <div class="w-full min-h-screen flex flex-col justify-center content-center">
      <Searchbar/>
      <h1 class="font-sans text-center text-4xl">Weer voor {{ weatherStore.getSearch }}</h1>
      <CurrentWeather/>
    </div>

  </template>
  <template v-else>
    <div class="w-full min-h-screen flex flex-col justify-center content-center">
      <h1 class="font-sans text-5xl text-center">Laden ...</h1>
    </div>
  </template>
</template>

<style>
</style>

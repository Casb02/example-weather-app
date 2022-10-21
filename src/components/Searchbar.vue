<script setup>
import {useWeatherStore} from "../store/weather-store.js";

const weatherStore = useWeatherStore();

const doEnter = (event) => {
  if (event.key === "Enter") {
    weatherStore.submitSearch()
  }
}

</script>

<template>
  <div class="flex flex-col items-center mb-9">
    <label class="font-sans text-xl " for="">Voer een plaats in</label>
    <div class="group">
      <input type="text" class="rounded-sm p-2 mr-3 shadow-md border-gray-500 border-solid" v-model="weatherStore.searchbar" @keydown="doEnter($event)"/>
      <button @click="weatherStore.submitSearch()">Zoek</button>
    </div>
  </div>
</template>


<style scoped>

</style>
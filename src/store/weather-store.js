//default pinia store
import {defineStore} from 'pinia'
import {getWeatherFromCityName} from "../functions/weather-api.js";

export const useWeatherStore = defineStore({
    id: 'weather',
    state: () => ({
        searchbar: '',
        search: null,
        weather: null
    }),
    getters: {
        isLoaded() {
            return this.search !== null && this.weather !== null;
        },
        getSearch() {
            return this.weather.name;
        },
        getWeather() {
            return this.weather ? this.weather : [];
        },
        getTemperatureRounded() {
            return `${this.weather ? Math.round(this.weather.main.temp) : 0} °C`;
        },
        getWeatherIcon() {
            return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
        }
    },
    actions: {
        async getWeatherFromSearch() {
            if (this.search === null) {
                console.error('No search value');
                return;
            }
            this.weather = null;
            this.weather = await getWeatherFromCityName(this.search);
        },
        submitSearch() {
            this.search = this.searchbar;
            this.getWeatherFromSearch();
        }
    }
})

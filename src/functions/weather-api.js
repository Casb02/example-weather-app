const apikey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY


const getWeatherFromCityName = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric&lang=nl`
    const response = await fetch(url).then(response => response.json());
    return response;
}

export {getWeatherFromCityName}
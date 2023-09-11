import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key = import.meta.env.VITE_WEATHER_KEY

console.log(api_key)

const getWeather = (city) =>
    axios
        .get(`${baseUrl}${city}&units=metric&appid=${api_key}`)
        .then(response => response.data)
        .catch(error => {
            console.error(error)
        })

export default { getWeather }
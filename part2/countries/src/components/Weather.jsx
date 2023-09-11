import { useState } from "react"
import PropTypes from 'prop-types'
import weatherService from '../services/weather'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)

    console.log("Rendering Weather", weather)

    if (weather === null) {
        weatherService
            .getWeather(capital)
            .then(weather => setWeather(weather))
        return
    }

    return (
        <>
            <h1>
                Weather in {capital}
            </h1>
            <p>temperature {weather.main.temp} Celcius</p>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
            />
            <p>wind {weather.wind.speed} m/s</p>
        </>
    )
}

Weather.propTypes = {
    capital: PropTypes.string.isRequired,
}

export default Weather
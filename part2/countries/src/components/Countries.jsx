import PropTypes from 'prop-types'
import Country from './Country'
import { useState } from 'react'


const Countries = ({ countries }) => {
    const [countryToShow, setCountryToShow] = useState(null)

    const createCountry = (country) =>
        <Country
            country={country.name.common}
            capital={country.capital[0]}
            area={country.area}
            languages={country.languages}
            flagUrl={country.flags.png}
        />

    if (countries.length === 0)
        return null
    else if (countries.length === 1) 
        return createCountry(countries[0])
    else if (countries.length <= 10) {
        return (
            <>
                <ul>
                    {
                        countries.map(
                            x =>
                                <li key={x.name.common}>
                                    {x.name.common}
                                    <button
                                        onClick={
                                            () => {
                                                const name = x.name.common
                                                const country = countries.find(k => k.name.common === name)
                                                if (country)
                                                    setCountryToShow(country)
                                            }
                                        }>
                                        show
                                    </button>
                                </li>
                        )
                    }
                </ul>
                {countryToShow && createCountry(countryToShow)}
            </>
        )

    }
    else {
        return (
            <p>
                Too many matches, specify another filter
            </p>
        )
    }
}

Countries.propTypes = {
    countries: PropTypes.array.isRequired
}

export default Countries
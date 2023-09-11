import PropTypes from 'prop-types'

const Countries = ({ countries }) => {
    if (countries.length === 0)
        return null
    else if (countries.length === 1) {
        const country = countries[0]
        
        return (
            <>
                <h1>
                    {country.name.common}
                </h1>
                <p>
                    capital {country.capital[0]}
                </p>
                <p>
                    area {country.area}
                </p>
                <h2>languages:</h2>
                <ul>
                    {Object.keys(country.languages).map(x => <li key={x}>{country.languages[x]}</li>)}
                </ul>
                <img src={country.flags.png}
                    alt={`Unable to load ${country.name.common} flag`}
                />
            </>
        )
    }
    else if (countries.length <= 10) {
        return (
            <ul>
                {countries.map(x => <li key={x.name.common}>{x.name.common}</li>)}
            </ul>
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
import PropTypes from 'prop-types'

const Country = ({country, capital, area, languages, flagUrl}) =>{
    return (
        <>
            <h1>
                {country}
            </h1>
            <p>
                capital {capital}
            </p>
            <p>
                area {area}
            </p>
            <h2>languages:</h2>
            <ul>
                {Object.keys(languages).map(x => <li key={x}>{languages[x]}</li>)}
            </ul>
            <img src={flagUrl}
                alt={`Unable to load ${country} flag`}
            />
        </>
    )
}

Country.propTypes = {
    country: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    area: PropTypes.number.isRequired,
    languages: PropTypes.object.isRequired,
    flagUrl: PropTypes.string.isRequired
}

export default Country

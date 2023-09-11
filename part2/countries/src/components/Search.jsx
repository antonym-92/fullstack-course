import { useState } from 'react'
import PropTypes from 'prop-types'
import countriesService from '../services/countries'

const Search = ({ setCountries }) => {
    const [search, setSearch] = useState(null)

    return (
        <p>
            find countries
            <input value={search ?? ''} onChange={
                (event) => {
                    const newSearch = event.target.value
                    if (newSearch === '') {
                        setSearch(newSearch)
                        setCountries([])
                    }
                    else {
                        countriesService
                            .getAllCountries()
                            .then(countries => {
                                setSearch(newSearch)
                                setCountries(
                                    countries.filter(
                                        x => x.name.common.toLowerCase().includes(newSearch.toLowerCase())
                                    )
                                )
                            })
                    }
                }
            } />
        </p>
    )
}

Search.propTypes = {
    setCountries: PropTypes.func.isRequired
}

export default Search
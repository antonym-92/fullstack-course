import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAllCountries = () =>
    axios.get(`${baseUrl}/all`)
        .then(response => response.data)
        .catch(error => {
            console.error(error)
            throw error
        })

const getCountry = (country) =>
    axios.get(`${baseUrl}/name/${country}`)
        .then(response => response.data)
        .catch(error => {
            console.error(error)
            throw error
        })

export default { getAllCountries, getCountry }
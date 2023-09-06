import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons'

const create = newPerson =>
    axios
        .post(baseUrl, newPerson)
        .then(response => response.data)

const getAll = () =>
    axios
        .get('http://localhost:3001/persons')
        .then(response => response.data)

export default {
    create, getAll
}
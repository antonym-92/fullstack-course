import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons'

const create = newPerson =>
    axios
        .post(baseUrl, newPerson)
        .then(response => response.data)

const getAll = () =>
    axios
        .get(baseUrl)
        .then(response => response.data)

const remove = id =>
    axios
        .delete(`${baseUrl}/${id}`)

export default {
    create, getAll, remove
}
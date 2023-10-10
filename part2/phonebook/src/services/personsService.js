import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/persons'

const create = newPerson =>
    axios
        .post(baseUrl, newPerson)
        .then(response => response.data)

const getAll = () =>
    axios
        .get(baseUrl)
        .then(response => response.data)

const update = (id, newPerson) =>
    axios
        .put(`${baseUrl}/${id}`, newPerson)
        .then(response => response.data)
        .catch(error => {
            throw error.response.status
        })

const remove = id =>
    axios
        .delete(`${baseUrl}/${id}`)

export default {
    create, getAll, update, remove
}
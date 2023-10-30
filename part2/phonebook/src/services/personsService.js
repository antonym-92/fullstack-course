import axios from 'axios';

const baseUrl = '/api/persons'

const create = newPerson =>
    axios
        .post(baseUrl, newPerson)
        .then(response => response.data)
        .catch(error => {
            throw { status: error.response.status, message: error.response.data.error }
        })

const getAll = () =>
    axios
        .get(baseUrl)
        .then(response => response.data)

const update = (id, newPerson) =>
    axios
        .put(`${baseUrl}/${id}`, newPerson)
        .then(response => response.data)
        .catch(error => {
            throw { status: error.response.status, message: error.response.data.error }
        })

const remove = id =>
    axios
        .delete(`${baseUrl}/${id}`)

export default {
    create, getAll, update, remove
}
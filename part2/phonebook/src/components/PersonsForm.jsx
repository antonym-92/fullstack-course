import PropTypes from 'prop-types';
import personsService from '../services/personsService';

const PersonsForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, setNotification }) => {
    const handleSubmit = (event) => {
        event.preventDefault()

        if (persons.find(x => x.name === newName)) {
            if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
                return

            const toUpdate = {
                ...persons.find(x => x.name === newName),
                number: newNumber
            }

            personsService
                .update(toUpdate.id, toUpdate)
                .then(updated => {
                    setPersons(persons.map(x => x.id !== toUpdate.id ? x : updated))
                    handleNotification(`Updated ${newName}`)
                })
                .catch(error => {
                    if (error.status === 404) {
                        setPersons(persons.filter(x => x.id !== toUpdate.id))
                        handleNotification(`Information of ${newName} has already been removed from server`, true)
                    }
                    else {
                        handleNotification(error.message, true)
                    }
                })

            return
        }

        const newPerson = {
            name: newName,
            number: newNumber
        }

        personsService
            .create(newPerson)
            .then(created => {
                setPersons([...persons, created])
                handleNotification(`Added ${newName}`)
            })
            .catch(error =>
                handleNotification(error.message, true))
    }

    const handleNotification = (notification, isError = false) => {
        const notificationMessage = {
            notification,
            isError
        }
        setNotification(notificationMessage)
        setTimeout(() => setNotification(
            {
                notification: null,
                isError: false
            }), 2000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
            </div>
            <div>
                number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

PersonsForm.propTypes = {
    persons: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    setPersons: PropTypes.func.isRequired,
    newName: PropTypes.string.isRequired,
    setNewName: PropTypes.func.isRequired,
    newNumber: PropTypes.string.isRequired,
    setNewNumber: PropTypes.func.isRequired,
    setNotification: PropTypes.func.isRequired
}

export default PersonsForm
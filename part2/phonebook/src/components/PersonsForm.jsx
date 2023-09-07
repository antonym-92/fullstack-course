import PropTypes from 'prop-types';
import personsService from '../services/personsService';

const PersonsForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, setNotificationMessage }) => {
    const handleSubmit = (event) => {
        event.preventDefault()

        if (persons.find(x => x.name === newName) &&
            window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
        ) {
            const toUpdate = {
                ...persons.find(x => x.name === newName),
                number: newNumber
            }

            personsService
                .update(toUpdate.id, toUpdate)
                .then(
                    updated => setPersons(
                        persons.map(x => x.id !== toUpdate.id ? x : updated)))

            handleNotification(`Updated ${newName}`)

            return
        }

        const newPerson = {
            name: newName,
            number: newNumber
        }

        personsService
            .create(newPerson)
            .then(created => setPersons([...persons, created]))

        handleNotification(`Added ${newName}`)
    }

    const handleNotification = (message) => {
        setNotificationMessage(message)
        setTimeout(() => setNotificationMessage(null), 2000)
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
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    setPersons: PropTypes.func.isRequired,
    newName: PropTypes.string.isRequired,
    setNewName: PropTypes.func.isRequired,
    newNumber: PropTypes.string.isRequired,
    setNewNumber: PropTypes.func.isRequired,
    setNotificationMessage: PropTypes.func.isRequired
}

export default PersonsForm
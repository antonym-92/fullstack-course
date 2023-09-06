import PropTypes from 'prop-types';
import axios from 'axios';

const PersonsForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
    const handleSubmit = (event) => {
        event.preventDefault()

        if (persons.find(x => x.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const newPerson = {
            name: newName,
            number: newNumber
        }

        axios.post('http://localhost:3001/persons', newPerson)
            .then(response => response.data)
            .then(added => setPersons([...persons, added]))
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
    setNewNumber: PropTypes.func.isRequired
}

export default PersonsForm
import PropTypes from 'prop-types';
import personsService from '../services/personsService';

const Persons = ({ persons, setPersons, filter }) => {
    const filterPersons = () =>
        filter ?
            persons.filter(
                x => x.name.toLowerCase().includes(filter.toLowerCase()))
            : persons

    const deletePerson = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            personsService
                .remove(id)
                .then(() => setPersons(persons.filter(x => x.id !== id)))
        }
    }

    return (
        <>
            {filterPersons().map(person => (
                <p key={person.id}>
                    {person.name} {person.number} <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
                </p>
            ))}
        </>
    )
}

Persons.propTypes = {
    persons: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    setPersons: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}

export default Persons
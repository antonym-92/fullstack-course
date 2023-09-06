import PropTypes from 'prop-types';

const Persons = ({ persons, filter }) => {
    const filterPersons = () =>
        filter ?
            persons.filter(
                x => x.name.toLowerCase().includes(filter.toLowerCase()))
            : persons

    return (
        <>
            {filterPersons().map(person =>
                <p key={person.id}>
                    {person.name} {person.number}
                </p>)}
        </>
    )
}

Persons.propTypes = {
    filter: PropTypes.string.isRequired,
    persons: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
}

export default Persons
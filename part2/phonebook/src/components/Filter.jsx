import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
    return (
        <div>
            filter shown with: <input value={filter} onChange={(event) => setFilter(event.target.value)} />
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}

export default Filter
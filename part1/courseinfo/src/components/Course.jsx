import PropTypes from 'prop-types';

const Header = ({ header }) => {
    return (
        <h2>
            {header}
        </h2>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => <Part key={part.id} {...part} />)}
        </>
    )
}

const Total = ({ parts }) => {
    return (
        <p>
            <strong>
                total of {
                    parts.map(part => part.exercises)
                        .reduce((prev, curr) => prev + curr, 0)} exercises
            </strong>
        </p>
    )
}

const Course = ({ name, parts }) => {
    return (
        <>
            <Header header={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </>
    )
}

Header.propTypes = {
    header: PropTypes.string.isRequired
}

Part.propTypes = {
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired
}

const partsPropTypes = PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired
})).isRequired

Content.propTypes = {
    parts: partsPropTypes
}

Total.propTypes = {
    parts: partsPropTypes
}

Course.propTypes = {
    name: PropTypes.string.isRequired,
    parts: partsPropTypes
}

export default Course
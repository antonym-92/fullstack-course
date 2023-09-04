import PropTypes from 'prop-types';

const Header = ({ name }) => {
  return (
    <h1>
      {name}
    </h1>
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

const Course = ({ id, name, parts }) => {
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course {...course} />
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  parts: partsPropTypes
}

export default App
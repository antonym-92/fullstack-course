import PropTypes from 'prop-types';

const Header = ({ course }) => {
  return (
    <h1>
      {course}
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
      {parts.map((part, index) => <Part key={index} {...part} />)}
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {
        parts.map(part => part.exercises)
          .reduce((prev, curr) => prev + curr, 0)}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

Header.propTypes = {
  course: PropTypes.string.isRequired
}

Part.propTypes = {
  name: PropTypes.string.isRequired,
  exercises: PropTypes.number.isRequired
}

Content.propTypes = {
  parts: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired
  })).isRequired
}

Total.propTypes = {
  parts: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired
  })).isRequired
}

export default App
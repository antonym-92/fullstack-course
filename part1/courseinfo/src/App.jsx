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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header {...course} />
      <Content {...course} />
      <Total {...course} />
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
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

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <Part {...part1} />
      <Part {...part2} />
      <Part {...part3} />
    </>
  )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <p>
      Number of exercises {exercises1 + exercises2 + exercises3}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
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
  part1: PropTypes.exact({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired
  }).isRequired,
  part2: PropTypes.exact({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired
  }).isRequired,
  part3: PropTypes.exact({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired
  }).isRequired,
}

Total.propTypes = {
  exercises1: PropTypes.number.isRequired,
  exercises2: PropTypes.number.isRequired,
  exercises3: PropTypes.number.isRequired,
}

export default App
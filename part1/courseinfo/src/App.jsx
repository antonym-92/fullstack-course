import PropTypes from 'prop-types';


const Header = ({ header }) => {
  return (
    <h1>
      {header}
    </h1>
  )
}

const Name = ({ name }) => {
  return (
    <h2>
      {name}
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
      <Name name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Header header='Web development curriculum' />
      {courses.map(course => <Course key={course.id} {...course} />)}
    </div>
  )
}

Header.propTypes = {
  header: PropTypes.string.isRequired
}

Name.propTypes = {
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
  name: PropTypes.string.isRequired,
  parts: partsPropTypes
}

export default App
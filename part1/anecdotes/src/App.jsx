import { useState } from 'react'
import PropTypes from 'prop-types'

const Header = ({ text }) =>
  <h1>
    <strong>
      {text}
    </strong>
  </h1>

const Text = ({ text }) =>
  <p>
    {text}
  </p>

const Button = ({ text, handleClick }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(anecdotes.map(() => 0))

  const getRandom = () => Math.floor(Math.random() * anecdotes.length)
  const mostVoted = (() => {
    let maxPointIndex = 0
    let index = 1
    while (index < points.length) {
      if (points[maxPointIndex] < points[index])
        maxPointIndex = index
      ++index
    }
    return maxPointIndex
  })()

  return (
    <div>
      <Header text={'Anecdote of the day'} />
      <Text text={anecdotes[selected]} />
      <Text text={`has ${points[selected]} votes`} />
      <Button text={'vote'} handleClick={() => {
        const copy = [...points]
        copy[selected] += 1;
        setPoints(copy)
      }} />
      <Button text={'next anecdote'} handleClick={() =>
        setSelected((prev) => {
          let random = getRandom()
          while (prev === random)
            random = getRandom()
          return random
        })
      } />
      <Header text={'Anecdote with most votes'} />
      <Text text={anecdotes[mostVoted]} />
      <Text text={`has ${points[mostVoted]} votes`} />
    </div>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}

Text.propTypes = {
  text: PropTypes.string.isRequired
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default App

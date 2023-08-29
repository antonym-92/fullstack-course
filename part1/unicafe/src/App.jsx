import PropTypes from 'prop-types'
import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Feedback = ({ handleGoodClick, handleNeutralClick, handleBadClick }) =>
  <>
    <Header text={"give feedback"} />
    <Button text={"good"} handleClick={handleGoodClick} />
    <Button text={"neutral"} handleClick={handleNeutralClick} />
    <Button text={"bad"} handleClick={handleBadClick} />
  </>

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad
  const average = sum / 3
  const positivePercentage = sum > 0 && good > 0 ? (good / sum) * 100 : 0

  const header = <Header text={"statistics"} />

  if (sum === 0)
    return (
      <>
        {header}
        <p>No feedback given</p>
      </>
    )

  return (
    <>
      {header}
      <p>{`good ${good}`}</p>
      <p>{`neutral ${neutral}`}</p>
      <p>{`bad ${bad}`}</p>
      <p>{`all ${sum}`}</p>
      <p>{`average ${average}`}</p>
      <p>{`positive ${positivePercentage}`}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback
        handleGoodClick={() => setGood(good + 1)}
        handleNeutralClick={() => setNeutral(neutral + 1)}
        handleBadClick={() => setBad(bad + 1)}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

Feedback.propTypes = {
  handleGoodClick: PropTypes.func.isRequired,
  handleNeutralClick: PropTypes.func.isRequired,
  handleBadClick: PropTypes.func.isRequired
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
}

export default App

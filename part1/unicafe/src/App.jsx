import PropTypes from 'prop-types'
import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = good + neutral + bad
  const average = sum / 3
  const positivePercentage = sum > 0  && good > 0 ? (good / sum) * 100 : 0

  return (
    <div>
      <Header text={"give feedback"} />
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />
      <Header text={"statistics"} />
      <p>{`good ${good}`}</p>
      <p>{`neutral ${neutral}`}</p>
      <p>{`bad ${bad}`}</p>
      <p>{`all ${sum}`}</p>
      <p>{`average ${average}`}</p>
      <p>{`positive ${positivePercentage}`}</p>
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




export default App

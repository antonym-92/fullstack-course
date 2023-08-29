import PropTypes from 'prop-types'
import { useState } from 'react'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(good, neutral, bad)
  return (
    <div>
      <Button text={"good"} handleClick={() => setGood(good + 1)}/>
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)}/>
      <Button text={"bad"} handleClick={() => setBad(bad + 1)}/>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}


export default App

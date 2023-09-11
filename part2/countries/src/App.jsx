import { useState } from 'react'
import Search from './components/Search'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])

  return (
    <>
      <Search setCountries={setCountries} />
      <Countries countries={countries} />
    </>
  )
}

export default App

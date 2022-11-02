import Card from './components/Card'
import { CardsInfo } from './helpers/constants'

function App() {
  return (
    <Card
      profilePic={CardsInfo[0].picture}
      flag={CardsInfo[0].flag}
      name={CardsInfo[0].name}
      text={CardsInfo[0].comment}
    />
  )
}

export default App

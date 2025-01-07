import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AReservation from './components/AReservation'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AReservation />} />
      </Routes>
    </Router>
  )
}

export default App

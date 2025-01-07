import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AReservation from './components/AReservation'
import MainPage from './components/MainPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AReservation />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App

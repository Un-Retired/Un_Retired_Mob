import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import AReservation from './components/AReservation'
import MainPage from './components/MainPage'
import DetailedView from './components/DetailedView'

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<AReservation />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailedView />} />
      </Routes>
    </Router>
  )
}

export default App

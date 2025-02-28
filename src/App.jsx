import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AReservation from "./components/AReservation";
import MainPage from "./pages/MainPage";
import SubDomain from "./pages/SubDomain";
import DetailedView from "./pages/DetailedView";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<AReservation />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailedView />} />

        {/* UI만 빨리 만들어서 보려고 추가했습니다. */}
        <Route path="/sub" element={<SubDomain />} />
      </Routes>
    </Router>
  );
}

export default App;

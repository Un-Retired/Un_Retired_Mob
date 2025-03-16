import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AReservation from "./components/AReservation";
import MainPage from "./pages/MainPage";
import SubDomain from "./pages/SubDomain";
import DetailedView from "./pages/DetailedView";
import PrivacyTermsPage from "./pages/terms/PrivacyTermsPage";
import ServiceAlarmTermsPage from "./pages/terms/ServiceAlarmTermsPage";
import Over14AgePrivacyTermsPage from "./pages/terms/Over14AgePrivacyTermsPage";
import UsageTermsPage from "./pages/terms/UsageTermsPage";
import SetDueDate from "./pages/SetDueDate";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<AReservation />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailedView />} />

        {/* UI만 빨리 만들어서 보려고 추가했습니다. */}
        <Route path="/sub" element={<SubDomain />} />

        {/* 이용 악관들 */}
        <Route path="/privacy-terms" element={<PrivacyTermsPage />} />
        <Route
          path="/service-alarm-terms"
          element={<ServiceAlarmTermsPage />}
        />
        <Route
          path="/over-14-age-privacy-terms"
          element={<Over14AgePrivacyTermsPage />}
        />
        <Route path="/usage-terms" element={<UsageTermsPage />} />

        {/* 차수와 마감일 지정 페이지 */}
        <Route path="/private/setVariables" element={<SetDueDate />} />
      </Routes>
    </Router>
  );
}

export default App;

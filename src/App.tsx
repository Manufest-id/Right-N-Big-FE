import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./components/Services";
import Team from "./pages/Team";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import BusinessTraining from "./pages/BusinessTraining";
import BusinessCoaching from "./pages/BusinessCoaching";
import BusinessConsulting from "./pages/BusinessConsulting";
import SMEEmpowerment from "./pages/SMEEmpowerment";
import PersonalMapping from "./pages/PersonalMapping";
import ManagementServices from "./pages/ManagementServices";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/business-training"
            element={<BusinessTraining />}
          />
          <Route
            path="/services/business-coaching"
            element={<BusinessCoaching />}
          />
          <Route
            path="/services/business-consulting"
            element={<BusinessConsulting />}
          />
          <Route
            path="/services/sme-empowerment"
            element={<SMEEmpowerment />}
          />
          <Route
            path="/services/personal-mapping"
            element={<PersonalMapping />}
          />
          <Route
            path="/services/management-services"
            element={<ManagementServices />}
          />{" "}
          {/* New route */}
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

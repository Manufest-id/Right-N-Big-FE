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
import BusinessCoaching from "./pages/BusinessCoaching";
import BusinessConsulting from "./pages/BusinessConsulting";
import SMEEmpowerment from "./pages/SMEEmpowerment";
import PersonalMapping from "./pages/PersonalMapping";
import ManagementServices from "./pages/ManagementServices";
import SalesRevolution from "./pages/SalesRevolution";

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
            path="/services/sales-revolution"
            element={<SalesRevolution />}
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
        <a
          href="http://wa.me/6281319111124"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 1000,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/whatsapp.png"
            alt="WhatsApp"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

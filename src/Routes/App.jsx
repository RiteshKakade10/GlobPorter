import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../../src/App.css';
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Enterprise from "../pages/Enterprise.jsx";
import DriverPartner from "../pages/DriverPartner.jsx";
import Support from "../pages/Support.jsx";
import Enquiry from '../pages/Enquiry.jsx';
import Footer from '../components/Footer.jsx';
import Blogs from "../pages/Blogs.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import TermsAndConditions from "../pages/TermsAndConditions.jsx";

function App() {
  return (
    <Router basename="/frontend/">
      {/* Full page flex layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content grows to push footer down */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/driver" element={<DriverPartner />} />
            <Route path="/support" element={<Support />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/blogs" element={<Blogs />} />

            {/* footer Tabs*/}
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { navLinks } from "./utils/constant";
import "./index.css";

// Import all pages
import Home from "./components/pages/Home";
import About from "./components/pages/About/About";
import Academics from "./components/pages/Academics/Academics";
import Campus from "./components/pages/Campus";
import OurFounder from "./components/pages/OurFounder";
import Donation from "./components/pages/Donation";

// Import About sub-pages
import AboutFacilities from "./components/pages/About/AboutActivities";
import AboutRules from "./components/pages/About/AboutRules";
import AboutPTM from "./components/pages/About/AboutPTM";
import AboutActivities from "./components/pages/About/AboutActivities";
import AboutFaculty from "./components/pages/About/AboutFaculty";
import AboutAgeCriteria from "./components/pages/About/AboutAgeCriteria";
import AboutEthos from "./components/pages/About/AboutEthos";

// Import Academics sub-pages
import AcademicsPolicy from "./components/pages/Academics/AcademicsPolicy";
import AcademicsStrategies from "./components/pages/Academics/AcademicsStrategies";
import AboutCurriculum from "./components/pages/About/AboutCurriculum";
import HomeWork from "./components/pages/HomeWork";
import Login from "./components/pages/Login";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/our-founder" element={<OurFounder />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/login" element={<Login />} />

            {/* About Us Sub-routes */}
            <Route path="/aboutus" element={<About />} />
            <Route path="/about/rules" element={<AboutRules />} />
            <Route path="/about/ptm" element={<AboutPTM />} />
            <Route path="/about/activities" element={<AboutActivities />} />
            <Route path="/about/curriculum" element={<AboutCurriculum />} />
            <Route path="/about/faculty" element={<AboutFaculty />} />
            <Route path="/about/age-criteria" element={<AboutAgeCriteria />} />
            <Route path="/about/ethos" element={<AboutEthos />} />

            {/* Academics Sub-routes */}
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/policy" element={<AcademicsPolicy />} />
            <Route path="/academics/strategies" element={<AcademicsStrategies />} />
            <Route path="/homework" element={<HomeWork />} />

            {/* 404 Page */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Go Back Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import Donation from './pages/Donation'
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Gallery from './pages/Gallery'

function App() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
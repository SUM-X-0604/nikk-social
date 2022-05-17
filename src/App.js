import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ErrorPage from "./components/ErrorPage";


function App() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
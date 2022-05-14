import About from "./components/About";
import Blog from "./components/Blog";
import Care from "./components/Care";
import Causes from "./components/Causes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
// import Statistics from "./components/Statistics";
import Testimonial from "./components/Testimonial";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
// ..

function App() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Statistics /> */}
      <Causes />
      <Quote />
      <Care />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
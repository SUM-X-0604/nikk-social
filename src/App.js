import About from "./components/About";
import Blog from "./components/Blog";
import Care from "./components/Care";
import Causes from "./components/Causes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Statistics from "./components/Statistics";
import Testimonial from "./components/Testimonial";

function App() {
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
import About from "./components/About";
import Blog from "./components/Blog";
import Care from "./components/Care";
import Causes from "./components/Causes";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Statistics />
      <Causes />
      <Quote />
      <Care />
      <Blog />
    </>
  );
}

export default App;
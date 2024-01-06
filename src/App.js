import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Courses from "./components/Courses";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
       < Home />
       <Sociallinks />
       <About />
       <Courses />
       <Experience />
       <Contact />
    </div>
  );
}

export default App;

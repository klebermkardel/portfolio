import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import './index.css';
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
};

export default App;
import Spotlight from "./components/Spotlight";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import About from "./components/Skills";

export default function App() {
  return (
    <>
      <Spotlight />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
        </main>
      </div>
    </>
  );
}

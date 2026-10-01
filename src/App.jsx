import Spotlight from "./components/Spotlight";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Spotlight />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
        </main>
      </div>
    </>
  );
}
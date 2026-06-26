
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-portfolio-bg min-h-screen text-portfolio-text selection:bg-portfolio-accent selection:text-white relative">
      <Hero />
      <About />
      <Roadmap />
      <Skills />
      <Projects />
      <GitHubStats />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

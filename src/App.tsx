import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import Awards from './components/Awards';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
function App() {
  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>
          <Work />
          <Experience />
          <Awards />
          <Skills/>
          <About />
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
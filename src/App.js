
import './App.css';
import About from './Components/About';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';            

function App() {
  return (
    <div>
      <Header />
      <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="education">
        <Education />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Nav from './Nav'
import Contact from './Contact'
import ParticleBackground from './ParticleBackground';
import TypingEffect from './TypingEffect';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <main>
      <ParticleBackground />

      <div style={{ position: "relative", zIndex: 10 }}>
        <Nav />
      </div>

      <section id="home">
        <TypingEffect />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}


export default App;


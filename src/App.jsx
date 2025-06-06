import Header from '../src/Header'
import Nav from './Nav'
import ProjectList from './ProjectList';
import Contact from './Contact'
import { Route, Routes } from "react-router";
import ParticleBackground from './ParticleBackground';
import TypingEffect from './TypingEffect';
import Skills from './Skills';
import ScrollTrigger from './ScrollTrigger';

function App() {
  return (
    <main>
  <ParticleBackground />
  <div style={{ position: "relative", zIndex: 10 }}>
    <Nav />
    <TypingEffect />
  </div>
  <ScrollTrigger/>
  <Skills/>
</main>
    // <main>
    //   <Nav/>
    //   <ParticleBackground/>
    //   <TypingEffect/>
    //   {/* <Routes>
    //     <Route path='/' element={<Header/>}/>
    //     <Route path='/projects' element={<ProjectList/>}/>
    //     <Route path='/contact' element={<Contact/>}/>
    //   </Routes> */}
    // </main>
  
  )
}

export default App

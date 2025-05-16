import Header from '../src/Header'
import Nav from './Nav'
import ProjectList from './ProjectList';
import Contact from './Contact'
import { Route, Routes } from "react-router";

function App() {
  return (
    <main>
      <Nav/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/projects' element={<ProjectList/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </main>
  
  )
}

export default App

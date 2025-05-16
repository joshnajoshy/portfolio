import ImgCard from "./ImgCard";
import ProjectList from "./ProjectList";
import { Link } from "react-router";
import Projects from './Projects'

function Header () {
    function linkedInHandler() {
        return window.open("https://www.linkedin.com/in/joshna-joshy-a724b11b6/", "_blank")
    }
    function GitHubHandler() {
        return window.open("https://github.com/joshnajoshy", "_blank") 
    }

    return (
        <>
        <section className= "contentBorder"> 
            <div className="imageContainer"><ImgCard/></div>
            <h4 className="roleName">Junior Software Developer</h4>
            <h1 className="name">Hello, My name is Joshna Joshy</h1>
            <p className="about">I'm a career switcher with a background in nursing, now pursuing my passion for software development. I recently completed an intensive JavaScript bootcamp with Northcoders. I enjoy solving problems through code, learning new technologies, and building tools that create meaningful user experiences.</p>
            <div className="buttonContainer">
            <Link className="projectButtonLink" to="/projects"><button className="yellowButton">Projects</button></Link>
            <button onClick={linkedInHandler} className="transparentButton">LinkedIn</button>
            <button onClick={GitHubHandler} className="transparentButton">GitHub</button>
            </div>
        </section>
         <Projects />
         </>
    )

}

export default Header;
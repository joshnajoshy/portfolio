import ImgCard from "./ImgCard";

function Header () {
    function linkedInHandler() {
        return window.open("https://www.linkedin.com/in/joshna-joshy-a724b11b6/", "_blank")
    }
    return (
        <section className= "contentBorder"> 
            <div className="imageContainer"><ImgCard/></div>
            <h4 className="roleName">Junior Software Developer</h4>
            <h1 className="name">Hello, My name is Joshna Joshy</h1>
            <p className="about">I'm a career switcher with a background in nursing, now pursuing my passion for software development. I recently completed an intensive JavaScript bootcamp with Northcoders. I enjoy solving problems through code, learning new technologies, and building tools that create meaningful user experiences.</p>
            <div className="buttonContainer">
            <button className="yellowButton">Projects</button>
            <button onClick={linkedInHandler} className="transparentButton">LinkedIn</button>
            </div>
        </section>
    )

}

export default Header;
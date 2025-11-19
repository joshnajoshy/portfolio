
import { FaBook, FaServer, FaDatabase, FaCoffee, FaJs, FaReact, FaPython, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiJest, SiMongodb, SiBootstrap, SiNetlify } from "react-icons/si";
import "./index.css";

function Skills() {
    return (
        <section className="skills-section">
            <h1 className="skills-title">Technical Skills</h1>
            <div className="skills-buttons">
                <button className="transparentButton"><FaJs size={32} color="#F7DF1E" /> JavaScript</button>
                <button className="transparentButton"><FaCoffee size={32} color="#007396" /> Java</button>
                <button className="transparentButton"><FaPython size={32} color="#3776AB" /> Python</button>
                <button className="transparentButton">
                    <SiTypescript size={32} color="#3178C6" /> TypeScript
                </button>
                <button className="transparentButton">
                    <SiJest size={32} color="#C21325" /> Jest
                </button>
                <button className="transparentButton">
                    <FaDatabase size={32} color="#336791" /> PSQL
                </button>
                <button className="transparentButton">
                    <FaDatabase size={32} color="#4479A1" /> MySQL
                </button>
                <button className="transparentButton">
                    <SiMongodb size={32} color="#47A248" /> MongoDB
                </button>
                <button className="transparentButton">
                    <FaServer size={32} color="#FF9900" /> AWS
                </button>
                <button className="transparentButton">
                    <FaServer size={32} color="#3ECF8E" /> Supabase
                </button>

                <button className="transparentButton"><FaHtml5 size={32} color="#E34F26" /> HTML</button>
                <button className="transparentButton"><FaCss3Alt size={32} color="#1572B6" /> CSS</button>
                <button className="transparentButton"><FaReact size={32} color="#61DAFB" /> React</button>
                <button className="transparentButton">
                    <SiBootstrap size={32} color="#7952B3" /> Bootstrap
                </button>
                <button className="transparentButton"><FaBook size={32} color="#3776AB" /> Jupyter Notebook / Pandas / NumPy / Seaborn</button>
                <button className="transparentButton">
                    <SiNetlify size={32} color="#00C7B7" /> Netlify
                </button>
            </div>
        </section>
    );
}

export default Skills;





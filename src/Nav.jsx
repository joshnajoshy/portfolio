function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg nav-transparent fixed-top"
      style={{ padding: "10px 20px" }}
    >
      <a className="navbar-brand text-white fw-bold" href="#home">
        My Portfolio
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link text-white" href="#skills">Skills</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#projects">Projects</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;




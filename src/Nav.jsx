
function Nav () {
return (
      <nav id="navbar-example2" className="navbar bg-dark navbar-dark px-3 mb-3 fixed-top">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">Projects</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link" href="#scrollspyHeading2">Contact Me</a>
          </li>
        </ul>
      </nav>
)
}

export default Nav;
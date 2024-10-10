import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <nav className="navigation">
      <h2>George</h2>

      <ul className="navigation__ul">
        <li><Link to='/'>Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>

      <div className="navigation__social-media">
        <a href="#contact-me" className="btn">Hire Me</a>
        <div className="social-media__icons">
          <a href="https://github.com/Ratified"><i className="fab fa-github"></i></a>
          <a href="www.linkedin.com/in/george-kamunge-2a30a5233"><i className="fab fa-linkedin-in"></i></a> 
        </div>
      </div>
    </nav>
  )
}

export default Navbar

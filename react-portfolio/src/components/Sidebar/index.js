import './index.scss';
import { useState } from 'react';
import LogoS from '../../assets/images/letter_E.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faBitbucket, } from '@fortawesome/free-brands-svg-icons';
import { faHome,faUser,faEnvelope,faSuitcase,faClose,faBars,} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { SiDevpost } from "react-icons/si";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/"  onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <p>Erick Tepan</p>
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#F5F5F5" />
        </NavLink>

        <NavLink activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#F5F5F5" />
        </NavLink>

        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio"onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="#F5F5F5" />
        </NavLink>

        <NavLink activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#F5F5F5" />
        </NavLink>
        
        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#F5F5F5"
          size="3x"
          className='close-icon' />
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/erick-tepan-038118226/"
            target="_blank"
            rel="noreferrer"
          >
          <FontAwesomeIcon icon={faLinkedin} color="#F5F5F5" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ert224"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#F5F5F5" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            href="https://bitbucket.org/ert224/"
            target="_blank"
            rel="noreferrer"
          >
          <FontAwesomeIcon icon={faBitbucket} color="#F5F5F5" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            href="https://devpost.com/ert224"
            target="_blank"
            rel="noreferrer"
          >
          <SiDevpost/>
          </a>
        </li>
      </ul>
      <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar

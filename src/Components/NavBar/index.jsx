// Import NPM
import { NavLink } from 'react-router-dom'

// Import Components

// Import Assets
import "./styles.scss";

const NavBar = () => {

  return (

    <>

    <nav className="navbar-container">

      <ul>

        <NavLink to="/">
          <li>home</li>
            </NavLink>
        <li>register</li>
        <NavLink to="login">
          <li>login</li>
            </NavLink>

      </ul>

    </nav>

    </>
    
  )

}

export default NavBar;
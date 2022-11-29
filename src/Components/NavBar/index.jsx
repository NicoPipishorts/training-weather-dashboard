// Import NPM
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Import Components

// Import Assets
import "./styles.scss";

const NavBar = () => {

  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const userName = useSelector((state) => state.users.user.username);

  console.log(
    'the current user logged state : ',
    isLoggedIn,
    ' with a username of : ', 
    userName
    )

  return (

    <>

    <nav className="navbar-container">

      <ul>

        <NavLink to="/">
          <li>home</li>
            </NavLink>
        <li>register</li>

        {
        !isLoggedIn && (
        <NavLink to="login">
          <li>login</li>
            </NavLink>)
        }

        {
        isLoggedIn && (
        <NavLink to="login">
          <li>{userName}</li>
            </NavLink>)
        }

      </ul>

    </nav>

    </>
    
  )

}

export default NavBar;
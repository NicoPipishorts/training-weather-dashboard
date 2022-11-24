// Import NPM
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Import Components

// Import Assets
import { userLogin } from "../../actions/users"
import "./styles.scss";

const Login = ( {NavBar } ) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogin());
  }, []
  )

  return (

  <>
  
    { NavBar }
    
    <section className="login-container">
      
      <h1 className="login-title">Login</h1>
      
      <form>

        <label htmlFor="username" className="__form-labels">Username</label>
        <input type="text" id="username" name="username" className="__form-elements" />

        <label htmlFor="password" className="__form-labels">password</label>
        <input type="password" id="password" name="password" className="__form-elements" />

        <button type="submit" className="__form-elements __form-buttons">enter</button>

      </form>

    </section>
  
  </>
    
  )

}

export default Login;
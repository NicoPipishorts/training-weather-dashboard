// Import NPM
import { useDispatch, useSelector } from 'react-redux';

// Import Components

// Import Assets
import { userLogin, setLoginInfo } from "../../actions/users"
import "./styles.scss";

const Login = ( {NavBar } ) => {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const userName = useSelector((state) => state.users.user.username);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin())
  }

  return (

  <>
  
    { NavBar }
    
    {!isLoggedIn && (
    <section className="login-container">
      
      <h1 className="login-title">Login</h1>
      
      <form>

        <label htmlFor="username" className="__form-labels">Username</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          className="__form-elements" 
          onChange={e => dispatch(setLoginInfo(e.target.name, e.target.value))}
        />

        <label htmlFor="password" className="__form-labels">password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          className="__form-elements" 
          onChange={e => dispatch(setLoginInfo(e.target.name, e.target.value))} 
        />

        <button 
          type="submit" 
          className="__form-elements __form-buttons"
          onClick={handleLogin}
        >enter</button>

      </form>

    </section>
  
  )}

  {isLoggedIn && (
    <>
    <h1>Welecome {userName} </h1>
    </>
  )}
  
  </>
    
  )

}

export default Login;
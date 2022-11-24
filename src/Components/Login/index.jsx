// Import NPM

// Import Components

// Import Assets
import "./styles.scss";

const Login = ( {NavBar } ) => {

  return (

  <>
  
    { NavBar }
    
    <section className="login-container">
      
      <h1 className="login-title">Login</h1>
      
      <form>

        <label for="username">Username</label>
        <input type="text" id="username" name="username" />

        <label for="password">password</label>
        <input type="password" id="password" name="password" />

      </form>

    </section>
  
  </>
    
  )

}

export default Login;
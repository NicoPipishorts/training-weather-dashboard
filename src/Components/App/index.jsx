// Import NPM
import { Routes, Route  } from "react-router-dom";

// Import Assets
import './styles.scss';

// Import Components
import NavBar from '../NavBar'
import Login from '../Login'
import Dashboard from '../Dashboard';

const App = () => {

	return (
	
	<main className="app-wrapper">
		<Routes>
			<Route 
        path="/" 
        element= {
          <Dashboard 
            NavBar = {<NavBar />}
          />
			  } 
      />
			<Route
				path="/login"
				element= {
          <Login 
            NavBar = {<NavBar />}          
          />
        }
			/>
		</Routes>
	</main>

	)
    
}

export default App;
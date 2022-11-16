// Import NPM
import { Routes, Route  } from "react-router-dom";

// Import Assets
import './styles.scss';

// Import Components
import About from '../About'
import Dashboard from '../Dashboard';

const App = () => {

	return (
	
	<main className="app-wrapper">
		<Routes>
			<Route path="/" element= {
					<Dashboard />
			} />
			<Route
					path="/about"
					element= {<About />}
			/>
		</Routes>
	</main>

	)
    
}

export default App;
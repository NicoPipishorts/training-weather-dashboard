// Import NPM
import { Routes, Route  } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";

// Import Assets
import { apiGeocoding } from "../../Hooks/apiGeocoding";
import './styles.scss';

// Import Components
import About from '../About'
import Dashboard from '../Dashboard';

const App = () => {

    const [zipcode, setZipcode] = useState();
    const [cityName, setCitName] = useState();

    const apiKey = "c3b933db36214330f5baa93574803f1d"

    const geocodingByName = `http://api.openweathermap.org/geo/1.0/direct?q=Paris&limit=1&appid=${apiKey}`;
    const geocodingByZip = `http://api.openweathermap.org/geo/1.0/zip?zip=90275,US&appid=${apiKey}`;

    const {
        isLoading, 
        isError, 
        data: geoCoding, 
        error } = 
        useQuery(
            ['geoCoding'],
            () => apiGeocoding(geocodingByZip)
        );

    console.log("This is the city name :", cityName);

    return (
    <Routes>
				<Route path="/" element= {
					<Dashboard />
				} />
				<Route
					path="/about"
					element= {<About />}
				/>
    </Routes>

    )
    
}

export default App;
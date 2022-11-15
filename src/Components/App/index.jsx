// Import NPM
import { useQuery } from "react-query";

// Import Assets
import { apiGeocoding } from "../../Hooks/apiGeocoding";
import './styles.scss';

const App = () => {

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

    console.log(geoCoding);

    return (
    <>
    <main className="app-wrapper">
        Welcome to Pipz Weather Dashboard!
    </main>
    </>

    )
    
}

export default App;
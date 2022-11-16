// -- NPM Imports
import axios from "axios";

const apiKey = "c3b933db36214330f5baa93574803f1d";

const api = axios.create({
    baseUrl: `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`,
    timeout: 5000,
    headers: {
        Authorization: 'Bearer secret',
    }
})

export function loadGeocoding() {
    return api.get
}
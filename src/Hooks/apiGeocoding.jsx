// Import NPM
import axios from "axios";

export const apiGeocoding = async (baseUrl) => {
    try {
        const response = await axios.get(baseUrl);
        return response;
    } catch (error) {
        return console.log(error);
    }
}

export default apiGeocoding;
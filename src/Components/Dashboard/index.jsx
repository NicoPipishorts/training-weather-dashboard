// Import NPM
import { useState } from "react";

// Import Assets
import { TextField, Button } from "@mui/joy"

// Import Components

const apiKey = "c3b933db36214330f5baa93574803f1d"

const Dashboard = () => {

  const [zipcode, setZipcode] = useState();
  const [cityName, setCityName] = useState('London');

  return (
    <>
      <h1 className="dashboard-title">Welcome to Pipz Weather Dashboard!</h1>
      <TextField
        placeholder="Search by City Name" 
        onChange={e => setCityName(e.target.value)} 
      />
      <br />
      {/* <TextField
        placeholder="Search by Zip Code" 
        onChange={e => setZipcode(e.target.value)} 
      /> */}
      <Button variant="outlined" onClick>Search</Button>
    </>
  )

}

export default Dashboard;
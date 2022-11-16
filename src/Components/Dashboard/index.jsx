// Import NPM
import { useDispatch } from "react-redux"
import { useState } from "react"

// Import Assets
import { TextField, Button } from "@mui/joy"
import { setZipcode } from "../../actions/main"

// Import Components

const apiKey = "c3b933db36214330f5baa93574803f1d"

const Dashboard = () => {

  const [ tempZipcode, setTempZipcode ]= useState('');

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("I am clicking on the search button and inserting the value of : ", tempZipcode)
    dispatch(setZipcode(tempZipcode))
  }

  console.log(tempZipcode);

  return (
    <>
      <h1 className="dashboard-title">Welcome to Pipz Weather Dashboard!</h1>
      <TextField
        placeholder="Search by City Name" 
        onChange={e => setTempZipcode(e.target.value)} 
      />
      <br />
      {/* <TextField
        placeholder="Search by Zip Code" 
        onChange={e => setZipcode(e.target.value)} 
      /> */}
      <Button variant="outlined" onClick={handleSearch}>Search</Button>
    </>
  )

}

export default Dashboard;
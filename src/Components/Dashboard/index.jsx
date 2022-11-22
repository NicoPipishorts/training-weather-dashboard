// Import NPM
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"

// Import Assets
import { setIsLoading, setCityName, searchByCityName } from "../../actions/search"
import './styles.scss';

// Import Components
import Spinner from '../Spinner'

const apiKey = "c3b933db36214330f5baa93574803f1d"

const Dashboard = () => {

  const dispatch = useDispatch();
  const { zipcode, cityName, isLoading } = useSelector((state) => state.search)
  const results = useSelector((state) => state.search.results) || [];

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true))
    dispatch(searchByCityName());
  }

  if(zipcode) {
    console.log("the zipcode is not empty");
  }

  return (
    <>
      <section className="dashboard__seach">
        <h1 className="dashboard-title">Welcome to Pipz Weather Dashboard!</h1>

        <form>
          <input 
            type="text" 
            className="dashboard__search--fields dashboard__search--input" 
            placeholder="Search by City Name"
            onChange={e => dispatch(setCityName(e.target.value))} 
          />
          <button
            type="submit"
            value=" search"
            className={`dashboard__search--fields dashboard__search--button ${ cityName ? "dashboard__search--button-active" : ""}`}
            
            onClick={handleSearch}
          > search </button>
        </form>

      </section>


      <h2>Select your city of choice : </h2>
      <section className="dashboard__results-container">
      {(isLoading) && <Spinner />}
      {
        results.map((result) => (
          <article key={uuidv4()}className="dashboard__results--card-body">
            <span className="dashboard__results--card-subtitle">{result.country}, {result.state}</span>
            <span className="dashboard__results--card-title">{result.name}</span>
            <span className="dashboard__results--card-subtitle">Lat : {result.lat} </span>
            <span className="dashboard__results--card-subtitle">Lon : {result.lon} </span>
          </article>
        ))
      }
      </section>
    </>
  )

}

export default Dashboard;
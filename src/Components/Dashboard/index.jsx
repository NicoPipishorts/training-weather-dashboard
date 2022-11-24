// Import NPM

// Import Assets
import './styles.scss';

// Import Components
import CityList from './CityList'
import SearchForm from './SearchForm'

const apiKey = "c3b933db36214330f5baa93574803f1d"

const Dashboard = ( { NavBar }) => {

  return (
    <>
      
      { NavBar }

      <SearchForm />

      <CityList />
      
    </>
  )

}

export default Dashboard;
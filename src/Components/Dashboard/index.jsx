// Import NPM
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

// Import Assets
import './styles.scss';
import { setUserToken, userGetInfo } from '../../actions/users'

// Import Components
import CityList from './CityList'
import SearchForm from './SearchForm'

const Dashboard = ( { NavBar }) => {

  const dispatch = useDispatch();

  const localUserToken = localStorage.getItem('userToken');

  useEffect(() => ( 
    dispatch(userGetInfo())
  ), []
  )

  if(localUserToken !== null) {
    let base64Url = localUserToken.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    const payload = JSON.parse(jsonPayload)
    const currentTimeStamp = Math.floor(Date.now() / 1000)
    
    if(payload.exp > currentTimeStamp) {
      dispatch(setUserToken(payload, localUserToken))
    } else {
      console.log('you are no longer logged in')
    }
  }

  return (
    <>
      
      { NavBar }

      <SearchForm />

      <CityList />
      
    </>
  )

}

export default Dashboard;
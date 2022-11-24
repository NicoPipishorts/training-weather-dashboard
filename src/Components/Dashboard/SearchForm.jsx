// Import NPM
import { useDispatch, useSelector } from "react-redux"

// Import Components

// Import Assets
import { setIsLoading, setCityName, searchByCityName } from "../../actions/search"

const SearchForm = () => {

  const dispatch = useDispatch();
  const { zipcode, cityName } = useSelector((state) => state.search)
  const results = useSelector((state) => state.search.results) || [];

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true))
    dispatch(searchByCityName());
  }

	return (

		<section className="dashboard__seach">
		<h1 className="dashboard-title">Welcome to Pipz Weather Dashboard!</h1>
	
		<form className>
      <label className="__form-labels">
      City Name
      </label>
			<input 
				type="text" 
				className="__form-elements dashboard__search--input" 
				placeholder="City Name"
				onChange={e => dispatch(setCityName(e.target.value))} 
			/>
			<button
				type="submit"
				value=" search"
				className={`__form-elements __form-buttons dashboard__search--button ${ cityName ? "dashboard__search--button-active" : "dashboard__search--button-inactive"}`}				
				onClick={handleSearch}
			> search </button>
		</form>
	
		</section>

	)

}

export default SearchForm;
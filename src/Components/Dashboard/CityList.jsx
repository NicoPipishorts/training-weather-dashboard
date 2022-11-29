// Import NPM
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid"

// Import Components
import Spinner from '../Spinner'

// Import Assets

const CityList = () => {
  const { results, isLoading } = useSelector((state) => state.search)

	return (
		<>
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

export default CityList;
import {Movie} from "./Movie"

function Movies(props){
	const {movies = []} = props;
	return (
		<div className='main-movie'>
			{
				movies.length ? (
					movies.map(movie => (<Movie key={movie.imdbID} {...movie}/> 
					))
				) : <h3>Loading...</h3>
				
			}
		</div>
	)
}

export {Movies};
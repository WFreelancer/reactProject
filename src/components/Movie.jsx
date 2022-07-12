export function Movie(props){
	const {Title, Year, Poster} = props
	return (
		<div className="movie-card">
			<div className="movie-card__image">
				<img src={Poster} alt="" />
			</div>
			<div className="movie-card__body">
				<h3>{Title}</h3>
				<div className="movie-card__text">{Year}</div>
			</div>
		</div>
	)
}

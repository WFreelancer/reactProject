import React, {useState} from "react";

const Search = (props) => {
	const [search, isSearch] = useState('');
	const [filter, isFilter] = useState('all');


	const handleRadio = (e) => {
		isFilter(e.target.value);
		props.searchPost(search, e.target.value)
	}

	return (
		<>
			<div className="search-main">
				<input type="text" value={search} onChange={(e) => isSearch(e.target.value)}/>
				<button className="btn" onClick={() => props.searchPost(search, filter)}>Search</button>
			</div>
			<div className="filter-main">
				<label className="filter-main__label">
					<input name="filter" value="all" type="radio" onChange={handleRadio} checked={filter === "all"}/>all
				</label>
				<label className="filter-main__label">
					<input name="filter" value="movie" type="radio" onChange={handleRadio} checked={filter === "movie"}/>movies
				</label>
				<label className="filter-main__label">
					<input name="filter" value="series" type="radio" onChange={handleRadio} checked={filter === "series"}/>series
				</label>
			</div>
		</>
	)
}

export {Search};
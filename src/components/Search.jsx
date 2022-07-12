import React from "react";

class Search extends React.Component{
	constructor(){
		super();
		this.state = {
			search: '',
			filter: 'all',
		}

		this.myRef = React.createRef();
	}

	componentDidMount() {
		this.myRef.current.focus();
	}

	handleRadio = (e) => {
		this.setState(() => ({filter: e.target.value}), () => {
			this.props.searchPost(this.state.search, this.state.filter)
		})
	}


	render(){
		const {search, filter} = this.state;
		const {searchPost} = this.props;
		return (
			<>
				<div className="search-main">
					<input type="text" value={search} onChange={(e) => this.setState({search: e.target.value})} ref={this.myRef}/>
					<button className="btn" onClick={() => searchPost(search, filter)}>Search</button>
				</div>
				<div className="filter-main">
					<label className="filter-main__label">
						<input name="filter" value="all" type="radio" onChange={this.handleRadio} checked={filter === "all"}/>all
					</label>
					<label className="filter-main__label">
						<input name="filter" value="movie" type="radio" onChange={this.handleRadio} checked={filter === "movie"}/>movies
					</label>
					<label className="filter-main__label">
						<input name="filter" value="series" type="radio" onChange={this.handleRadio} checked={filter === "series"}/>series
					</label>
				</div>
			</>
		)
	}
}

export {Search};
import React, {useState, useEffect} from "react";
import {Posts} from '../components/Posts';
import {Form} from '../components/Form'
import {Subscribe} from '../components/Subscribe'
import {Movies} from '../components/Movies'
import {Search} from '../components/Search'
import {Quantity} from '../components/Quantity'
import {Timer} from '../components/Timer'
import {Color} from '../components/Color'
import {Shop} from '../shop/Shop'
import {API_KEY} from '../config'


const Main = () => {
	const [loading, setLoading] = useState(true);
	const [clicker, setClicker] = useState(false);
	const [movies, setMovies] = useState([]);

	const searchPost = (str, filter = "all") => {
		setLoading(true);
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str !== '' ? str : 'all'}${filter !== 'all' ? `&type=${filter}` : ''}`)
		.then(response => response.json())
		.then(data => {
			setMovies(data.Search);
			setLoading(false);
		})
	}

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=all`)
		.then(response => response.json())
		.then(data => {
			setMovies(data.Search);
			setLoading(false);
		})
	}, [])
	
	

	return (
		<div className="block container">
			<Shop/>
			<Color/>
			<Timer/>
			<button onClick={() => setClicker(!clicker)}>toggle clicker</button>
			{clicker && <Quantity/>}
			<Search searchPost={searchPost}/>
			{loading ? <h3>Loading...</h3> : <Movies movies={movies}/>}
			<Form />
			<Posts/>
			<Subscribe />
		</div>
	);
}

export {Main};

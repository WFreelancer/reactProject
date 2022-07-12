import React from "react";
import {Posts} from '../components/Posts';
import {Form} from '../components/Form'
import {Subscribe} from '../components/Subscribe'
import {Movies} from '../components/Movies'
import {Search} from '../components/Search'

// const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component{
	state = {
		posts: [
			{id: 'ab1', name: 'firstPost'},
			{id: 'ab2', name: 'secondPost'},
			{id: 'ab3', name: 'theerdPost'}
		],
		movies:[],
		loading: true,
	}

	searchPost = (str, filter = "all") => {
		this.setState({loading: true})
		fetch(`https://www.omdbapi.com/?apikey=925a4caa&s=${str !== '' ? str : 'all'}${filter !== 'all' ? `&type=${filter}` : ''}`).then(response => response.json()).then(data => this.setState({movies: data.Search, loading: false}))
	}

	componentDidMount(){
		fetch(`https://www.omdbapi.com/?apikey=925a4caa&s=all`).then(response => response.json()).then(data => this.setState({movies: data.Search, loading: false}))
	}
	
	
	deletePost = (id) => {
		this.setState({posts: this.state.posts.filter(post => {
			return post.id !== id
		}
		)});
	}

	render () {
		const {posts, movies, loading} = this.state;
		return (
			<div className="block container">
				<Search searchPost={this.searchPost}/>
				{loading ? <h3>Loading...</h3> : <Movies movies={movies}/>}
				<Form />
				<Posts posts={posts} deletePost={this.deletePost}/>
				<Subscribe />
			</div>
		);
	}
}

export {Main};

import React, {Component} from "react";
import {Movie} from "./Movie"

class Movies extends Component{
	render(){
		return (
			<div className='main-movie'>
				<Movie/>
			</div>
		)
	}
}

export {Movies};
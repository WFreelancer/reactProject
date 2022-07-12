import React from "react";
import {Header} from './layout/Header'
import {Main} from './layout/Main'
import {Footer} from './layout/Footer'

class App extends React.Component{
	render () {
		return (
			<React.Fragment>
				<Header/>
				<Main />
				<Footer/>
			</React.Fragment>
		);
	}
}

export default App;




// import {Book} from './Book';
// import Preloader from './Proloader';

// const App = (props) => {
// 	return props.isLoading ? <Preloader/> : (
// 		<div className='block'>
// 			<Book name="James" year="2000"/>
// 			<Book name="Jam" year="1990"/>
// 		</div>
// 	);
// }



// class App extends React.Component{
// 	state = {
// 		time: 0,
// 		stop: true,
// 	}

// 	componentDidMount() {
// 		// fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => this.setState({posts: data, loading: false}))
// 		const data = localStorage.getItem('time')
// 		if(data){
// 			this.setState({time: +data})
// 		}
		
// 	}

// 	componentDidUpdate() {
//         localStorage.setItem('time', this.state.time)
//     }

// 	startTimer = () => {
// 		this.timerId = setInterval(()=>{
// 			this.setState({time: this.state.time + 1, stop: false})
// 		}, 1000)
// 	}

// 	stopTimer = () => {
// 		clearInterval(this.timerId)
// 		this.setState({stop: true})
// 	}

// 	resetTimer = () => {
// 		clearInterval(this.timerId)
// 		this.setState({time: 0, stop: false})
// 	}
	

// 	render () {
// 		return (
// 			<div className='block' style={{width:'200px', display:'flex', alignItems: 'center', flexDirection: 'column'}}>
// 				<h2 style={{textAlign:'center'}}>{this.state.time}</h2>
// 				<div style={{display:'flex'}}>
// 					{this.state.stop ? (
// 						<button onClick={this.startTimer} style={{marginRight:'10px'}}>Start</button>
// 						) : (
// 						<button onClick={this.stopTimer} style={{marginRight:'10px'}}>Stop</button>
// 						)
// 					}
// 					<button onClick={this.resetTimer}>Reset</button>
// 				</div>
// 			</div>
// 		);
// 	}
// }


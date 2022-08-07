import {useState} from "react"

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const [checkbox, setCheckbox] = useState(false);


	const inputAction = (e) => {
		if(e.target.name === 'email'){
			setEmail(e.target.value);
		}
	}


	const checkboxAction = (e) => {
		if(e.target.name === 'checkbox'){
			setCheckbox(e.target.checked);
		}
	}

	const validationAction = () => {
		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
			alert('error email')
			return false;
		}else if(!checkbox){
			alert('error checkbox')
			return false;
		}else{
			alert('Send message')
		}
	}

	return(
		<div className="subscribe">
			<input type="text" name="email" value={email} onChange={inputAction}/>
			<label className="subscribe__label">
				<input type="checkbox" name="checkbox" checked={checkbox} onChange={checkboxAction}/>Some text
			</label>
			<button className="subscribe__button" onClick={validationAction}>Send</button>
		</div>
	)
}



// class Subscribe extends Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			email: '',
// 			checkbox: false,
// 		}

// 		this.myRef = React.createRef();
// 	}

// 	inputAction = (e) => {
// 		this.setState({[e.target.name]: e.target.value});
// 	}


// 	checkboxAction = (e) => {
// 		this.setState({[e.target.name]: e.target.checked})
// 	}

// 	validationAction = () => {
// 		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)){
// 			alert('error email')
// 			return false;
// 		}else if(!this.state.checkbox){
// 			alert('error checkbox')
// 			return false;
// 		}else{
// 			alert('Send message')
// 		}
// 	}

// 	render(){
// 		const {email, checkbox} = this.state;
// 		return(
// 			<div className="subscribe">
// 				<input type="text" name="email" value={email} onChange={this.inputAction}/>
// 				<label className="subscribe__label">
// 					<input type="checkbox" name="checkbox" checked={checkbox} onChange={this.checkboxAction}/>Some text
// 				</label>
// 				<button className="subscribe__button" onClick={this.validationAction}>Send</button>
// 			</div>
// 		)
// 	}
// }
export {Subscribe};


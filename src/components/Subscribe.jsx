import React, {Component} from "react"

class Subscribe extends Component{
	constructor(){
		super();
		this.state = {
			email: '',
			checkbox: false,
		}

		this.myRef = React.createRef();
	}

	inputAction = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}


	checkboxAction = (e) => {
		this.setState({[e.target.name]: e.target.checked})
	}

	validationAction = () => {
		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)){
			alert('error email')
			return false;
		}else if(!this.state.checkbox){
			alert('error checkbox')
			return false;
		}else{
			alert('Send message')
		}
	}

	componentDidMount() {
		console.log(this.myRef);
		this.myRef.current.focus();
	}

	render(){
		const {email, checkbox} = this.state;
		return(
			<div className="subscribe">
				<input type="text" name="email" value={email} onChange={this.inputAction} ref={this.myRef}/>
				<label className="subscribe__label">
					<input type="checkbox" name="checkbox" checked={checkbox} onChange={this.checkboxAction}/>Some text
				</label>
				<button className="subscribe__button" onClick={this.validationAction}>Send</button>
			</div>
		)
	}
}

export {Subscribe};


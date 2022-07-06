import React from "react";

class Form extends React.Component{
	state = {
		firstName: '',
		email: '',
		select: '',
		checkbox: false,
		gender: 'male',
	}

	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleCheckbox = (e) => {
		this.setState({[e.target.name]: e.target.checked})
	}
	render(){
		const {firstName, email, select, checkbox, gender} = this.state;
		return(
			<div className="form">
				<input type="text" name="firstName" value={firstName} onChange={this.handleInput}/>
				<input type="email" name="email" value={email} onChange={this.handleInput}/>
				<select name="select" value={select} onChange={this.handleInput}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				<input type="checkbox" name="checkbox" onChange={this.handleCheckbox} checked={checkbox}/>
				<div className="radio" style={{marginTop: "50px"}}>
					<input type="radio" name="gender" value='male' onChange={this.handleInput} checked={gender === 'male'}/>male
					<input type="radio" name="gender" value='female' onChange={this.handleInput} checked={gender === 'female'}/>female
				</div>
			</div>
		)
	}
}
export {Form};
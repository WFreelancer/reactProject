import React, {useReducer} from "react";

const reducer = (state, {type, payload = 50}) => {
	if(type === 'INCREMENT_R'){
		return{
			...state,
			r: state.r + payload
		}
	}else if(type === 'DECREMENT_R'){
		return{
			...state,
			r: state.r - payload
		}
	}else if(type === 'INCREMENT_G'){
		return{
			...state,
			g: state.r + payload
		}
	}else if(type === 'DECREMENT_G'){
		return{
			...state,
			g: state.r - payload
		}
	}else if(type === 'INCREMENT_B'){
		return{
			...state,
			b: state.r + payload
		}
	}else if(type === 'DECREMENT_B'){
		return{
			...state,
			b: state.r - payload
		}
	}
	return {state}
}

export const Color = () => {
	const [{r, g, b}, dispatch] = useReducer(reducer, {r:0, g:0, b: 0});


	return(
		<>
		<h1 style={{color: `rgb(${r}, ${g}, ${b})`}}>Text change color</h1>
		<div>
			<span>R</span>
			<button onClick={() => dispatch({type: 'INCREMENT_R'})}>+</button>
			<button onClick={() => dispatch({type: 'DECREMENT_R'})}>-</button>
		</div>
		<div>
			<span>G</span>
			<button onClick={() => dispatch({type: 'INCREMENT_G'})}>+</button>
			<button onClick={() => dispatch({type: 'DECREMENT_G'})}>-</button>
		</div>
		<div>
			<span>B</span>
			<button onClick={() => dispatch({type: 'INCREMENT_B'})}>+</button>
			<button onClick={() => dispatch({type: 'DECREMENT_B'})}>-</button>
		</div>
		</>
	)
}
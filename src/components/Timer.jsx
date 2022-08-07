import {useEffect, useReducer} from "react";

const reducer = (state, {type}) => {
	if(type === "START"){
		return{
			...state,
			timerStart: true
		}
	}
	if(type === "STOP"){
		return{
			...state,
			timerStart: false
		}
	}
	if(type === "RESET"){
		return{
			value: 0,
			timerStart: false
		}
	}
	if(type === "ISCOUNTING"){
		return{
			...state,
			value: state.value + 1,
		}
		
	}
	return state
}

const getStorage = () => {
	const setValue = localStorage.getItem("timer");
	return setValue ? +setValue : 0;
}

const Timer = () => {
	const [{value, timerStart}, dispatch] = useReducer(reducer, {value: getStorage(), timerStart: false});


	useEffect(() => {
		let idTimer = null;
		if(timerStart){
			idTimer = setInterval(() => {
				dispatch({type: "ISCOUNTING"})
				localStorage.setItem('time', value);
			}, 1000);
		}

		return () => {
			clearInterval(idTimer);
			idTimer = null;
		}
	}, [timerStart]);

	return(
		<div>
			{!timerStart ? 
			<button onClick={() => dispatch({type: "START"})}>start</button>
			: <button onClick={() => dispatch({type: "STOP"})}>stop</button>
			}
			<button onClick={() => dispatch({type: "RESET"})}>reset</button>
			<span>{value}</span>
		</div>
	)
}
// const Timer = () => {
// 	const [value, handleValue] = useLocalStorage(0, 'timer');
// 	const [timerStart, checkTimer] = useState(false);
// 	const idTimer = useRef(null);


// 	const handleValueStart = () => {
// 		checkTimer(true);
// 	}

// 	const handleValueStop = () => {
// 		checkTimer(false);
// 	}

// 	const handleValueReset = () => {
// 		handleValue(0);
// 		checkTimer(false);
// 	}

// 	useEffect(() => {
// 		if(timerStart){
// 			idTimer.current = setInterval(() => {
// 				handleValue(prevValue => prevValue + 1);
// 			}, 1000);
// 		}

// 		return () => {
// 			clearInterval(idTimer.current);
// 			idTimer.current = null;
// 		}
// 	}, [timerStart]);


	

// 	return(
// 		<div>
// 			{!timerStart ? 
// 			<button onClick={handleValueStart}>start</button>
// 			: <button onClick={handleValueStop}>stop</button>
// 			}
// 			<button onClick={handleValueReset}>reset</button>
// 			<span>{value}</span>
// 		</div>
// 	)
// }

export {Timer};
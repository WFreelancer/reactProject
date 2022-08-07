import React, {useState} from "react";

export function Quantity(){
	const [value, quantity] = useState(0);

	const quantityMinus = () => {
		quantity(value - 1)
	}

	const quantityPlus = () => {
		quantity(value + 1)
	}

	return (
		<div className="quantity">
			<button className="quantity__minus" onClick={quantityMinus}>-</button>
			<div className="quantity__rezult">{value}</div>
			<button className="quantity__plus" onClick={quantityPlus}>+</button>
		</div>
	)
}
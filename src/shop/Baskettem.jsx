export const BasketItem = (props) => {
	const {
		mainId,
		price,
		displayName,
		quantity,
		deleteOrder,
		decQuantity = Function.prototype,
		incQuantity = Function.prototype,
	} = props;



	return(
		<li className="basket-popup__item">
			<div className="basket-popup__content">
				{displayName} 
				<div className="quantity">
					<span onClick={() => decQuantity(mainId)}>-</span>
					x{quantity}
					<span onClick={() => incQuantity(mainId)}>+</span>
				</div>
				= {price.regularPrice * quantity} грн.
			</div>
			<button className="basket-popup__item-delete" onClick={() => deleteOrder(mainId)}>X</button>
		</li>
	)
}
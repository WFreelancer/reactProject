export const BasketIcon = (props) => {
	const {quantity = 0, handleBasketOpen, basketOpen} = props;

	return(
		<div className='basket-icon' onClick={handleBasketOpen} style={basketOpen ? { backgroundColor: 'blue'} : null}>
			<span>{quantity}</span>
		</div>
	)
}
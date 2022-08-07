import {BasketItem} from './Baskettem'

export const Basketlist = (props) => {
	const {orders = [],
		basketOpen,
		handleBasketOpen = Function.prototype,
		deleteOrder = Function.prototype,
		decQuantity = Function.prototype,
		incQuantity = Function.prototype,
	} = props;

	const sum = orders.reduce((sum, item) => {
		return sum + item.price.regularPrice * item.quantity;
	}, 0);

	return(
		<div className={basketOpen ? "basket-popup open" : "basket-popup"}>
			<div className="basket-popup__header">
				<span>Basket</span>
				<button className="basket-popup__close" onClick={handleBasketOpen}>X</button>
			</div>
			<div className="basket-popup__body">
				<ul className="basket-popup__list">
					{orders.length ?
						orders.map((item) => {
							return <BasketItem 
								key={item.mainId}
								{...item}
								deleteOrder={deleteOrder}
								decQuantity={decQuantity}
								incQuantity={incQuantity}
							/>
						})
						:
						<li className="basket-popup__item">Корзина пуста</li>
					}
				</ul>
			</div>
			<div className="basket-popup__rezult">{sum} грн.</div>
		</div>
	)
}
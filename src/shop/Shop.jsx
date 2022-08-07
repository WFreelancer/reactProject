import {useState, useEffect} from 'react'
import {ShopList} from './ShopList'
import {API_ADRESS_POST, API_KEY_POST} from '../config'
import {BasketIcon} from './BasketIcon'
import {Basketlist} from './BasketList'


export const Shop = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [orders, setOrder] = useState([]);
	const [basketOpen, setBasketOpen] = useState(false);

	useEffect(()=> {
		fetch(API_ADRESS_POST, {
			headers: {
					"Authorization": API_KEY_POST,
				}
		})
		.then(response => response.json())
		.then(data => {
			setLoading(false);
			setGoods(data.shop);
		})
	}, [])

	const addGoods = (item) => {
		const detectIndex = orders.findIndex((orderItem) => orderItem.mainId === item.mainId)

		if(detectIndex < 0){
			setOrder([...orders, {
				...item,
				quantity: 1
			}]);
		}else{
			const findOrder = orders.map((order, index) => {
				if(detectIndex === index){
					return{
						...order,
						quantity: order.quantity + 1
					}
				}else{
					return order
				}
			})

			setOrder(findOrder)
		}
	}

	const handleBasketOpen = () => {
		setBasketOpen(!basketOpen);
	}

	const handleDeleteOrder = (id) => {
		const deleteEl = orders.filter((order) => order.mainId !== id)
		setOrder(deleteEl);
	}

	const incQuantity = (mainId) => {
		const plus = orders.map((item) => {
			if(item.mainId === mainId && item.quantity < 5){
				return{
					...item,
					quantity: item.quantity + 1
				}
			}else{
				return item
			}
		})
		setOrder(plus);
	}

	const decQuantity = (mainId) => {
		const minus = orders.map((item) => {
			if(item.mainId === mainId && item.quantity > 1){
				return{
					...item,
					quantity: item.quantity - 1
				}
			}else{
				return item
			}
		})
		setOrder(minus);
	}
	
	return(
		<>
			{/* {basketOpen && <Basketlist orders={orders} handleBasketOpen={handleBasketOpen} deleteOrder={handleDeleteOrder}/>} */}
			<Basketlist 
				orders={orders}
				handleBasketOpen={handleBasketOpen}
				deleteOrder={handleDeleteOrder}
				basketOpen={basketOpen}
				decQuantity={decQuantity}
				incQuantity={incQuantity}
			/>
			<BasketIcon quantity={orders.length} handleBasketOpen={handleBasketOpen} basketOpen={basketOpen}/>
			{loading ? <h2>Loading</h2> : <ShopList goods={goods} addGoods={addGoods}/>}
		</>
	)
}
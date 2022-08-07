import {ShopPost} from './ShopPost'

export const ShopList = (props) => {
	const {goods = [], addGoods} = props;

	return(
		<div className='product-list'>
			{
			goods.map((good) => {
				return <ShopPost id={good.mainId} key={good.mainId} {...good} addGoods={addGoods}/>
			})
			}
		</div>
	)
}
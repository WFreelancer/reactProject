const ShopPost = (props) => {
	const {
		mainId,
		displayName,
		displayDescription,
		price,
		displayAssets,
		addGoods
	} = props;

	return(
		<div className="product-card">
			<div className="product-card__image">
				<img src={displayAssets[0].full_background} alt={displayName} />
			</div>
			<div className="product-card__content">
				<div className="product-card__title">{displayName}</div>
				<div className="product-card__text">{displayDescription}</div>
				<div className="product-card__footer">
					<span>{price.regularPrice}</span>
					<button className="product-card__button" onClick={() => addGoods({
						mainId,
						price,
						displayName
						})}>add product</button>
				</div>
			</div>
		</div>
	)
}

export {ShopPost};
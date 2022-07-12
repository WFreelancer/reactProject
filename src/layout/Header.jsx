function Header(){
	return(
		<header className="header">
			<div className="header__container container">
				<div className="header__logo">
					LOGO {new Date().getFullYear()}
				</div>
				<div className="header__body">
					<ul className="header__menu menu">
						<li><a href="#!">Point 1</a></li>
						<li><a href="#!">Point 2</a></li>
						<li><a href="#!">Point 3</a></li>
						<li><a href="#!">Point 4</a></li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export {Header};
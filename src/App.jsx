import React from "react";
import {Header} from './layout/Header'
import {Main} from './layout/Main'
import {Footer} from './layout/Footer'
import {Context} from './hooks/Context'

function App(){
	return(
		<Context>
			<Header/>
			<Main />
			<Footer/>
		</Context>
	)
}

export default App;
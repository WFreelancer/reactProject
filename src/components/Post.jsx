import React, {useContext} from 'react';
import {CustomContext} from '../hooks/Context'

export function Post(props){
	const {deletePost} = useContext(CustomContext);
	const {name, id} = props;
	return (
	<h2>{name}
		<button onClick={() => deletePost(id)}>click</button>
	</h2>)
}


import React, {useContext} from 'react';
import {CustomContext} from '../hooks/Context'

import {Post} from './Post'

function Posts(props){
	const {posts} = useContext(CustomContext);
	return (
		<div>
			{
			posts.map(post => (
				<Post name={post.name} id={post.id} key={post.id}/>
			))
			}
		</div>
	)
}
export {Posts}
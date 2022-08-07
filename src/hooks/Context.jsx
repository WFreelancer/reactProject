import {useState, createContext, useEffect} from "react";

export const CustomContext = createContext();

export const Context = (props) => {
	const [posts, setPosts] = useState([
		{id: 'ab1', name: 'firstPost'},
		{id: 'ab2', name: 'secondPost'},
		{id: 'ab3', name: 'theerdPost'}
	]);

	const deletePost = (id) => {
		setPosts(posts.filter(post => post.id !== id))
	}

	const value = {
		posts,
		deletePost,
	}

	return(
		<CustomContext.Provider value={value}>
			{props.children}
		</CustomContext.Provider>
	)
}
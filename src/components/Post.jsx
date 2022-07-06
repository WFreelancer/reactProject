export function Post(props){
	const {name, id, deletePost} = props;
	return (
	<h2>{name}
		<button onClick={() => deletePost(id)}>click</button>
	</h2>)
}


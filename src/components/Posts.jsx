import {Post} from './Post'

function Posts(props){
	const {posts, deletePost} = props;
	return (
		<div>
			{
			posts.map(post => (
				<Post name={post.name} id={post.id} key={post.id} deletePost={deletePost}/>
			))
			}
		</div>
	)
}
export {Posts}
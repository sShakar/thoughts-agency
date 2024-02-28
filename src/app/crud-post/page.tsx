import { addPost, deletePost } from '@/lib/actions';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Create Post',
	description: 'Create a post or add a blog.'
};

export default async function ServerActionTestPage() {
	return (
		<div className="text-black">
			<form action={addPost}>
				<input type="text" placeholder="title" name="title" />
				<input type="text" placeholder="desc" name="description" />
				<input type="text" placeholder="slug" name="slug" />
				<input type="text" placeholder="userId" name="userId" />
				<button className="bg-white border">Create</button>
			</form>

			<form action={deletePost}>
				<input type="text" placeholder="postId" name="id" />
				<button className="bg-white border">Delete</button>
			</form>
		</div>
	);
}

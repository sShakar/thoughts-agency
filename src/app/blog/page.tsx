import Post from '@/components/Post';
import type { PostType } from '@/types/post';

async function getPosts(): Promise<PostType[]> {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
	return res.json();
}

export default async function BlogPage() {
	const data = await getPosts();

	console.log(data);

	return (
		<main className="flex flex-wrap gap-5 max-md:gap-56 w-11/12 m-auto">
			{data.map(post => (
				<Post post={post} key={post.id} />
			))}
		</main>
	);
}

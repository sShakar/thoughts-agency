import Post from '@/components/Post';
import { getPosts } from '@/lib/data';
import type { Metadata } from 'next';

// async function getPosts(): Promise<PostType[]> {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
// 	return res.json();
// }

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Read more about thoughts agency.'
};

export default async function BlogPage() {
	const data = await getPosts();

	return (
		<main className="flex flex-wrap gap-5 max-md:gap-56 w-11/12 m-auto">
			{data.map(post => (
				<Post post={post} key={post.slug} />
			))}
		</main>
	);
}

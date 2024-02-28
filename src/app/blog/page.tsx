import Post from '@/components/Post';
// import { getPosts } from '@/lib/data';
import type { Metadata } from 'next';
import { PostType } from '@/types/postTypes';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Read more about thoughts agency.'
};

// FETCH DATA WITH API ROUTES
async function getPosts(): Promise<PostType[]> {
	const res = await fetch('http:localhost:8080/api/blog');
	return res.json();
}

export default async function BlogPage() {
	// FETCH DATA WITH SERVER ACTION
	const data = await getPosts();

	return (
		<main className="flex flex-wrap gap-5 max-md:gap-56 w-11/12 m-auto">
			{data.map(post => (
				<Post post={post} key={post.slug} />
			))}
		</main>
	);
}

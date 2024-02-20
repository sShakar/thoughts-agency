import Post from '@/components/Post';

export default function BlogPage() {
	return (
		<main className="flex flex-wrap gap-5 max-md:gap-56 w-11/12 m-auto">
			<Post />
			<Post />
			<Post />
			<Post />
		</main>
	);
}

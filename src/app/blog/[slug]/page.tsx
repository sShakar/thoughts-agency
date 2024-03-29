import Image from 'next/image';
import { Suspense } from 'react';
import { getUser } from '@/lib/data';
import { Metadata } from 'next';
import { PostType } from '@/types/postTypes';

// async function getSlug(slug: string) {
// 	const post: PostType = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
// 		cache: 'no-store'
// 	}).then(res => res.json());
//
// 	const user: UserType = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`, {
// 		cache: 'no-store'
// 	}).then(res => res.json());
//
// 	return { post, user };
// }

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
	const { slug } = params;
	const post = await getPost(slug);

	return {
		title: post.title,
		description: post.description
	};
};

async function getPost(slug: string): Promise<PostType> {
	const res = await fetch(`http:localhost:8080/api/blog/${slug}`);
	return res.json();
}

export default async function BlogSlugPage({ params }: { params: { slug: string } }) {
	const post = await getPost(params.slug);
	const user = await getUser(post.userId);

	return (
		<Suspense fallback={<div className="flex justify-center items-center text-2xl md:text-7xl">Loading...</div>}>
			<main className="flex max-md:flex-col max-md:items-center gap-24">
				<div className="max-md:order-2 h-[calc(100vh-300px)]">
					<Image src={post.img} alt="Image" className="object-cover" width={450} height={650} />
				</div>
				<div className="flex flex-col gap-12">
					<h1 className="text-6xl">{post.title}</h1>
					<div className="flex gap-12">
						<Image src={user.img} alt="Image" className="object-cover rounded-full" width={60} height={50} />
						<div className="flex flex-col gap-5">
							<span>Author</span>
							<span className="text-slate-400">{user.username}</span>
						</div>
						<div className="flex flex-col gap-5">
							<span>Published</span>
							<span className="text-slate-400">01.01.2024</span>
						</div>
					</div>
					<div className="w-9/12">{post.description}</div>
				</div>
			</main>
		</Suspense>
	);
}

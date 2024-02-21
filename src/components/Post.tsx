import Image from 'next/image';
import Link from 'next/link';
import type { PostType } from '@/types/post';

export default function Post({ post }: { post: PostType }) {
	return (
		<div className="md:w-3/12 w-full flex flex-col gap-5 mb-5">
			<div className="flex">
				<div className="w-11/12 h-80 relative">
					<Image
						src="https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-ashville-appalachian-mountains-north-carolina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="Post Title"
						className="object-cover"
						width={450}
						height={150}
					/>
				</div>
				<span className="text-sm transform m-auto -rotate-90">01.01.2024</span>
			</div>

			<div>
				<h2 className="text-lg w-11/12 mb-5">{post.title}</h2>
				<p className="mb-5 font-light text-gray-500 w-11/12">{post.body}</p>
				<Link className="underline" href={`/blog/${post.id}`}>
					READ MORE
				</Link>
			</div>
		</div>
	);
}

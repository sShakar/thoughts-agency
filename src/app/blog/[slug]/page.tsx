import Image from 'next/image';

export default function BlogSlugPage() {
	return (
		<main className="flex max-md:flex-col max-md:items-center gap-24">
			<div className="max-md:order-2 h-[calc(100vh-300px)]">
				<Image
					src="https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-ashville-appalachian-mountains-north-carolina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt="Post Title"
					className="object-cover"
					width={450}
					height={650}
				/>
			</div>
			<div className="flex flex-col gap-12">
				<h1 className="text-6xl">Title</h1>
				<div className="flex gap-12">
					<Image
						src="https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-ashville-appalachian-mountains-north-carolina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="Post Title"
						className="object-cover rounded-full"
						width={60}
						height={50}
					/>
					<div className="flex flex-col gap-5">
						<span>Author</span>
						<span className="text-slate-400">Terry Jefferson</span>
					</div>
					<div className="flex flex-col gap-5">
						<span>Published</span>
						<span className="text-slate-400">01.01.2024</span>
					</div>
				</div>
				<div className="w-9/12">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque deleniti dignissimos quam repellat
					sapiente! Accusamus eum fuga nostrum sed?
				</div>
			</div>
		</main>
	);
}

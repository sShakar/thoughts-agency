import Image from 'next/image';

export default function BlogSlugPage() {
	return (
		<main className="flex gap-25">
			<div className="flex-1 relative h-[calc(100vh-200px)]">
				<Image
					src="https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-ashville-appalachian-mountains-north-carolina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt="Post Title"
					className="object-fill"
					width={450}
					height={150}
				/>
			</div>
			<div className="flex-grow flex-col gap-12">
				<h1 className="text-6xl">Title</h1>
				<div className="flex flex-col gap-3">
					<Image
						src="https://images.pexels.com/photos/20204362/pexels-photo-20204362/free-photo-of-ashville-appalachian-mountains-north-carolina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="Post Title"
						className="object-cover"
						width={450}
						height={150}
					/>
					<div>
						<span>Author</span>
						<span>Terry Jefferson</span>
					</div>
					<div>
						<span>Published</span>
						<span>01.01.2024</span>
					</div>
				</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque deleniti dignissimos quam repellat
					sapiente! Accusamus eum fuga nostrum sed?
				</div>
			</div>
		</main>
	);
}

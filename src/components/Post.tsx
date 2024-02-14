import Image from 'next/image';

export default function Post() {
	return (
		<div>
			<div>
				<div>
					<Image src="https://via.placeholder.com/150" alt="Post Title" width={150} height={150} />
				</div>
			</div>
			<div>
				<h2>Post Title</h2>
				<p>Post content</p>
			</div>
		</div>
	);
}

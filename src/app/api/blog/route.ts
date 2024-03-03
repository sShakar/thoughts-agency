import { connectToDatabase } from '@/lib/database';
import { Post } from '@/lib/models';

export async function GET() {
	try {
		await connectToDatabase();
		const posts = await Post.find();
		return Response.json(posts);
	} catch (err) {
		console.error(err);
		return Response.json('Error occurred.');
	}
}

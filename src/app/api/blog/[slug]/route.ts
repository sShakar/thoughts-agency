import { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import { Post } from '@/lib/models';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
	const { slug } = params;

	try {
		await connectToDatabase();
		const post = await Post.findOne({ slug });
		return Response.json(post);
	} catch (err) {
		console.error(err);
		return Response.json('Error occurred.');
	}
}

export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
	const { slug } = params;

	try {
		await connectToDatabase();
		await Post.deleteOne({ slug });
		return Response.json('Post deleted');
	} catch (err) {
		console.error(err);
		return Response.json('Error occurred.');
	}
}

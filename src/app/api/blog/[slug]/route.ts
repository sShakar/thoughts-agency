import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import { Post } from '@/lib/models';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
	const { slug } = params;

	try {
		await connectToDatabase();
		const post = await Post.findOne({ slug });
		return NextResponse.json(post);
	} catch (err) {
		console.error(err);
	}
}

export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
	const { slug } = params;

	try {
		await connectToDatabase();
		await Post.deleteOne({ slug });
		return NextResponse.json('Post deleted');
	} catch (err) {
		console.error(err);
	}
}

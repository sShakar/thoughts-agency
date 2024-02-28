import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import { Post } from '@/lib/models';

export async function GET() {
	try {
		await connectToDatabase();
		const posts = await Post.find();
		return NextResponse.json(posts);
	} catch (err) {
		console.error(err);
	}
}

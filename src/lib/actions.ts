'use server';

import { connectToDatabase } from '@/lib/database';
import { Post } from '@/lib/models';
import { revalidatePath } from 'next/cache';

export async function addPost(formData: FormData) {
	const { title, description, slug, userId } = Object.fromEntries(formData);

	try {
		await connectToDatabase();
		const newPost = new Post({
			title,
			description,
			slug,
			userId
		});

		await newPost.save();

		revalidatePath('/blog');
		console.log('Post added successfully');
	} catch (err) {
		console.error(err);
	}
}

export async function deletePost(formData: FormData) {
	const { id } = Object.fromEntries(formData);

	try {
		await connectToDatabase();
		await Post.findByIdAndDelete(id);

		revalidatePath('/blog');
		console.log('Post deleted successfully');
	} catch (err) {
		console.error(err);
	}
}

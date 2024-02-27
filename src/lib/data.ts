import { Post, User } from '@/lib/models';
import { unstable_noStore as noStore } from 'next/cache';
import { connectToDatabase } from '@/lib/database';

export const getPosts = async () => {
	try {
		await connectToDatabase();
		return await Post.find();
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch posts!');
	}
};

export const getPost = async (slug: typeof Post) => {
	try {
		await connectToDatabase();
		return await Post.findOne({ slug });
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch post!');
	}
};

export const getUser = async (id: string) => {
	noStore();
	try {
		await connectToDatabase();
		return await User.findById(id);
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch user!');
	}
};

export const getUsers = async () => {
	try {
		await connectToDatabase();
		return await User.find();
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch users!');
	}
};

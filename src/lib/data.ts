import { unstable_noStore as noStore } from 'next/cache';
import { connectToDatabase } from '@/lib/database';
import { Post, User } from '@/lib/models';
import type { PostType, UserType } from '@/types/postTypes';

export const getPosts = async (): Promise<PostType[]> => {
	try {
		await connectToDatabase();
		return await Post.find();
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch posts!');
	}
};

export const getPost = async (slug: string): Promise<PostType> => {
	try {
		await connectToDatabase();
		const data = await Post.findOne({ slug });
		return data;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch post!');
	}
};

export const getUser = async (id: string): Promise<UserType> => {
	noStore();
	try {
		await connectToDatabase();
		const data = await User.findById(id);
		return data;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch user!');
	}
};

export const getUsers = async (): Promise<UserType[]> => {
	try {
		await connectToDatabase();
		return await User.find();
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch users!');
	}
};

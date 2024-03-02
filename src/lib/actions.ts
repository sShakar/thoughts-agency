'use server';

import { revalidatePath } from 'next/cache';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '@/lib/database';
import { signIn, signOut } from '@/lib/auth';
import { User, Post } from '@/lib/models';

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
	} catch {
		return { error: 'Failed to add post.' };
	}
}

export async function deletePost(formData: FormData) {
	const { id } = Object.fromEntries(formData);

	try {
		await connectToDatabase();
		await Post.findByIdAndDelete(id);

		revalidatePath('/blog');
		console.log('Post deleted successfully');
	} catch {
		return { error: 'Failed to delete post.' };
	}
}

export async function handleGithubLogin() {
	await signIn('github');
}

export async function handleLogout() {
	await signOut();
}

export async function registerUser(formData: FormData) {
	const { username, email, img, password, confirmPassword } = Object.fromEntries(formData);
	if (password !== confirmPassword) return { error: 'Passwords does not match.' };

	try {
		await connectToDatabase();
		const user = await User.findOne({ username });
		if (user) return { error: 'Username already exists.' };

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password.toString(), salt);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			img
		});

		await newUser.save();
		console.log('User registered successfully');
	} catch {
		return { error: 'Failed to register user.' };
	}
}

export async function loginUser(formData: FormData) {
	const { username, password } = Object.fromEntries(formData);

	try {
		await signIn('credentials', { username, password });
	} catch {
		return { error: 'Failed to login.' };
	}
}

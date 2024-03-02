import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '@/lib/database';
import { User } from '@/lib/models';

async function loginWithCredentials(credentials: { username: string; password: string }) {
	try {
		await connectToDatabase();

		const user = await User.findOne({ username: credentials.username });
		if (!user) return { error: 'No user found' };

		const isValid = await bcrypt.compare(credentials.password, user.password);
		if (!isValid) return { error: 'Invalid password' };

		return user;
	} catch {
		return { error: 'Something went wrong.' };
	}
}

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut
} = NextAuth({
	providers: [
		GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
		CredentialsProvider({
			async authorize(credentials) {
				try {
					return await loginWithCredentials({
						username: String(credentials.username),
						password: String(credentials.password)
					});
				} catch {
					return { error: 'Invalid credentials' };
				}
			}
		})
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			if (account?.provider === 'github') {
				await connectToDatabase();
				try {
					const user = await User.findOne({ email: profile?.email });

					if (!user) {
						const newUser = new User({
							username: profile?.login,
							email: profile?.email,
							image: profile?.avatar_url,
							password: profile?.email
						});

						await newUser.save();
					}
				} catch {
					return false;
				}
			}
			return true;
		}
	}
});

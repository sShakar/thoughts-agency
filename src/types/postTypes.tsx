export type PostType = {
	title: string;
	description: string;
	img: string;
	userId: string;
	slug: string;
};

export type UserType = {
	username: string;
	email: string;
	password: string;
	img: string;
	isAdmin: boolean;
};

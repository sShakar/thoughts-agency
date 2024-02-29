export type AuthType = {
	user: {
		name: string;
		email: string;
		image: string;
		isAdmin: boolean;
	};
	expires: string;
};

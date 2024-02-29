import { handleGithubLogin } from '@/lib/actions';

export default async function LoginPage() {
	return (
		<div>
			<form action={handleGithubLogin}>
				<button>Login with GitHub</button>
			</form>
		</div>
	);
}

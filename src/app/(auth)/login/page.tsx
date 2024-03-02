import { loginUser, handleGithubLogin } from '@/lib/actions';
import GitHubIcon from '@mui/icons-material/GitHub';

export default async function LoginPage() {
	return (
		<main className="flex flex-col items-center gap-6">
			<div className="w-2/5 bg-gray-800 p-5 rounded-md mx-auto">
				<form action={loginUser} className="flex flex-col text-center gap-8">
					<input
						className="p-5 bg-slate-900 text-white border-none rounded"
						type="text"
						placeholder="Username"
						name="username"
					/>
					<input
						className="p-5 bg-slate-900 text-white border-none rounded"
						type="password"
						placeholder="Password"
						name="password"
					/>
					<button
						className="p-5 cursor-pointer bg-blue-500 active:bg-blue-600 text-white border-none rounded font-bold"
						type="submit"
					>
						Login
					</button>
				</form>
			</div>
			<form action={handleGithubLogin}>
				<button className="flex items-center gap-2">
					<GitHubIcon />
					Login with GitHub
				</button>
			</form>
		</main>
	);
}

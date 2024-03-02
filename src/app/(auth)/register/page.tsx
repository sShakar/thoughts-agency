import { registerUser } from '@/lib/actions';

export default function RegisterPage() {
	return (
		<main className="w-2/5 bg-gray-800 p-5 rounded-md mx-auto">
			<form action={registerUser} className="flex flex-col text-center gap-8">
				<input
					className="p-5 bg-slate-900 text-white border-none rounded"
					type="text"
					placeholder="Username"
					name="username"
				/>
				<input
					className="p-5 bg-slate-900 text-white border-none rounded"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<input
					className="p-5 bg-slate-900 text-white border-none rounded"
					type="password"
					placeholder="Password"
					name="password"
				/>
				<input
					className="p-5 bg-slate-900 text-white border-none rounded"
					type="password"
					placeholder="Confirm Password"
					name="confirmPassword"
				/>

				<button
					className="p-5 cursor-pointer bg-blue-500 active:bg-blue-600 text-white border-none rounded font-bold"
					type="submit"
				>
					Register
				</button>
			</form>
		</main>
	);
}

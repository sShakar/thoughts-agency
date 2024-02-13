import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-4">
			<div className="text-4xl">Not Found</div>
			<Link href="/" className="border-2 px-4 py-2 rounded-lg hover:bg-slate-300 transition duration-300 ">
				Go Home
			</Link>
		</div>
	);
}

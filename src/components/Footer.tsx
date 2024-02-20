import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="max-md:mx-5 flex justify-between items-center h-20">
			<Link href="/" className="font-black uppercase hover:text-blue-500 active:text-blue-600 transition">
				Thoughts
			</Link>
			<p>Thoughts Agency &#169; All rights reserved.</p>
		</footer>
	);
}

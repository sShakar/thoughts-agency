import Link from 'next/link';
import { auth } from '@/lib/auth';
import NavbarLinks from '@/components/NavbarLinks';
import { AuthType } from '@/types/authTypes';

export default async function Navbar() {
	const session = await auth();
	console.log(session);

	return (
		<nav className="max-md:mx-5 flex justify-between items-center h-28">
			<Link href="/" className="text-3xl font-black uppercase hover:text-blue-500 active:text-blue-600 transition">
				Thoughts
			</Link>
			<NavbarLinks session={session as AuthType} />
		</nav>
	);
}

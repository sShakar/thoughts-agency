'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const isActive = (href: string) => pathname === href;
	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Blog', href: '/blog' }
	];
	const hasSession = true;
	const isAdmin = true;

	return (
		<nav className="flex justify-between items-center h-28">
			<div className="text-3xl">Logo</div>
			<ul className="flex items-center gap-4">
				{links.map(link => (
					<li key={link.name}>
						<Link href={link.href} className={`${isActive(link.href) && 'rounded-xl bg-white text-black py-2 px-3'}`}>
							{link.name}
						</Link>
					</li>
				))}

				{hasSession ? (
					<>
						{isAdmin && (
							<li>
								<Link href="/admin" className={`${isActive('/admin') && 'rounded-xl bg-white text-black py-2 px-3'}`}>
									Admin
								</Link>
							</li>
						)}
						<button className="rounded-md bg-white text-black py-2 px-3 hover:bg-slate-100">Logout</button>
					</>
				) : (
					<li>
						<Link href="/login" className="rounded-md bg-white text-black py-2 px-3">
							Login
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

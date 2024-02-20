'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const hasSession = true;
	const isAdmin = true;
	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Blog', href: '/blog' }
	];
	const isActive = (href: string) => pathname === href;

	return (
		<nav className="max-md:mx-5 flex justify-between items-center h-28">
			<Link href="/" className="text-3xl font-black uppercase hover:text-blue-500 active:text-blue-600 transition">
				Thoughts
			</Link>
			<ul className="hidden items-center gap-4 min-[768px]:flex">
				{links.map(link => (
					<li key={link.name}>
						<Link
							href={link.href}
							className={`${isActive(link.href) && 'border-b-4 border-blue-500 py-2 px-3 transition duration-300 ease-in-out'}`}
						>
							{link.name}
						</Link>
					</li>
				))}

				{hasSession ? (
					<>
						{isAdmin && (
							<li>
								<Link
									href="/admin"
									className={`${isActive('/admin') && 'border-b-4 border-blue-500 py-2 px-3 transition duration-300 ease-in-out'}`}
								>
									Admin
								</Link>
							</li>
						)}
						<button className="uppercase rounded-md border-2 py-2 px-3 hover:bg-slate-100 active:bg-slate-300 hover:text-black transition">
							Logout
						</button>
					</>
				) : (
					<li>
						<Link
							href="/login"
							className="uppercase rounded-md border-2 py-2 px-3 hover:bg-slate-100 hover:text-black transition"
						>
							Login
						</Link>
					</li>
				)}
			</ul>

			<button className="min-[768px]:hidden" onClick={() => setIsOpen(prev => !prev)}>
				Menu
			</button>
			{isOpen && (
				<ul className="z-10 absolute bg-black top-28 right-0 w-1/2 h-[calc(100vh-112px)] min-[768px]:hidden flex flex-col items-center justify-center gap-3">
					{links.map(link => (
						<li key={link.name}>
							<Link
								href={link.href}
								className={`${isActive(link.href) && 'border-b-4 border-blue-500 py-2 px-3 transition duration-300 ease-in-out'}`}
							>
								{link.name}
							</Link>
						</li>
					))}

					{hasSession ? (
						<>
							{isAdmin && (
								<li>
									<Link
										href="/admin"
										className={`${isActive('/admin') && 'border-b-4 border-blue-500 py-2 px-3 transition duration-300 ease-in-out'}`}
									>
										Admin
									</Link>
								</li>
							)}
							<button className="uppercase rounded-md border-2 py-2 px-3 hover:bg-slate-100 active:bg-slate-300 hover:text-black transition">
								Logout
							</button>
						</>
					) : (
						<li>
							<Link
								href="/login"
								className="uppercase rounded-md border-2 py-2 px-3 hover:bg-slate-100 active:bg-slate-300 hover:text-black transition"
							>
								Login
							</Link>
						</li>
					)}
				</ul>
			)}
		</nav>
	);
}

'use client';

import Image from 'next/image';

export default function ContactPage() {
	return (
		<main className="flex max-md:flex-col max-md:gap-16 justify-between items-center">
			<div className="w-1/2 flex justify-start">
				<Image alt="" src="/contact.png" width={500} height={500} />
			</div>
			<form
				action=""
				className="w-10/12 md:w-1/2 shadow-lg shadow-slate-800 border border-slate-500 p-10 rounded-lg flex flex-col items-center gap-10"
			>
				<input
					className="w-full px-4 py-2 border border-slate-500 rounded bg-slate-900 focus-within:outline-none"
					type="text"
					placeholder="Full Name"
				/>
				<input
					className="w-full px-4 py-2 border border-slate-500 rounded bg-slate-900 focus-within:outline-none"
					type="text"
					placeholder="Email Address"
				/>
				<input
					className="w-full px-4 py-2 border border-slate-500 rounded bg-slate-900 focus-within:outline-none"
					type="text"
					placeholder="Phone Number"
				/>
				<textarea
					className="w-full h-28 px-4 py-2 border border-slate-500 rounded bg-slate-900 focus-within:outline-none"
					placeholder="Message"
				/>
				<button className="w-full bg-blue-500 py-2 rounded active:bg-blue-600">Submit</button>
			</form>
		</main>
	);
}

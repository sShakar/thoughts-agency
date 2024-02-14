import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
	return (
		<main className="flex justify-between items-center">
			<div className="w-1/2 flex flex-col items-start gap-16">
				<h1 className="font-black text-9xl">Thoughts Agency.</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam magnam molestias nam neque officia
					praesentium recusandae vitae. Consequatur, quaerat.
				</p>
				<div className="flex gap-6">
					<Link href="/about" className="bg-blue-500 active:bg-blue-600 py-2 px-4 rounded">
						Learn More
					</Link>
					<Link href="/contact" className="bg-slate-200 active:bg-slate-300 text-black  py-2 px-4 rounded">
						Contact
					</Link>
				</div>
				<div>
					<Image className="grayscale" alt="" src="/brands.png" width={500} height={500} />
				</div>
			</div>
			<div className="w-1/2 flex justify-end">
				<Image alt="" src="/hero.gif" width={500} height={500} />
			</div>
		</main>
	);
}

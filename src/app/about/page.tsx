import Image from 'next/image';

export default function AboutPage() {
	return (
		<main className="flex max-md:flex-col max-md:gap-16 max-md:my-10 justify-between items-center">
			<div className="w-1/2 flex flex-col items-start gap-16">
				<h1 className="font-black text-md md:text-2xl text-blue-500">About Agency</h1>
				<h1 className="font-black text-4xl md:text-7xl">
					We create digital ideas that are bigger, bolder, braver and better.
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam magnam molestias nam neque officia
					praesentium recusandae vitae. Consequatur, quaerat.
				</p>
				<div className="flex justify-evenly items-center gap-16 w-full">
					<div>
						<p className="text-blue-500 text-xl">+10K</p>
						<p>Year of experience</p>
					</div>
					<div>
						<p className="text-blue-500 text-xl">+234K</p>
						<p>People reached</p>
					</div>
					<div>
						<p className="text-blue-500 text-xl">+5K</p>
						<p>Services and plugins</p>
					</div>
				</div>
			</div>
			<div className="w-1/2 flex justify-end">
				<Image alt="" src="/about.png" width={500} height={500} />
			</div>
		</main>
	);
}

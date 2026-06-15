import WhatWeOfferCard from "../WhatWeOfferCard";

export default function WhatWeOfferSection() {
	return (
		<section className="w-full lg:w-5xl mx-auto rounded-2xl py-10  md:py-14 lg:py-16 ">
			<div className="w-full text-center mb-10">
				<h3 className="text-4xl ">
					What We <span className="text-green-500">Offer</span>
				</h3>
				<p className="text-zinc-400 text-xl wrap-break-word">
					Everything you need to prototype your next big idea.
				</p>
			</div>

			<div className=" mx-auto">
				{/* Changed gap and grid-style feel */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					<WhatWeOfferCard
						title="Free public APIs: users, products, todos."
						imgSrc="/api.jpg"
						btnName="api"
					/>
					<WhatWeOfferCard
						title="Authenticated users can perform CRUD operations."
						imgSrc="/authenticate.jpg"
						btnName="docs"
					/>
					<WhatWeOfferCard
						title="Persistence data stays for 24 hours."
						imgSrc="/24hours.jpg"
						btnName="docs"
					/>
					<WhatWeOfferCard
						title="Pagination support is available by default."
						imgSrc="/upgrade.jpg"
						btnName="docs"
					/>
				</div>
			</div>
		</section>
	);
}

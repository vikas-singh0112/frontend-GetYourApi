import Footer from "../components/Footer";
import ApiShowcaseSection from "../components/homePageSections/ApiShowcaseSection";
import HeroSection from "../components/homePageSections/HeroSection";
import ProblemAndVisionSection from "../components/homePageSections/ProblemAndVisionSection";
import TechnicalStackCardSection from "../components/homePageSections/TechnicalStackCardSection";
import WhatWeOfferSection from "../components/homePageSections/WhatWeOfferSection";

export default function Home() {
	return (
		<div className="px-4 sm:px-8">
			{/* HERO SECTION */}
			<HeroSection />

			{/* The Problem / Vision Section */}
			<ProblemAndVisionSection />

			{/* API SHOWCASE GRID */}
			<ApiShowcaseSection />

			{/* WHAT WE OFFER SECTION */}
			<WhatWeOfferSection />

			{/* Stack Technical Cards */}
			<TechnicalStackCardSection />

			{/* Footer / Call to Action */}
			<Footer />
		</div>
	);
}

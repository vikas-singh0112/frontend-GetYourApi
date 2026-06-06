

export default function ProblemAndVisionSection() {
	return (
		<section id="features" className="w-5xl mx-auto px-4 py-16">
			<div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-xl">
				<div className="max-w-3xl">
					<h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
						The Dreaded{" "}
						<span className="text-green-500">"Mock Data Bottleneck"</span>
					</h2>
					<p className="text-zinc-400 leading-relaxed mb-6">
						As a developer, I noticed a recurring frustration when starting a
						new frontend project. Before you can even design a UI layout or test
						a responsive feature, you have to spend hours writing massive mock
						arrays or configuring local test nodes. It completely kills your
						creative momentum.
					</p>
					<p className="text-blue-400 font-medium">
						⚡ I built Get Your API to be the instant-gratification tool I
						wished I had.
					</p>
				</div>
			</div>
		</section>
	);
}

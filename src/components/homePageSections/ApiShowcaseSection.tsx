import { Link } from "react-router";

export default function ApiShowcaseSection() {
	const categories = [
		{
			title: "E-Commerce",
			count: "8 Endpoints",
			desc: "Products, categories, price.",
		},
		{
			title: "User Management",
			count: "7 Endpoints",
			desc: "Profiles, avatars, and roles.",
		},
		{
			title: "Fun & Jokes",
			count: "8 Endpoints",
			desc: "Setup, punchline.",
		},
		{
			title: "Todos",
			count: "7 Endpoints",
			desc: "Title, content.",
		},
	];
	return (
		<section
			id="endpoints"
			className="w-full lg:w-5xl mx-auto py-10  md:py-14 lg:py-16"
		>
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold tracking-tight text-white mb-3 wrap-break-word">
					Rich Datasets Ready to{" "}
					<span className="text-green-500">Plug</span>
				</h2>
				<p className="text-zinc-400 wrap-break-word text-xl sm:text-md">
					No API keys required for basic testing. Perfectly structured JSON.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				{categories.map((cat, idx) => (
					<Link to={"/api"}
						key={idx}
						className="bg-zinc-900/10 border border-zinc-800/80 p-6 rounded-xl hover:border-green-500/40 transition-all duration-300 group"
					>
						<div className="flex justify-between items-start mb-3">
							<h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition">
								{cat.title}
							</h3>
							<span className="text-xs bg-zinc-900 text-green-400 border border-green-500/20 px-2.5 py-1 rounded font-mono">
								{cat.count}
							</span>
						</div>
						<p className="text-sm text-zinc-400 leading-relaxed">{cat.desc}</p>
					</Link>
				))}
			</div>
		</section>
	);
}

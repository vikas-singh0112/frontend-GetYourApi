import {
	ShieldAlert,
	Layers,
	Cpu,
	Heart,
	MessageSquare,
} from "lucide-react";
import { Link } from "react-router";

export default function About() {
	return (
		<div className=" bg-black text-zinc-100 font-sans py-10  px-4 select-none">
			<div className="max-w-4xl mx-auto space-y-16">
				{/* Header Title Banner */}
				<div className="text-center space-y-4">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
						Get Your{" "}
						<span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.25)]">
							API
						</span>
					</h1>
					<p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
						Stop writing mock data. Start building.
					</p>
				</div>

				{/* Introduction Narrative */}
				<div className="bg-zinc-900/20 border border-zinc-800/80 p-6 md:p-8 rounded-2xl text-center md:text-left">
					<p className="text-zinc-300 text-lg leading-relaxed">
						Hey everyone! I’m the solo developer behind{" "}
						<span className="text-white font-semibold">Get Your API</span>—a
						100% free API service built to help frontend developers skip backend
						setup and build beautiful user interfaces, fast.
					</p>
				</div>

				{/* Problem vs Solution Split */}
				<div className="grid md:grid-cols-2 gap-8 items-stretch">
					{/* What Is It */}
					<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between">
						<div>
							<div className="flex items-center gap-3 text-green-500 mb-4 font-bold text-lg tracking-tight">
								<Layers className="w-5 h-5 shrink-0" />
								<h3>What is Get Your API?</h3>
							</div>
							<p className="text-sm text-zinc-400 leading-relaxed">
								It’s a robust, reliable, and completely free ecosystem of over
								30 different APIs designed to mimic real-world production data.
								Whether you need e-commerce products, user profiles, live
								weather, or blog posts to populate your UI, you can fetch it in
								seconds.
							</p>
						</div>
						<div className="mt-6 flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
							<span className="text-[10px] uppercase font-mono tracking-wider bg-zinc-900 text-green-400 px-2 py-0.5 rounded border border-green-500/10">
								Zero Config
							</span>
							<span className="text-[10px] uppercase font-mono tracking-wider bg-zinc-900 text-blue-400 px-2 py-0.5 rounded border border-blue-500/10">
								Production Ready
							</span>
							<span className="text-[10px] uppercase font-mono tracking-wider bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">
								Plug & Play
							</span>
						</div>
					</div>

					{/* The Problem */}
					<div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between">
						<div>
							<div className="flex items-center gap-3 text-red-500 mb-4 font-bold text-lg tracking-tight">
								<ShieldAlert className="w-5 h-5 shrink-0" />
								<h3>The "Mock Data Bottleneck"</h3>
							</div>
							<p className="text-sm text-zinc-400 leading-relaxed">
								We’ve all been there. You get a burst of inspiration for a new
								frontend project, but before you can design a single component
								or test a feature, momentum grinds to a halt. You’re stuck
								spending hours writing massive JSON files, configuring local
								mock servers, or hardcoding arrays.
							</p>
						</div>
						<p className="text-xs text-zinc-500 mt-6 italic border-t border-zinc-900 pt-4">
							It kills your creative momentum.
						</p>
					</div>
				</div>

				{/* Tech Stack & Philanthropy Column */}
				<div className="grid md:grid-cols-2 gap-8 items-stretch ">
					{/* Tech Stack */}
					<div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between">
						<div className="flex items-center gap-3 text-blue-500 mb-4 font-bold text-lg tracking-tight">
							<Cpu className="w-5 h-5 text-blue-500" />
							<h3>Under the Hood</h3>
						</div>
						<div className="space-y-3">
							<div>
								<h4 className="text-sm font-semibold text-white">
									Backend{" "}
									<span className="text-xs text-blue-400 font-mono font-normal">
										Express.js (Node)
									</span>
								</h4>
								<p className="text-sm text-zinc-400 mt-0.5 leading-relaxed">
									Engineered for lightning-fast, high-performance concurrent
									routing.
								</p>
							</div>
							<div className="border-t border-zinc-900 pt-3">
								<h4 className="text-sm font-semibold text-white">
									Database{" "}
									<span className="text-xs text-green-400 font-mono font-normal">
										MongoDB
									</span>
								</h4>
								<p className="text-sm text-zinc-400 mt-0.5 leading-relaxed">
									Flexible, document-based data layers that output perfectly
									clean JSON layouts.
								</p>
							</div>
						</div>
					</div>

					{/* Why Free */}
					<div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 flex flex-col">
						<div className="flex items-center text-green-500 mb-4 font-bold text-lg tracking-tight">
							<Heart className="w-5 h-5 fill-green-500/20" />
							<h3>Why is it free?</h3>
						</div>
						<p className="text-sm text-zinc-400 leading-relaxed">
							Because I love the developer community. This project is my way of
							giving back—helping self-taught devs, boot-campers, and seasoned
							pros build portfolios and prototypes with zero friction.
						</p>
					</div>
				</div>

				{/* Call to action & Connect */}
				<div className="border-t border-zinc-900 pt-12 text-center max-w-xl mx-auto space-y-6">
					<div className="flex justify-center items-center gap-2 text-sm text-zinc-400 font-mono">
						<MessageSquare className="w-4 h-4 text-green-500" /> Let’s Connect!
					</div>
					<p className="text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
						If there is a specific type of API or dataset you need for your next
						project, or if you just want to talk shop, drop a comment or reach
						out!
					</p>
					<div className="flex items-center justify-center gap-10">
						<Link
							to={"/api"}
							className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded transition shadow-[0_0_30px_rgba(34,197,94,0.25)] text-center"
						>
							Explore APIs
						</Link>

						<Link
							to={"/contact"}
							className="w-full sm:w-auto border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 text-zinc-300 font-semibold px-6 py-3 rounded transition text-center"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

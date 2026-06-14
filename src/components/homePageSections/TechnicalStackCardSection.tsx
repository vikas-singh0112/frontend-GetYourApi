import { Database, Layers, Server } from "lucide-react";

export default function TechnicalStackCardSection() {
	return (
		<section className="w-full lg:w-5xl mx-auto border-y border-zinc-900 bg-zinc-900/10 py-10  md:py-14 lg:py-16 ">
			<div className="w-full flex justify-center mb-10">
				<h3 className="text-4xl ">
					Tech Stack <span className="text-green-500">Used</span>
				</h3>
			</div>
			<div className="mx-auto grid md:grid-cols-3 gap-8">
				<div>
					<div className="bg-blue-500/10 p-3 rounded w-fit mb-4 border border-blue-500/20">
						<Server className="h-5 w-5 text-blue-500" />
					</div>
					<h3 className="text-lg font-semibold text-white mb-2">
						Express.js Backend
					</h3>
					<p className="text-sm text-zinc-400 leading-relaxed">
						Built on a lightweight and lightning-fast Node network configured
						for maximum concurrent throughput.
					</p>
				</div>
				<div>
					<div className="bg-green-500/10 p-3 rounded w-fit mb-4 border border-green-500/20">
						<Database className="h-5 w-5 text-green-500" />
					</div>
					<h3 className="text-lg font-semibold text-white mb-2">
						MongoDB Database
					</h3>
					<p className="text-sm text-zinc-400 leading-relaxed">
						Flexible document-based structures cleanly deliver the exact nested
						objects modern frontend states demand.
					</p>
				</div>
				<div>
					<div className="bg-green-500/10 p-3 rounded w-fit mb-4 border border-green-500/20">
						<Layers className="h-5 w-5 text-green-500" />
					</div>
					<h3 className="text-lg font-semibold text-white mb-2">
						CORS-Enabled
					</h3>
					<p className="text-sm text-zinc-400 leading-relaxed">
						Zero browser roadblocks. Safely pull straight into your local
						scripts, sandboxes, or templates.
					</p>
				</div>
			</div>
		</section>
	);
}

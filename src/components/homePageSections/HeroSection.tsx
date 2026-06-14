import { Check, Copy, Zap } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
	const [copied, setCopied] = useState(false);
	const sampleCode = `fetch('https://api.getyourapi.com/v1/products')
  .then(res => res.json())
  .then(data => console.log(data));`;

	const handleCopy = () => {
		navigator.clipboard.writeText(sampleCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};
	return (
		<section className="w-full lg:w-5xl mx-auto py-10  md:py-14 lg:py-16 text-center">
			<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6 animate-pulse">
				<Zap className="w-3 h-3" /> Built 100% Free for Frontend Developers
			</div>
			<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
				Instant{" "}
				<span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
					APIs.
				</span>
				<br />
				Free forever. <br />
				<span className="text-blue-500">Create,</span> Test & Build
			</h1>
			<p className="text-lg md:text-xl font-extrabold tracking-tight bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
				Stop writing mock data.
				<br />
				Start building.
			</p>

			{/* Glowing Interactive Snippet */}
			<div className=" flex justify-center px-0">
				<div className="w-full lg:w-2xl border border-green-500/30 rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(34,197,94,0.25)] text-left">
					<div className="w-full bg-zinc-900/50 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<div className="w-3 h-3 rounded-full bg-red-500/60"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
							<div className="w-3 h-3 rounded-full bg-green-500/60"></div>
							<span className="text-xs text-zinc-500 font-mono ml-2">
								App.jsx
							</span>
						</div>
						<button
							onClick={handleCopy}
							className="text-zinc-400 hover:text-white transition p-1.5 rounded hover:bg-zinc-800 flex items-center gap-1.5 text-xs font-mono"
						>
							{copied ? (
								<Check className="h-3.5 w-3.5 text-green-400" />
							) : (
								<Copy className="h-3.5 w-3.5" />
							)}
							{copied ? "Copied!" : "Copy"}
						</button>
					</div>
					<div className="p-5 font-mono text-sm overflow-x-auto  text-green-400/90 bg-black/40">
						<pre>{sampleCode}</pre>
					</div>
				</div>
			</div>
		</section>
	);
}

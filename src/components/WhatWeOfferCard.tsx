import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

type WhatWeOfferCardProps = {
	title: string;
	imgSrc: string;
	btnName: string;
};
function WhatWeOfferCard({ title, imgSrc, btnName }: WhatWeOfferCardProps) {
	return (
		<div
			className={
				" w-full rounded-2xl p-3 flex flex-col bg-zinc-900/70 border-2 shadow-[0_0_50px_-12px_rgba(34,197,94,0.3)] border-zinc-800 hover:border-green-500/30 hover:bg-zinc-800 transition-all duration-500 hover:-translate-y-2"
			}
		>
			<div className={"relative w-full h-40"}>
				<img
					alt={title}
					src={imgSrc}
					className="w-full h-full object-cover rounded-xl"
				/>
			</div>
			<div className={"flex-1"}>
				<p className={"mt-4"}>{title}</p>
			</div>
			<div className={"flex justify-between mt-4 gap-4"}>
				<Link
					to={`/${btnName}`}
					className="w-full bg-green-500 py-1 px-3 rounded-sm cursor-pointer"
				>
					<span className="flex items-center justify-center capitalize">
						{btnName}
						<ArrowUpRight size={12} />
					</span>
				</Link>
			</div>
		</div>
	);
}

export default WhatWeOfferCard;

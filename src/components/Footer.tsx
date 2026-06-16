import { Heart } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
	return (
		<footer className="w-screen lg:max-w-5xl mx-auto 4 sm:px-0 py-10  md:py-14 lg:py-16 text-center">
			<div className="max-w-xl mx-auto">
				<Heart className="h-6 w-6 text-green-500 mx-auto mb-4 animate-pulse" />
				<h2 className="text-2xl font-bold text-white mb-3">Why is it free?</h2>
				<p className="text-sm text-zinc-400 leading-relaxed mb-8">
					Because I love the open-source community. This project is dedicated to
					self-taught devs, boot-campers, and seasoned pros who just want to
					prototype cleanly without friction.
				</p>
				<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
					<Link
						to={"/api"}
						className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded transition shadow-[0_0_30px_rgba(34,197,94,0.25)] text-center"
					>
						Explore the Endpoints
					</Link>
					
				</div>
			</div>
			<p className="text-sm text-zinc-400 lg:text-xs lg:text-zinc-600 mt-16 font-mono">
				© {new Date().getFullYear()} Get Your API. Built by a solo developer.
			</p>
		</footer>
	);
}

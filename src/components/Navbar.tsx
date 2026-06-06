import { Link, useLocation } from "react-router";
import { Terminal } from "lucide-react";

function Navbar() {
	const location = useLocation();

	const activeMenu = (path: string) =>
		location.pathname === path
			? "text-lg font-medium tracking-tight text-green-500"
			: " text-lg font-medium tracking-tight text-zinc-400 hover:text-zinc-200 ";

	return (
		<>
			<header className=" border-b-2 border-green-500/30 bg-black  sticky top-0 z-50">
				<div className="w-6xl mx-auto px-4 h-16 flex items-center justify-between">
					<div className="flex items-center space-x-2 font-bold text-2xl tracking-tight">
						<Terminal className="text-green-500 h-7 w-7" />
						<span className="text-white">
							Get Your <span className="text-green-500">API</span>
						</span>
					</div>
					<nav className="flex items-center space-x-6">
						<Link to={"/"} className={activeMenu("/")}>
							Home
						</Link>

						<Link to={"/api"} className={activeMenu("/api")}>
							Api
						</Link>
						<Link to={"/about"} className={activeMenu("/about")}>
							About
						</Link>
						<Link to={"/contact"} className={activeMenu("/contact")}>
							Contact
						</Link>

						<Link to={"/signin"} className={activeMenu("/signin")}>
							Signin
						</Link>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Navbar;

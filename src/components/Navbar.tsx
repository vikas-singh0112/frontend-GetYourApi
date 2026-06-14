import { Link, useLocation } from "react-router";
import { Terminal } from "lucide-react";
import { useGlobalAuth } from "../context/AuthContext";
import { useEffect, useRef, useState } from "react";

function Navbar() {
	const location = useLocation();

	const { user, signedIn, logout, loading } = useGlobalAuth();

	const [isOpen, setIsOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	console.log(user?.avatar);
	const userAvatar = user?.avatar === undefined ? "/user.png" : user?.avatar;

	const activeMenu = (path: string) =>
		location.pathname === path
			? "text-lg font-medium tracking-tight text-green-500"
			: " text-lg font-medium tracking-tight text-zinc-400 hover:text-zinc-200 ";

	return (
		<>
			<header className=" border-b-2 border-green-500/30 bg-black  sticky top-0 z-50">
				<div className="w-6xl mx-auto h-16 flex items-center justify-between">
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
						<Link to={"/docs"} className={activeMenu("/docs")}>
							Docs
						</Link>
						<Link to={"/about"} className={activeMenu("/about")}>
							About
						</Link>
						<Link to={"/contact"} className={activeMenu("/contact")}>
							Contact
						</Link>

						{signedIn && user ? (
							<>
								<Link to={"/dashboard"} className={activeMenu("/dashboard")}>
									Dashboard
								</Link>
								<div
									onClick={() => setIsOpen((prev) => !prev)}
									ref={dropdownRef}
									className="relative cursor-pointer rounded-full"
								>
									<img
										src={userAvatar}
										alt="user image"
										className="w-8 h-8 rounded-full   ring-green-500 antialiased hover:ring-2"
									/>
									{isOpen && (
										<div className="absolute right-0 mt-2 w-60 min-h-20 rounded-lg bg-zinc-900   p-4 flex flex-col items-center gap-4">
											<div>
												<p className="text-2xl text-center">
													<span className="text-green-500">Hi,</span>
													<span className="capitalize">
														{" "}
														{user.displayName}
													</span>
												</p>
												<p className="text-sm text-center">{user.email}</p>
											</div>

											<p className="w-full border-b-2 border-zinc-600"></p>
											<button
												onClick={logout}
												className="bg-red-500 py-2 rounded-lg w-full cursor-pointer hover:bg-red-600"
											>
												logout
											</button>
										</div>
									)}
								</div>
							</>
						) : (
							<Link to={"/signin"} className={activeMenu("/signin")}>
								Signin
							</Link>
						)}
					</nav>
				</div>
			</header>
		</>
	);
}

export default Navbar;

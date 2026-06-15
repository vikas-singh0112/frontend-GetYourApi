import { Link, useLocation } from "react-router";
import { LogOut, Menu, Terminal} from "lucide-react";
import { useGlobalAuth } from "../context/AuthContext";
import { useEffect, useRef, useState } from "react";

function Navbar() {
	const location = useLocation();

	const { user, signedIn, logout } = useGlobalAuth();

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

	const userAvatar = user?.avatar === undefined ? "/user.png" : user?.avatar;

	const activeMenu = (path: string) =>
		location.pathname === path
			? "text-lg font-medium tracking-tight text-green-500"
			: " text-lg font-medium tracking-tight text-zinc-400 hover:text-zinc-200 ";

	// mobile
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const mobileMenuOpenCloseBtn = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [location.pathname]);

	return (
		<>
			<header className="w-full lg:w-6xl border-b-2 border-green-500/30  h-16  fixed top-0 z-50 flex justify-center bg-black">
				<div className="px-8 lg:px-0 w-full  flex items-center justify-between  mx-auto">
					<div className="flex w-auto items-center space-x-2 font-bold text-2xl tracking-tight">
						<Terminal className="text-green-500 h-7 w-7" />
						<span className="text-white">
							Get Your <span className="text-green-500">API</span>
						</span>
					</div>
					<nav className="hidden lg:flex items-center space-x-6">
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
						{/* <Link to={"/contact"} className={activeMenu("/contact")}>
							Contact
						</Link> */}

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
										referrerPolicy="no-referrer"
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

					{/* mobile menu btn */}
					<div className="lg:hidden flex gap-8 text-zinc-300">
						<div className="hidden sm:flex">
							{signedIn && user ? (
								<Link to={"/dashboard"} className="text-lg">
									Dashboard
								</Link>
							) : (
								<Link to={"/signin"}>Signin</Link>
							)}
						</div>
						<div onClick={mobileMenuOpenCloseBtn} className="cursor-pointer">
							<Menu />
						</div>
					</div>

					{/* mobile menu open */}
					{mobileMenuOpen && (
						<div className="fixed inset-x-0 top-0 bottom-0 bg-black">
							{/* logo and close btn */}
							<div className="h-16 w-full flex justify-between items-center px-8 border-b-2 border-green-500/30 text-2xl tracking-tight font-bold">
								{/* logo */}
								<div className="flex gap-2">
									<Terminal className="text-green-500 h-7 w-7" />
									<span className="text-white">
										Get Your <span className="text-green-500">API</span>
									</span>
								</div>
								{/* close btn */}
								<div
									onClick={mobileMenuOpenCloseBtn}
									className=" text-zinc-300 cursor-pointer"
								>
									<LogOut />
								</div>
							</div>
							<div className="flex flex-col gap-6 items-center h-full">
								{/* profile */}
								{signedIn && user && (
									<div className="flex flex-col items-center mt-4 text-zinc-200">
										<img
											src={userAvatar}
											alt="user image"
											referrerPolicy="no-referrer"
											className="w-20 h-20 rounded-full   ring-green-500 antialiased hover:ring-2 mb-4"
										/>

										<p className="capitalize">{user.displayName}</p>
										<p>{user.email}</p>
									</div>
								)}
								{/* menu */}
								<nav
									className={`flex flex-col items-center gap-6 h-full ${signedIn && user ? "" : "mt-20"} `}
								>
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
									{signedIn && user ? (
										<>
											<Link
												to={"/dashboard"}
												className={activeMenu("/dashboard")}
											>
												Dashboard
											</Link>
											<button
												onClick={logout}
												className="bg-red-500 py-2 rounded-lg w-full cursor-pointer hover:bg-red-600"
											>
												logout
											</button>
										</>
									) : (
										<Link
											to={"/signin"}
											className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
										>
											Signin
										</Link>
									)}
								</nav>
							</div>
						</div>
					)}
				</div>
			</header>
		</>
	);
}

export default Navbar;

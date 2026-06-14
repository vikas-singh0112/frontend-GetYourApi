import { useLocation, useNavigate } from "react-router";
import GlobalScope from "../components/docsPageComponents/GlobalScope";
import UserScope from "../components/docsPageComponents/UserScope";
import SecretKey from "../components/docsPageComponents/SecretKey";
import Limit from "../components/docsPageComponents/Limit";
import Pagination from "../components/docsPageComponents/Pagination";
import { useEffect, useRef, useState } from "react";

export default function Docs() {
	const location = useLocation();
	const navigate = useNavigate();

	const [activeHash, setActiveHash] = useState(location.hash || "#global");
	const containerRef = useRef<HTMLDivElement>(null);

	const menuOptions = [
		{ name: "Global Scope", href: "#global-scope" },
		{ name: "User Scope", href: "#user-scope" },
		{ name: "Secret Key", href: "#secret" },
		{ name: "Limit", href: "#limit" },
		{ name: "Pagination", href: "#pagination" },
	];
	useEffect(() => {
		if (location.hash) {
			setActiveHash(location.hash);
		}
	}, [location.hash]);

  // learn more..
	useEffect(() => {
		const observerOptions = {
			root: containerRef.current, // Watch inside your scrollable container
			rootMargin: "-20% 0px -60% 0px", // Triggers when section is roughly in upper-middle viewport
			threshold: 0,
		};

		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute("id");
					if (id) {
						const newHash = `#${id}`;
						setActiveHash(newHash);

						// Optional: Quietly update the browser URL without breaking scroll position history
						navigate(newHash, { replace: true });
					}
				}
			});
		};

		const observer = new IntersectionObserver(
			handleIntersection,
			observerOptions,
		);

		const targetIds = [
			"global-scope",
			"user-scope",
			"secret",
			"limit",
			"pagination",
		];
		targetIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [navigate]);

	const isHashActive = (hashPath: string) => activeHash === hashPath;

	const menuStyles = (hashPath: string) =>
		isHashActive(hashPath)
			? "bg-green-500/10 text-green-400 font-medium"
			: "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200";

	const backendUrl = import.meta.env.VITE_BACKEND_URL;

	return (
		<div className="w-full flex">
			<section className="w-1/4 pr-12">
				<div className="flex flex-col gap-1 text-sm py-4">
					{menuOptions.map((option, index) => (
						<a
							key={index}
							href={option.href}
							className={`relative flex items-center py-2 cursor-pointer rounded-md transition-all duration-200 ${menuStyles(option.href)} `}
						>
							{isHashActive(option.href) && (
								<div className=" w-1 h-5 bg-green-500 rounded-full absolute left-0" />
							)}
							<span className="ml-6">{option.name}</span>
						</a>
					))}
				</div>
			</section>
			<section className="w-3/4 h-full ">
				<div className="w-full h-[calc(100vh-5rem)] overflow-y-auto bg-zinc-900/30 mt-4 mb-0.5 rounded-t-xl no-scrollbar ">
					<div className="w-full p-4">
						{/* div comp */}
						<GlobalScope backendUrl={backendUrl} />
						<UserScope backendUrl={backendUrl} />
						<SecretKey />
						<Limit backendUrl={backendUrl} />
						<Pagination />
					</div>
				</div>
			</section>
		</div>
	);
}

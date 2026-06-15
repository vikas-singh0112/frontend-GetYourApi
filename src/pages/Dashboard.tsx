import { useNavigate } from "react-router";
import { useGlobalAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function Dashboard() {
	const navigate = useNavigate();
	const { user, signedIn, loading, refreshAuth } = useGlobalAuth();
	const [secret, setSecret] = useState<string>("");
	const [copied, setCopied] = useState(false);
	const [coolDown, setCoolDown] = useState(false);

	// Refresh auth when dashboard loads to detect OAuth redirect
	useEffect(() => {
		if (!signedIn && !loading) {
			refreshAuth();
		}
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center ">
				<div className="h-8 w-8 animate-spin rounded-full border-4 border-green-400 border-t-transparent"></div>
			</div>
		);
	}

	if (!signedIn) {
		navigate("/signin");
		return null;
	}

	const fetchSecret = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setCoolDown(true);

		try {
			const backendUrl =
				import.meta.env.VITE_BACKEND_URL || "https://getyourapi.onrender.com";
			const response = await fetch(`${backendUrl}/api/auth/secret`, {
				credentials: "include",
			});

			const data = await response.json();
			setSecret(data.data);
		} catch (error) {
			console.error("failed", error);
		}

		setTimeout(() => {
			setCoolDown(false);
		}, 2000);
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(secret);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="w-full  flex flex-col mx-auto lg:w-6xl px-4 lg:px-0 gap-8">
			<h1 className="text-2xl font-bold mt-6 capitalize text-green-500">
				Welcome, <span className="text-zinc-200">{user?.displayName}</span>
			</h1>
			<div className="bg-zinc-900/50 p-6 border border-zinc-800 rounded-xl">
				<div>
					<h2 className="text-2xl text-green-500 font-semibold">
						Generate Secret Token
					</h2>
					<p className="break-all mt-4">
						{secret === ""
							? "Click Generate to get a new Secret Token"
							: secret}
					</p>
				</div>
				<div className="flex gap-4 mt-6">
					<button
						className="bg-green-500 hover:bg-green-600 rounded py-2 w-24 font-mono cursor-pointer disabled:bg-green-800 disabled:cursor-not-allowed"
						onClick={fetchSecret}
						disabled={coolDown}
					>
						Generate
					</button>
					<button
						onClick={handleCopy}
						className="text-zinc-400 bg-zinc-700 hover:text-white transition w-24 py-2 rounded hover:bg-zinc-800 flex items-center justify-center gap-1.5  font-mono cursor-pointer"
					>
						{copied ? (
							<Check className="h-3.5 w-3.5 text-green-400" />
						) : (
							<Copy className="h-3.5 w-3.5" />
						)}
						{copied ? "Copied!" : "Copy"}
					</button>
				</div>
			</div>
		</div>
	);
}

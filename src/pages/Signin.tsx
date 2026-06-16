import { Link, useNavigate } from "react-router";
import { useGlobalAuth } from "../context/AuthContext";

export default function Signin() {
	const { signedIn, loading } = useGlobalAuth();
	const navigate = useNavigate();

	if (!loading && signedIn) {
		navigate("/dashboard");
	}

	if (loading) {
		return (
			<div className="flex h-screen w-screen items-center justify-center bg-gray-950">
				<div className="flex flex-col items-center gap-3">
					{/* Spinner using your secondary blue */}
					<div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
					<h1 className="text-xl font-semibold text-gray-400">
						Checking session...
					</h1>
				</div>
			</div>
		);
	}

	if (signedIn) return null;

	const handleGoogleLogin = () => {
		const backendUrl =
			import.meta.env.VITE_BACKEND_URL || "https://getyourapi.onrender.com";
		window.open(`${backendUrl}/api/auth/google`, "_self");
	};

	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-950 px-4">
			<div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8 border border-green-500/30 shadow-[0_0_50px_-12px_rgba(34,197,94,0.25)] text-center">
				{/* Header Section with your Primary Green */}
				<h2 className="text-3xl font-bold tracking-tight text-green-500">
					Welcome Back
				</h2>
				<p className="mt-2 text-sm text-gray-400">
					Please sign in to access your dashboard and APIs
				</p>

				{/* Styled Divider */}
				<div className="my-6 border-t border-gray-800"></div>

				{/* Google Login Button: Deep gray baseline, transitioning to your Secondary Blue on hover */}
				<button
					onClick={handleGoogleLogin}
					className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 font-medium text-gray-200 shadow-sm transition-all duration-200 hover:bg-gray-800 hover:text-blue-400 cursor-pointer  active:scale-[0.98]"
				>
					{/* Google SVG Icon */}
					<img
						src="/google-logo.svg"
						alt="google signin"
						className="aspect-square h-8"
					/>
					Sign in with Google
				</button>

				<p className="mt-6 text-xs text-gray-500">
					By signing in, you agree to our{" "}
					<a href="#terms" className="text-blue-500 hover:underline">
						Terms of Service
					</a>
					.
				</p>

				<Link to={"/"} className="mt-6 flex justify-center text-xs">
					<span className="bg-green-500/30 py-3 px-4 rounded-lg hover:bg-green-500">
						Go to Home
					</span>
				</Link>
			</div>
		</div>
	);
}

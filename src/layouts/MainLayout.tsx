import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
	return (
		<div className="w-full flex flex-col items-center">
			<Navbar />
			<main className="w-6xl">
				<Outlet />
			</main>
		</div>
	);
}

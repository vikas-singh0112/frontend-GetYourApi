import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
	return (
		<div className="w-full flex flex-col relative items-center">
			<Navbar />
			<main className="w-full mt-16 h-[calc(100vh-4rem)] ">
				<Outlet />
			</main>
		</div>
	);
}

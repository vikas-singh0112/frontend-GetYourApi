import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Api from "./pages/Api";

import AuthLayout from "./layouts/AuthLayout";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Docs from "./pages/Docs";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "api", element: <Api /> },
			{ path: "docs", element: <Docs /> },
			{ path: "about", element: <About /> },
			{ path: "dashboard", element: <Dashboard /> },
		],
	},
	{
		element: <AuthLayout />,
		children: [
			{ path: "signin", element: <Signin /> },
		],	
	}
]);

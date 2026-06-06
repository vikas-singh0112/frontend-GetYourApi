import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Api from "./pages/Api";

import AuthLayout from "./layouts/AuthLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "api", element: <Api /> },
			{ path: "about", element: <About /> },
			{ path: "contact", element: <Contact /> },
		],
	},
	{
		element: <AuthLayout />,
		children: [
			{ path: "signin", element: <Signin /> },
			{ path: "signup", element: <Signup /> },
		],	
	}
]);

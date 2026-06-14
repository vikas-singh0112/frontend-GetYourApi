import React, { createContext, useContext, useEffect, useState } from "react";

interface UserProfile {
	_id: string;
	displayName: string;
	email: string;
	avatar?: string;
}

interface AuthContextType {
	user: UserProfile | null;
	signedIn: boolean;
	loading: boolean;
	logout: () => void;
	refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    
	const [user, setUser] = useState<UserProfile | null>(null);
	const [signedIn, setSignedIn] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	const refreshAuth = async () => {
		try {
			const res = await fetch("http://localhost:7000/api/auth/user", {
				credentials: "include",
			});
			const data = await res.json();
			if (data.loggedIn) {
				setUser(data.user);
				setSignedIn(true);
			} else {
				setUser(null);
				setSignedIn(false);
			}
		} catch {
			setUser(null);
			setSignedIn(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		refreshAuth();
	}, []);

	const logout = () => {
		fetch("http://localhost:7000/api/auth/logout", {
			credentials: "include",
		}).then(() => {
			setUser(null);
			setSignedIn(false);
			window.location.href = "/";
		});
	};

	return (
		<AuthContext.Provider
			value={{ user, signedIn, loading, logout, refreshAuth }}
		>
			{children}
		</AuthContext.Provider>
	);
}

// Custom hook for easy use in other components
export function useGlobalAuth() {
	const context = useContext(AuthContext);
	if (!context)
		throw new Error("useGlobalAuth must be used within an AuthProvider");
	return context;
}

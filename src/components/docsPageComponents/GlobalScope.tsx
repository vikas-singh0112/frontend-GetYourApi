import { useState } from "react";

export default function GlobalScope({ backendUrl }: { backendUrl: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(globalScopeCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const globalScopeCode = `
     async function getUsers () { 
      try {
        const response = await fetch(
		"${backendUrl}/users"
		); 
        const result = await response.json(); 
        return result; 
      } catch (error) {
        console.error("Fetch error:", error); 
      }
     }`;

	const globalScopeResult = `
     const data = getUsers()
     console.log("users":data?.data?.users)
        
     users: [
      {
     _id: "6a293156300c0ebe239e2854d,
     fullName: "john doe",
     userName: "johndoe101",
     email: "john.doe101@gmail.com",
     phoneNumber: "1234567890",
     role: "developer",
     birthDate: "1994-03-14T00:00:00.000Z",
     address: "243, UA road",
     city: "new york",
     state: "NY",
     country: "USA",
     zipCode: "10001",
     createdAt: "2025-04-12T10:30:00.000Z",
     updatedAt: "2026-06-13T05:40:26.783Z",
     slug: "john-doe-5f4090"
      },
     ]`;

	return (
		<div
			id="global-scope"
			className="flex flex-col gap-12 border-b border-green-500 pb-6"
		>
			<h4 className="text-3xl font-bold text-green-500"># Global Scope</h4>
			<div className="rounded-xl bg-zinc-900/40 px-4 py-2 border border-zinc-800 text-zinc-300">
				<p>
					Global scope designates data accessible to all API consumers without
					authentication. It represents shared, publicly available resources
					within the platform.
				</p>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40 px-4 py-2 border border-zinc-800 text-zinc-300">
				<p>
					Global : Public resources intended for read-only access by any client
				</p>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40  pb-2 border border-zinc-800 text-zinc-300">
				<div className="flex justify-between items-center border-b py-2">
					<p className="text-green-500 font-bold px-4">Usage:</p>
					<button
						onClick={handleCopy}
						className={`flex mr-4 items-center gap-2 justify-center  h-fit w-fit px-3 py-1 rounded text-white cursor-pointer  ${
							copied
								? "bg-emerald-700 shadow-emerald-950/20"
								: "bg-green-600 hover:bg-green-500 shadow-green-900/20"
						}`}
						disabled={copied}
					>
						{copied ? "copied!" : "copy"}
						{/* <span>{copied ? <Check size={14} /> : <Copy size={14} />}</span> */}
					</button>
				</div>
				<pre className="text-sm">{globalScopeCode}</pre>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40  pb-2 border border-zinc-800 text-zinc-300">
				<div className="flex justify-between items-center border-b py-2">
					<p className="text-green-500 font-bold px-4">Result:</p>
				</div>
				<pre className="text-sm">{globalScopeResult}</pre>
			</div>
		</div>
	);
}

import { useState } from "react";

export default function UserScope({ backendUrl }: { backendUrl: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(userScopeCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};
	const userScopeCode = `
    async function getUsers () { 
     const Secret = process.env.SECRET_TOKEN
     try {
        const response = await fetch(
	 "${backendUrl}/users?
	 scope=me",
	  {
          method: "GET",
          headers: {
            "authorization": Secret,  
          },
         ); 
       const result = await response.json(); 
       console.log(result); 
       return result; 
     } catch (error) {
       console.error("Fetch error:", error); 
     }
    } 
      
     getUsers()`;
	const userScopeResult = `
     const data = getUsers()
     console.log("users:",data?.data?.users)        
     users: [
     {
      _id: "6a293156300c0ebe239e2854d",
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
			id="user-scope"
			className="flex flex-col gap-12 mt-12 border-b border-green-500 pb-6"
		>
			<h4 className="text-3xl font-bold text-green-500"># User Scope</h4>
			<div className="rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300">
				<p>
					User scope designates data owned and controlled by an authenticated
					developer. Access is restricted to the developer who created the
					resource.
				</p>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300">
				<p>
					User : Private resources with owner-only access applied to resources
					created under a developer's account
				</p>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300">
				<p>
					After login copy token from dashboard, token is valid for 24 hours
				</p>
				<img
					className="mt-4 rounded"
					src="https://res.cloudinary.com/get-your-api/image/upload/v1781431395/ncqhcmjukrt1xyoakshm.png"
					alt="dashboard image"
				/>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300">
				<p>Put the secret token in environment(env) file</p>
				<img
					className="mt-4 rounded"
					src="https://res.cloudinary.com/get-your-api/image/upload/v1781431979/rulgkltfpv8qrlklp7ww.png"
					alt="env file image"
				/>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40  pb-4 border border-zinc-800 text-zinc-300">
				<div className="flex justify-between items-center border-b py-2">
					<p className="text-green-500 font-bold px-4">Usage:</p>
					<button
						onClick={handleCopy}
						className={`flex mr-4 items-center gap-2 justify-center h-fit w-fit px-3 py-1 rounded text-white cursor-pointer ${
							copied
								? "bg-emerald-700 shadow-emerald-950/20"
								: "bg-green-600 hover:bg-green-500 shadow-green-900/20"
						}`}
						disabled={copied}
					>
						{copied ? "copied!" : "copy"}
					</button>
				</div>
				<pre className="text-sm">{userScopeCode}</pre>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40  pb-4 border border-zinc-800 text-zinc-300">
				<div className="flex justify-between items-center border-b py-4">
					<p className="text-green-500 font-bold px-4">
						Result:{" "}
						<span className="text-zinc-300">
							only receives users which are created by developer them self
						</span>
					</p>
				</div>
				<pre className="text-sm">{userScopeResult}</pre>
			</div>
		</div>
	);
}

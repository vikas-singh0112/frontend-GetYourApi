import { useState } from "react";

export default function Limit({ backendUrl }: { backendUrl: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(limitCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const limitCode = `
     async function getUsers () { 
      try {
        const response = await fetch(
		"${backendUrl}/users
		?limit=13"
		); 
        const result = await response.json(); 
        return result; 
      } catch (error) {
        console.error("Fetch error:", error); 
      }
     }`;

	return (
		<div
			id="limit"
			className="flex flex-col gap-12 mt-12 border-b border-green-500 pb-6"
		>
			<h4 className="text-3xl font-bold text-green-500"># Limit</h4>
			<div className="rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300">
				<p>
					The limit parameter controls the maximum number of records returned
					per API request, enabling pagination and resource efficiency.
				</p>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300 flex flex-col gap-2">
				<p>
					Limit is applied at the database query level, ensuring only the
					specified number of documents are retrieved and transmitted
				</p>
				<p>developer can set the limit in url like below</p>
				<p>• Valid Range: 1–50 items per request</p>
				<p>• Default Value: 20 items</p>
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
				<pre className="text-sm">{limitCode}</pre>
			</div>
		</div>
	);
}

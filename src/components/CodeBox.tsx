interface CodeBoxProps {
	data: {
		name: string;
		privateRoute?: string;
		globalRoute: string;
	};
	route: string;
	apiData: {
		data: any;
	};
	method: string;
}

const CodeBox = ({ data, apiData, route, method }: CodeBoxProps) => {
	return (
		<div className=" relative group/code mt-6 animate-in fade-in slide-in-from-top-2 duration-500">
			<div className="absolute -top-3 left-3 px-2 py-0.5 bg-zinc-900 border border-zinc-700 rounded text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
				Request Body
			</div>
			<div className="rounded-lg border border-zinc-800 bg-black/40 overflow-hidden">
				<pre className="p-4 font-mono text-xs text-blue-300/90 overflow-x-auto leading-relaxed">
					{data.name.split(" ")[0] === "create" &&
						`Required feilds:-\n${Object.entries(apiData.data)
							.map(([key, value]) => {
								const typeName =
									typeof value === "function" ? value.name : typeof value;
								return `- ${key} (${typeName})`;
							})
							.join("\n")}\n`}

					{`
  async function ${data.name.replace(/\s+|_/g, "")}() {
    try {
      const response = await fetch(
	     "${import.meta.env.VITE_BACKEND_URL}/api${route}"${
				(route === data.globalRoute && data.name.split(" ")[0] === "create") ||
				route === data.privateRoute
					? `, {
          method: "${method}",
          headers: {
              "authorization": Secret, // Sign in, copy access token from dashboard, and replace Secret with it
          }${data.name.split(" ")[0] === "create" ? `,\n            body: createData` : ""}
    	}`
					: ""
		});
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
        console.error("Fetch error:", error);
    }
  }

  ${data.name.replace(/\s+|_/g, "")}();`}
				</pre>
			</div>
		</div>
	);
};

export default CodeBox;



export default function SecretKey() {
	return (
		<div
			id="secret"
			className="flex flex-col gap-12 mt-12 border-b border-green-500 pb-6"
		>
			<h4 className="text-3xl font-bold text-green-500"># Secret Key</h4>
			<div className="rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300">
				<p>
					Secret key/token is needed for user-scope or when developer wants to
					create their own data
				</p>
			</div>

			<div className="text-md rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300">
				<p>Get secret key/token from dashboard after login</p>
				<img
					className="mt-4 rounded"
					src="https://res.cloudinary.com/get-your-api/image/upload/v1781431395/ncqhcmjukrt1xyoakshm.png"
					alt="dashboard image"
				/>
			</div>
		</div>
	);
}

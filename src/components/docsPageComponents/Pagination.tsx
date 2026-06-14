export default function Pagination() {
	const user = `{
  message: "Users fetched successfully",
  statusCode: 200,
  success: true,
  timestamp: "2026-06-14T11:41:37.681Z",
  data: {
   users: [
 {
  _id: "6a29371345632be239e2854d",
  fullName: "john doe",
  userName: "johndoe101",
  email: "john.doe101@gmail.com",
  phoneNumber: "9812345001",
  role: "developer",
  birthDate: "1994-03-14T00:00:00.000Z",
  address: "243, main road, near sector 4",
  city: "New York",
  state: "NY",
  country: "Usa",
  zipCode: "10001",
  createdAt: "2025-04-12T10:30:00.000Z",
  updatedAt: "2026-06-13T05:40:26.783Z",
  slug: "john-doe-5f4090"
 }
   ],
 pagination: {
      totalItems: 100,
      totalPages: 10,
      currentPage: 1,
      limit: 10,
      hasNextPage: true,
      hasPrevPage: false,
      nextPage: 2,
      prevPage: null
    }
   }}`;

	return (
		<div
			id="pagination"
			className="flex flex-col gap-12 mt-12 border-b border-green-500 pb-6"
		>
			<h4 className="text-3xl font-bold text-green-500"># Pagination</h4>
			<div className="rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300">
				<p>
					Pagination is a mechanism for retrieving large datasets in manageable
					chunks by dividing results into sequential pages, each containing a
					fixed number of records.
				</p>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40 px-4 py-4 border border-zinc-800 text-zinc-300">
				<p>Pagination is executed at the database level</p>
			</div>
			<div className="text-md rounded-xl bg-zinc-900/40  pb-4 border border-zinc-800 text-zinc-300 py-4 px-4">
				<p>
					when fetching data like user pagination details are also available by
					default.{" "}
				</p>
				<pre className="text-sm">data = {user}</pre>
			</div>
		</div>
	);
}

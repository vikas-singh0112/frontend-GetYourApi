export const api = [
	// users
	{
		api: "users",
		routes: [
			{
				name: "get users",
				globalRoute: "/users",
				privateRoute: "/users?scope=me",
				method: "GET",
				usage: "Returns all users, default limit of 20 users ",
			},
			{
				name: "get users with limit",
				globalRoute: "/users?limit=20",
				privateRoute: "/users?limit=20&scope=user",
				method: "GET",
				usage: "Returns all users, set limit manually ",
			},
			{
				name: "get users by id",
				globalRoute: "/users/id/123456",
				privateRoute: "users/id/123456?scope=user",
				method: "GET",
				usage: "Returns a single user or user not found",
			},
			{
				name: "get users by slug",
				globalRoute: "/users/name/amit-sharma-5f4090",
				privateRoute: "users/name/amit-sharma-5f4090?scope=user",
				method: "GET",
				usage: "Returns a single user or user not found",
			},
			{
				name: "search users",
				globalRoute: "/users/search?q=adam",
				privateRoute: "/users/search?user=adam&scope=user",
				method: "GET",
				usage: "Returns an array of users or users not found, default limit 20",
			},
			{
				name: "search users with limit",
				globalRoute: "/users/search?q=adam&limit=10",
				privateRoute: "/users/search?user=adam&limit=10&scope=user",
				method: "GET",
				usage:
					"Returns an array of users or users not found, change limit manually",
			},
			{
				name: "create user",
				globalRoute: "/users/create",
				method: "POST",
				usage: "create user, for persisted creation signin",
			},
		],
		data: {
			fullName: String,
			userName: String,
			email: String,
			phoneNumber: String,
			role: String,
			birthDate: Date,
			address: String,
			city: String,
			state: String,
			country: String,
			zipCode: String,
		},
	},

	// products
	{
		api: "products",
		routes: [
			{
				name: "get products",
				globalRoute: "/products",
				privateRoute: "/products?scope=user",
				method: "GET",
				usage: "Returns an array of products, default limit of 20 products ",
			},
			{
				name: "get  products with limit",
				globalRoute: "/products?limit=10",
				privateRoute: "/products?limit=10&scope=user",
				method: "GET",
				usage: "Returns an array of products, set limit manually",
			},
			{
				name: "get products by id",
				globalRoute: "/products/id/123ab",
				privateRoute: "/products/id/123ab?scope=user",
				method: "GET",
				usage: "Returns a single product or product not found",
			},
			{
				name: "get products by slug",
				globalRoute: "/products/name/tshirt-red-5f4090",
				privateRoute: "/products/name/tshirt-red-5f4090?scope=user",
				method: "GET",
				usage: "Returns a single product or product not found",
			},
			{
				name: "search products",
				globalRoute: "/products/search?q=adam",
				privateRoute: "/products/search?user=adam&scope=user",
				method: "GET",
				usage:
					"Returns an array of products or products not found, default limit 20",
			},
			{
				name: "search products with limit",
				globalRoute: "/products/search?q=shirt&limit=10",
				privateRoute: "/products/search?q=shirt&limit=10&scope=user",
				method: "GET",
				usage:
					"Returns an array of products or products not found, change limit manually",
			},
			{
				name: "create product",
				globalRoute: "/products/create",
				method: "POST",
				usage: "creates a product, for persisted creation signin",
			},
		],
		data: {
			name: String,
			category: String,
			price: String,
			salePrice: String,
			stock: String,
			images: File,
			isActive: Boolean,
		},
	},

	// todos
	{
		api: "todos",
		routes: [
			{
				name: "get todos",
				globalRoute: "/todos",
				privateRoute: "/todos?scope=user",
				method: "GET",
				usage: "Returns array of todos, default limit of 20 todos ",
			},
			{
				name: "get todos with limit",
				globalRoute: "/todos?limit=10",
				privateRoute: "/todos?limit=10&scope=user",
				method: "GET",
				usage: "Returns array of todos, set limit manually",
			},
			{
				name: "get todos by id",
				globalRoute: "/todos/id/123ag45dg",
				privateRoute: "todos/id/123ag45dg?scope=user",
				method: "GET",
				usage: "Returns a single todo",
			},
			{
				name: "get todos by slug",
				globalRoute: "/todos/title/fix redis",
				privateRoute: "/todos/title/fix redis?scope=user",
				method: "GET",
				usage: "Returns a single todo",
			},
			{
				name: "search todos",
				globalRoute: "/todos/search?q=documents",
				privateRoute: "/todos/search?q=documents&scope=user",
				method: "GET",
				usage: "Returns an array of todos, default limit 20",
			},
			{
				name: "search todos with limit",
				globalRoute: "/todos/search?q=documents&limit=10",
				privateRoute: "/todos/search?q=documents&limit=10&scope=user",
				method: "GET",
				usage:
					"Returns an array of todos or todos not found, change limit manually",
			},
			{
				name: "create todo",
				globalRoute: "/todos/create",
				method: "POST",
				usage: "creates a todo, for persisted creation signin",
			},
		],
		data: {
			title: String,
			content: String,
		},
	},
];

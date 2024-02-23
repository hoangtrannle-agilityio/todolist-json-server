import jsonServer from "json-server";

// Create a JSON Server instance
const server = jsonServer.create();

// Create a router using the 'db.json' file as the data source
const router = jsonServer.router("db.json");

// Set up default middlewares (logger, static, cors, etc.)
const middlewares = jsonServer.defaults();

// Use the middlewares
server.use(middlewares);

server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}))
// Use the router for handling API routes
server.use(router);

// Start the server on port 3000
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});

// Export the Server API
module.exports = server
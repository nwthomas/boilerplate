// Import DOTENV for dynamic port assignment
require("dotenv").config();

// Import server from server.js
const server = require("./api/server.js");

// Assign port for server use
const port = process.env.PORT || 8000;

// Server port dynamic assignment and listening
server.listen(port, () => {
  console.log(`
  ----------------------------------
        Listening on Port ${port}
  ----------------------------------
  `);
});

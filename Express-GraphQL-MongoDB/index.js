const server = require("./api/server.js");
require("dotenv").config(); // Config .env

const port = process.env.SERVER_PORT || 8000; // Dynamic port assignment via .env
server.listen(port, () =>
  console.log(`
  -------------------------------------
      Server Listening on Port ${port}
  `)
);

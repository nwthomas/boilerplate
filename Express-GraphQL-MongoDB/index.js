const server = require("./api/server.js");
require("dotenv").config(); // Config .env

server.get("/", (req, res) => {
  res.send("The server is alive and well 🎉");
});

const port = process.env.PORT || 8000; // Dynamic port assignment via .env
server.listen(port, () =>
  console.log(`
  -------------------------------------
      Server Listening on Port ${port}
  `)
);

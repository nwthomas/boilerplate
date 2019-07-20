const server = require('./api/server.js');
require('dotenv').config(); // Config .env

const port = process.env.PORT || 8000; // Dynamic port assignment via .env

server.listen(port, () =>
  console.log(`
--------------------------------------------------------------
          Server is live on http://localhost:${port}

GraphQL Playground is live on http://localhost:${port}/playground
--------------------------------------------------------------
  `)
);

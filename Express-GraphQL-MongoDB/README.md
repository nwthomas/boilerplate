# EXPRESS GRAPHQL MONGODB

This directory contains boilerplate for an Express and MongoDB server built using GraphQL APIs.

## GETTING STARTED

- Fork or clone the repository
- Add a `.env` file with the following conditions
  - Create a `PORT` variable with the port number you want to run your server on (defaults to `8000` if you don't set anything)
  - Implement a database instance of MongoDB somewhere such as MongoDB Atlas and assign the URL for that cluster to `DB_URI` in your .env file
- Install all dependencies with `yarn install` or `npm install` including:
  - `cors`
  - `dotenv`
  - `helmet`
  - `morgan`
  - `cross-env`
  - `nodemon`
  - `graphql-playground-middleware-express`
- Run `yarn start` or `npm start` to launch server

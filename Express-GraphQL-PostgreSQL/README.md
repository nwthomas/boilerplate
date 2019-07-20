# EXPRESS GRAPHQL POSTGRES

This directory contains boilerplate for an Express and PostgreSQL server built using GraphQL APIs.

## GETTING STARTED

- Fork or clone the repository
- Add a `.env` file with the following conditions
  - Create a `PORT` variable with the port number you want to run your server on (defaults to `8000` if you don't set anything)
  - Implement a database instance of PostgreSQL somewhere such as Heroku and assign the URL for that cluster to `DATABASE_URL` in your .env file
- Install all full dependencies with `yarn add <dependency>` or `npm install <dependency>` including:

  - `cors`
  - `dotenv`
  - `helmet`
  - `morgan`
  - `cross-env`
  - `graphql-playground-middleware-express`
  - `knex`
  - `knex-cleaner`
  - `pg`

- Install all dev dependencies with `yarn add <dependency> --dev` or `npm install <dependency> -D`:

  - `nodemon`
  - `jest`

- Run `yarn start` or `npm start` to launch server

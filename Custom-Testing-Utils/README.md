# CUSTOM TESTING UTILITIES

When building out tests for my portfolio, I ran into the issue of React Router throwing errors on every component inside of routes. What followed was me building out custom utility functions allowing me to use `react-testing-library` and `react-test-renderer` with `react-router` dependencies.

More recently, I have also implemented a custom mock function using the `uuid` npm package that allows me to accurately mock data with comparison UUIDs.

## GETTING STARTED

- Fork or clone repository
- Use `yarn create react-app <name>` to create new application
- Install dependencies including:
  - `react-testing-library`
  - `react-test-renderer`
  - `jest-dom`
  - `react-router`
  - `react-router-dom`
  - `uuid`
- Copy over boilerplate files to get started testing with utility functions for React Router

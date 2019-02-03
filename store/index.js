import { createStore, applyMiddleware, compose } from "redux"; // These attach reducers/middleware
import rootReducer from "./reducers"; // Default export of combine reducer
import thunk from "redux-thunk"; // Install this dependency - redux-thunk
import logger from "redux-logger"; // Install this dependency - redux-logger

const middlewareQueue = applyMiddleware(thunk, logger); // Creates async nature of middleware prior to going into the reducers + logger function for axios calls
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Allows you to still use Redux devtools

// Creation of store
export const store = createStore(
  rootReducer,
  composeEnhancers(middlewareQueue)
);

import { createStore, applyMiddleware, compose } from "redux"; // These attach reducers/middleware
import rootReducer from "./reducers"; // Default export of combine reducer
import thunk from "redux-thunk"; // Install this dependency - redux-thunk
import logger from "redux-logger"; // Install this dependency - redux-logger

const middlewareQueue = applyMiddleware(thunk, logger); // Creates async nature of middleware prior to going into the reducers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Lets you still use Redux devtools

export const store = createStore(
  rootReducer,
  composeEnhancers(middlewareQueue)
); // Creation of store

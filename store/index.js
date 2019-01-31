import { createStore, applyMiddleware } from "redux"; // These attach reducers/middleware
import rootReducer from "./reducers"; // Default export of combine reducer
import thunk from "redux-thunk"; // Install this dependency - redux-thunk
import logger from "redux-logger"; // Install this dependency - redux-logger

const middlewareQueue = applyMiddleware(thunk, logger); // Creates async nature of middleware prior to going into the reducers

export const store = createStore(rootReducer, middlewareQueue);

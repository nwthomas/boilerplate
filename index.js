import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; // Provider import from read-redux
import { store } from "./store"; // Store import from where you made it in store

// Wrap App in Provider and pass in store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

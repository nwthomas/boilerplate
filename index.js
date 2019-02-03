import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; // Provider import from react-redux
import { store } from "./store"; // Store import from where you made it in /store/index.js

// Wrap App in Provider and pass in store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*

Can be updated with React Router using the BrowserRouter as Router/AppWithRouter functionality

*/

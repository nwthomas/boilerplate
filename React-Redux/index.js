import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; // Provider import from react-redux
import { store } from "./store"; // Store import from where you made it in /store/index.js
import { BrowserRouter as Router, withRouter } from "react-router-dom"; // Renamed import of BrowserRouter and withRouter for history/match/location in App.js

const AppWithRouter = withRouter(App); // Clean creation of AppWithRouter component

// Wrap App in Provider and pass in store
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);

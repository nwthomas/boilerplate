import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider as Provider } from "./store/store";
import { BrowserRouter as Router, withRouter } from "react-router-dom"; // Renamed import of BrowserRouter and withRouter for history/match/location in App.js

const AppWithRouter = withRouter(App); // Clean creation of AppWithRouter component for match/history/locaion in App.js

// Provider wraps app with access to state context
ReactDOM.render(
  <Provider>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);

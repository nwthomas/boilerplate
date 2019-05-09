import React from "./node_modules/react";
import ReactDOM from "./node_modules/react-dom";
import App from "./App";
import { StateProvider as Provider } from "./store/store";
import {
  BrowserRouter as Router,
  withRouter
} from "./node_modules/react-router-dom"; // Renamed import of BrowserRouter and withRouter for history/match/location in App.js

const AppWithRouter = withRouter(App); // Clean creation of AppWithRouter component

ReactDOM.render(
  <Provider>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);

/*

We can then use and import state into our components using these lines of code:

import { useStateValue } from "./state";

Const [{ theme }, dispatch] = useStateValue();

*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

const TheApp = withRouter(App);

const MyApp = () => (
  <Router>
    <TheApp />
  </Router>
);
ReactDOM.render(<MyApp />, document.getElementById("root"));
registerServiceWorker();

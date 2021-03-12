import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import store from './redux/store';
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

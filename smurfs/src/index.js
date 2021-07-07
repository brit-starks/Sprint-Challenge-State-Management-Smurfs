import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import { reducer } from "./store/reducers";

import "./index.css";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
); 

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement);

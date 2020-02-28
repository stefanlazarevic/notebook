import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducers from "./reducers";

const middlewares = [thunk];

export default createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

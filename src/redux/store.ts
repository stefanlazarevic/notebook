import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducers from "./reducers";
import confirmation from "./middleware/confirmation";

const middlewares = [thunk, confirmation];

export default createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

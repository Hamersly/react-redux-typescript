import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReduccer} from "./reducers";

export const store = createStore(rootReduccer, applyMiddleware(thunk))
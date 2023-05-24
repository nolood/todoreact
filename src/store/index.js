import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {todoReducer} from "./todoReducer.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todo: todoReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

import { createStore, applyMiddleware } from "redux";
import ProductReducer from "./ProductReducer";
import thunk from 'redux-thunk';

const store = new createStore(ProductReducer, applyMiddleware(thunk));

export default store;
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {  createRootReducer } from '../reducer';



export const store = createStore(createRootReducer(), composeWithDevTools(
    applyMiddleware(thunk)
));
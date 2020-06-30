import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import {  createRootReducer } from '../reducer';



export const store = createStore(createRootReducer(), composeWithDevTools());
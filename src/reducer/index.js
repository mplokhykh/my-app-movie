import {combineReducers} from "redux";

import { moviesListReducer } from "./moviesListReducer";



export const createRootReducer = () => {
    return combineReducers({
        moviesListReducer
    });
};
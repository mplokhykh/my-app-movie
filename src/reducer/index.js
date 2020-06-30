import {combineReducers} from "redux";

import { moviesListReducer } from "./MoviesListReducer";


export const createRootReducer = () => {
    return combineReducers({
        moviesListReducer
    });
};
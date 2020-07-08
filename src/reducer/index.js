import {combineReducers} from "redux";

import { moviesListReducer } from "./moviesListReducer";
import {genresBadgeReducer} from "./genresBadgeReducer";


export const createRootReducer = () => {
    return combineReducers({
        moviesListReducer,
        genresBadgeReducer
    });
};
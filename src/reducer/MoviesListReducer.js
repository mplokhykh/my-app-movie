import {START_MOVIES_LOADING,
    MOVIES_LOADED,
    STOP_MOVIES_LOADING} from "../action-types";


const defaultValue = {
    moviesList: [],
    isMoviesLoading: false
};

export function moviesListReducer(store = defaultValue, action) {
    switch (action.type) {
        case START_MOVIES_LOADING: {
            return {
                ...store,
                isMoviesLoading: true
            }
        }
        case STOP_MOVIES_LOADING: {
            return {
                ...store,
                isMoviesLoading: false
            }
        }
        case MOVIES_LOADED: {
            return {
                ...store,
                moviesList: action.payload,
            }
        }

        default: return store;
    }
};

import {START_MOVIES_LOADING,
    MOVIES_LOADED,
    STOP_MOVIES_LOADING,
    CURRENT_PAGE} from "../action-types/moviesListAction-types";


const defaultValue = {
    moviesList: [],
    isMoviesLoading: false,
    totalMoviesPage: 0,
    currentPage: 1
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
                totalMoviesPage: action.total_page
            }
        }
        case CURRENT_PAGE: {
            return {
                ...store,
                currentPage: action.payload
            }
        }

        default: return store;
    }
};

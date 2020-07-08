import {START_GENRES_LOADING,
    GENRES_LOADED,
    STOP_GENRES_LOADING} from "../action-types/genresBadgeAction-type";


const defaultValue = {
    genresBadgeList: [],
    isGenresLoading: false
};

export function genresBadgeReducer(store = defaultValue, action) {

    switch (action.type) {
        case START_GENRES_LOADING: {
            return {
                ...store,
                isGenresLoading: true
            }
        }
        case STOP_GENRES_LOADING: {
            return {
                ...store,
                isGenresLoading: false
            }
        }
        case GENRES_LOADED: {
            return {
                ...store,
                genresBadgeList: action.payload,
            }
        }

        default: return store;
    }
};

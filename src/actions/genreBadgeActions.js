import { api_key } from "../constans/constans";

import {START_GENRES_LOADING,
        STOP_GENRES_LOADING,
        GENRES_LOADED,
        ERROR_LOADING_GENRES} from "../action-types/genresBadgeAction-type";

export const getGenres = () => {
    return (dispatch) => {
        dispatch(startLoadingGenres());
        return fetch( `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
            .then(response => response.json())
            .then((data) => {
                dispatch({
                    type: GENRES_LOADED,
                    payload: data.genres
                });
                dispatch(stopLoadingGenres());

            })
            .catch((error) => {
                dispatch({
                    type: ERROR_LOADING_GENRES,
                    payload: error
                })
            })
    }
};

export const startLoadingGenres = () => {
    return {
        type: START_GENRES_LOADING
    }
};

export const stopLoadingGenres = () => {
    return {
        type: STOP_GENRES_LOADING
    }
};

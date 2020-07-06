import { api_key } from "../constans/constans";

import {START_MOVIES_LOADING,
        MOVIES_LOADED,
        STOP_MOVIES_LOADING,
        ERROR_LOADING_MOVIES} from "../action-types/moviesListAction-types";


export const getMovies = () => {
    return (dispatch) => {
        dispatch(startLoadingMovies());
        return fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
            .then(response => response.json())
            .then((data) => {
                dispatch({
                    type: MOVIES_LOADED,
                    payload: data.results
                });
                dispatch(stopLoadingMovies());

            })
            .catch((error) => {
                dispatch({
                    type: ERROR_LOADING_MOVIES,
                    payload: error
                })
            })
    }
};

export const startLoadingMovies = () => {
    return {
        type: START_MOVIES_LOADING
    }
};

export const stopLoadingMovies = () => {
    return {
        type: STOP_MOVIES_LOADING
    }
};




import { accessToken } from "../constans/constans";

import {START_MOVIES_LOADING,
        MOVIES_LOADED,
        STOP_MOVIES_LOADING,
        ERROR_LOADING_MOVIES} from "../action-types";


export const getMovies = () => {
    debugger
    return (dispatch) => {
        dispatch(startLoadingMovies());
debugger
        fetch( `https://api.themoviedb.org/3/movie/550?api_key=${accessToken}`)
            .then(response => response.json())
            .then((data) => {

                debugger
                dispatch({
                    type: MOVIES_LOADED,
                    payload: data.result
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




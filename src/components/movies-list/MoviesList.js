import React, {useEffect} from "react";
import { connect } from 'react-redux';

import {getMovies} from "../../actions";




export function MoviesList (props) {
    const { moviesList=[], isLoading, getMovies } = props;
debugger

    useEffect(() => {
        getMovies();
    }, [])


    console.log(moviesList)

    return(

    <div>
         {moviesList}

    </div>

    )
}


const mapStateToProps = (store) => {
    const { moviesListReducer } = store;

    return {
        moviesList: moviesListReducer.moviesList,
        isLoading: moviesListReducer.isMoviesLoading
    };
};

const mapDispatchToProps = ({
    getMovies,
});



export default connect (mapStateToProps, mapDispatchToProps)(MoviesList);
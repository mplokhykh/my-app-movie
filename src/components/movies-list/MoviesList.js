import React, {useEffect} from "react";
import { connect } from 'react-redux';


import {getMovies} from "../../actions";
import {moviesListReducer} from "../../reducer/MoviesListReducer";



export function MoviesList (props) {
    const { moviesList=[], isLoading } = props;
debugger
    useEffect(() => {
        debugger
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
    const { moviesListReducer: {moviesList,isMoviesLoading } } = store;
    debugger
    return {
        moviesList: moviesList,
        isLoading: isMoviesLoading
    };
};

const mapDispatchToProps = ({
    getMovies,
});



export default connect (mapStateToProps, mapDispatchToProps)(MoviesList);
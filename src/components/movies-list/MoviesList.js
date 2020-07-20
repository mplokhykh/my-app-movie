import React, {useEffect} from "react";
import {connect} from 'react-redux';

import {getMovies} from "../../actions/moviesListActions";
import {Loading} from "../loading/Loading";
import {MovieCard} from "../movie-card/MovieCard";
import './MoviesList.scss'

export function MoviesList(props) {
    const {moviesList, isLoading, getMovies} = props;

    useEffect(() => {
        if (!moviesList.length) {
            getMovies && getMovies();
        }
    }, [])

    console.log(moviesList)

    return (
        <div className='container'>
            {isLoading && <Loading/>}
            {!isLoading && moviesList.map(item => {
                return (
                    <div>
                        <MovieCard key={item.id} info_movie={item}/>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (store) => {
    const {moviesListReducer} = store;
    return {
        moviesList: moviesListReducer.moviesList,
        isLoading: moviesListReducer.isMoviesLoading,
    };
};

const mapDispatchToProps = ({
    getMovies
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
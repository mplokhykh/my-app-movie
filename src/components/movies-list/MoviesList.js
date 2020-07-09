import React, {useEffect} from "react";
import { connect } from 'react-redux';

import { getMovies } from "../../actions/moviesListActions";
import { Loading } from "../loading/Loading";
import { PosterPreview } from "../poster-preview/PosterPreview";
import { MovieCard } from "../movie-card/MovieCard";

import './MoviesList.scss'
import GenresBadge from "../genre-badge/GenresBadge";

export function MoviesList (props) {
    const { moviesList, isLoading, getMovies } = props;

    useEffect(() => {
        if (!moviesList.length) {
            getMovies && getMovies();
        }
    }, [])

console.log(moviesList)

    return(
    <div className='Container'>
        {isLoading && <Loading/>}

        {!isLoading && moviesList.map(item => {
           const poster_path = item.poster_path
            const release_year = item.release_date.substring(0,4)
         return (
             <div className='ncn'>
                 <GenresBadge genre={item.genre_ids}/>
                 <PosterPreview poster_path={poster_path}/>
               <MovieCard key={item.id} movie_title={item.title} release_year={release_year} rating={item.vote_average}/>
             </div>
         )
        })}
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
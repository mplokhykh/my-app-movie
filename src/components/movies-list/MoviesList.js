import React, {useEffect} from "react";
import { connect } from 'react-redux';

import { getMovies } from "../../actions/moviesListActions";
import { Loading } from "../loading/Loading";
import { PosterPreview } from "../poster-preview/PosterPreview";
import { MovieCard } from "../movie-card/MovieCard";

export function MoviesList (props) {
    const { moviesList, isLoading, getMovies } = props;

    useEffect(() => {
        if (!moviesList.length) {
            getMovies && getMovies();
        }
    }, [])

console.log(moviesList)

    return(
    <div>
        {isLoading && <Loading />}
        {!isLoading && moviesList.map(item => {
           const poster_path = item.poster_path
            const release_year = item.release_date.substring(0,4)
            debugger
         return (
             <div>
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
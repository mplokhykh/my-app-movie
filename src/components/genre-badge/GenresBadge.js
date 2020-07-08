import React, {useEffect} from "react";
import {connect} from 'react-redux';

import { getGenres } from "../../actions/genreBadgeActions";
import { MovieCard } from "../movie-card/MovieCard";

function GenresBadge (props) {

 const { genresList, getGenres, genre } = props;

    useEffect(() => {
        if (!genresList.length) {
            getGenres && getGenres();
        }
    }, [])

    const ganres_movie = [];

        if(!!genresList && !!genre) {
            genre.forEach (item => genresList.some( value => {
                if (item === value.id){
                    ganres_movie.push(value.name)
                }
            }))
        }

    return <div>
            {!!ganres_movie && <MovieCard ganres_movie={ganres_movie}/>}
        </div>
}


const mapStateToProps = (store) => {
    const { genresBadgeReducer } = store;
    return {
        genresList: genresBadgeReducer.genresBadgeList,
        isLoading: genresBadgeReducer.isGenresLoading
    };
};
const mapDispatchToProps = ({
    getGenres,
});

export default connect (mapStateToProps, mapDispatchToProps)(GenresBadge);
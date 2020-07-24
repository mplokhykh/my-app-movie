import React from "react";
import {BrightThemeContext} from "../../context/BrightTheme";
import MoviesList from "../movies-list/MoviesList";
import GenresBadge from "../genre-badge/GenresBadge";
import './MoviesPage.scss'
import {MovieCard} from "../movie-card/MovieCard";


export function MoviesPage(props) {
    debugger
const {result_search_movie} = props;
    return (
        <BrightThemeContext.Consumer>
            {
                (value) => {
                    const {isBrightTheme} = value;
                    return (
                        <div className={`dark-theme ${isBrightTheme && 'bright-theme'}`}>
                            { !result_search_movie && (<GenresBadge/>,
                                <MoviesList/>)}
                            {!!result_search_movie && result_search_movie.map(item => <MovieCard info_movie={item}/>)}
                        </div>)
                }
            }
        </BrightThemeContext.Consumer>
    )
}
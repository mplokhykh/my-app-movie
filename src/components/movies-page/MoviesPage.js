import React from "react";
import {BrightThemeContext} from "../../context/BrightTheme";
import MoviesList from "../movies-list/MoviesList";
import GenresBadge from "../genre-badge/GenresBadge";
import './MoviesPage.scss'


export function MoviesPage(props) {

    return (
        <BrightThemeContext.Consumer>
            {
                (value) => {
                    const {isBrightTheme} = value;
                    return (
                        <div className={`dark-theme ${isBrightTheme && 'bright-theme'}`}>
                            <GenresBadge/>
                            <MoviesList/>
                        </div>)
                }
            }
        </BrightThemeContext.Consumer>
    )
}
import React, {useState} from "react";
import ReactDOM from 'react-dom';
import {BrightThemeContext} from "../../context/BrightTheme";
import {SearchResultsContext} from "../../context/SearchResultsContext";
import MoviesList from "../movies-list/MoviesList";
import GenresBadge from "../genre-badge/GenresBadge";
import './MoviesPage.scss'
import {MovieCard} from "../movie-card/MovieCard";


export function MoviesPage(props) {
    const [state, setState] = useState(false)

debugger



    return (
        <SearchResultsContext.Consumer>
            {
                (value) => {
                    const {isLoading, searchResults, error} = value;
                    if(!!searchResults){
                        setState(true)
                    }

                    return (
                        <BrightThemeContext.Consumer>
                            {
                                (value) => {
                                    const {isBrightTheme} = value;
                                    return (
                                        <div className={`dark-theme ${isBrightTheme && 'bright-theme'}`}>
                                            <MoviesList />
                                         <GenresBadge/>


                                            {
                                                !!state
                                                && !isLoading
                                                && !error
                                                && !!searchResults
                                                && searchResults.map(item => <MovieCard info_movie={item}/>)
                                            }
                                        </div>

                                )
                                }
                            }
                        </BrightThemeContext.Consumer>
                    )
                }
            }

        </SearchResultsContext.Consumer>
    )
}
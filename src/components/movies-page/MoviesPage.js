import React, {useState} from "react";
import {BrightThemeContext} from "../../context/BrightTheme";
import {SearchResultsContext} from "../../context/SearchResultsContext";
import MoviesList from "../movies-list/MoviesList";
import GenresBadge from "../genre-badge/GenresBadge";
import './MoviesPage.scss'
import {MovieCard} from "../movie-card/MovieCard";


export function MoviesPage(props) {
    const [state, setState] = useState(false)

    return (
        <SearchResultsContext.Consumer>
            {
                (value) => {
                    const {isLoading, searchResults, error, onRemoveResults} = value;
                    if (!!searchResults) {
                        setState(true)
                    }

                    return (
                        <BrightThemeContext.Consumer>
                            {
                                (value) => {
                                    const {isBrightTheme} = value;
                                    return (
                                        <div className={`dark-theme ${isBrightTheme && 'bright-theme'}`}>
                                            <div className='search-results'>
                                                  && <div className='not-found'>NOT FOUND</div>
                                                {
                                                    !!state
                                                    && !isLoading
                                                    && !error
                                                    && !!searchResults
                                                    && !!searchResults.length
                                                    && searchResults.map(item => <MovieCard info_movie={item}/>)
                                                }
                                            </div>
                                            <span onClick={onRemoveResults}><MoviesList/></span>
                                            <GenresBadge/>
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
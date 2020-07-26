import React, {useState} from "react";

import {SearchResultsContext} from "../../context/SearchResultsContext";

import './SearchResults.css'
import {MovieCard} from "../movie-card/MovieCard";
import {Loading} from "../loading/Loading";

export function SearchResults(props) {
    const [searchResults, setsearchResults] = useState([]);


    return (
        <SearchResultsContext.Consumer>
            {
                (value) => {

                    return (
                        <div>
                            {/*{*/}
                            {/*    isLoading && !searchResults && <Loading />*/}
                            {/*}*/}
                            {/*{*/}
                            {/*    !isLoading && !error && !!searchResults && searchResults.map(item => <MovieCard info_movie={item}/>)*/}
                            {/*}*/}
                            {/*{*/}
                            {/*    !isLoading && !error && !searchResults && <div>Not found</div>*/}
                            {/*}*/}

                        </div>)

                }
            }


        </SearchResultsContext.Consumer>
    )

}
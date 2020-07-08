import React from "react";

import { MovieCard } from '../movie-card/MovieCard'


export function PosterPreview (props) {

    const { poster_path='' } = props;
    const poster_url = `https://image.tmdb.org/t/p/w200${poster_path}`

    return <MovieCard poster_url={poster_url}/>
}


import React from "react";

import MoviesList from "../movies-list/MoviesList";
import GenresBadge from "../genre-badge/GenresBadge";

export function MoviesPage (props) {

    return  <div>
        <GenresBadge />
        <MoviesList />
    </div>
}
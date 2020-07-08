import React from "react";

import './MovieCard.scss'


export function MovieCard (props) {
debugger
const { movie_title, release_year, rating, poster_url, ganres_movie} = props;

    return (
        <div className='container'>
            <div>
               <div><img src={poster_url} className="container-image"/></div>
               {release_year} {movie_title} {rating}
                { !!ganres_movie && ganres_movie.map(item => <div>{item}</div>) }

            </div>

        </div>
    )
}
import React from "react";
import uniqueId from 'uniqid';

import './MovieCard.scss'


export function MovieCard (props) {
debugger
const { movie_title, release_year, rating, poster_url, ganres_movie} = props;

debugger
    return (
        <div className='container'>

            {!!poster_url && <img src={poster_url} className="container-image"/>}
            {!!release_year && <div>{release_year}</div>}
               {!!movie_title && <div>{movie_title}</div>}
            {!!rating && <div>{rating}</div>}
                { !!ganres_movie && ganres_movie.map(item => <div key={uniqueId()}>{item}</div>) }


        </div>
    )
}
import React from "react";


export function PosterPreview (props) {

    const { poster_path='', size_poster } = props;
    const poster_url = `https://image.tmdb.org/t/p/w${size_poster}${poster_path}`

    return <div> <img src={poster_url} className="container-image"/> </div>
}


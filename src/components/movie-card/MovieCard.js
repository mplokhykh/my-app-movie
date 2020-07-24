import React from "react";
import { Link } from 'react-router-dom';
import {BrightThemeContext} from "../../context/BrightTheme";
import { withRouter } from 'react-router';
import { PosterPreview } from "../poster-preview/PosterPreview";
import IdentifyGenres from "../identify-genres/IdentifyGenres";

import './MovieCard.scss'


function MovieCardComponent (props) {

const { info_movie, match: {url} } = props;
const { poster_path, release_date, genre_ids, title, id } = info_movie
debugger
    const release_year = release_date.substring(0,4)
    const size_poster = 200;


    return (
        <BrightThemeContext.Consumer>
            {
                (value) => {
                    const {isBrightTheme} = value;
                    return (<Link to={`${url}/${id}`} className="link">
                        <div className='card'>
                            <PosterPreview poster_path={poster_path} size_poster={size_poster}/>
                            <div className='text'>
                                <div className='text-genres'>{release_year},
                                    <IdentifyGenres genre_ids={genre_ids}/>
                                </div>
                                <div className={`text-title ${isBrightTheme && 'bright-theme'}`}>{title}</div>
                            </div>
                        </div>
                    </Link>)
                }
            }

        </BrightThemeContext.Consumer>


    )
}

export const MovieCard = withRouter(MovieCardComponent);
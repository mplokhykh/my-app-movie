import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BackArrow from '../../image/BackArrow/back.png'
import Star from '../../image/Star/start.png'
import {BrightThemeContext} from "../../context/BrightTheme";

import {PosterPreview} from "../poster-preview/PosterPreview";
import IdentifyGenres from "../identify-genres/IdentifyGenres";

import './MovieDetailPage.scss'


function MovieDetailPage(props) {
    debugger
    const {match: {params: {id}}, moviesList} = props;

    const detail_info = moviesList.filter(item => item.id === +id);
    const detail_info_movie = detail_info[0];

    const {poster_path, title, overview, genre_ids, release_date, popularity, vote_average, vote_count} = detail_info_movie;
    const size_poster = 300;

    return (
<BrightThemeContext.Consumer>
    {
        (value) => {
            const {isBrightTheme} = value;
            return (
                <div className={`card-movie ${isBrightTheme && 'bright-theme'}`}>

                    <div className='box'>
                        <Link to={"/movies"}>
                            <img className={`button-back ${isBrightTheme && 'bright-theme'}`} src={BackArrow}/>
                        </Link>
                        <div className="card-movie-detail">
                            <PosterPreview poster_path={poster_path} size_poster={size_poster}/>
                            <div className={`card-movie-detail-text ${isBrightTheme && 'bright-theme'}`}>
                                <div className='card-movie-detail-text-title'>
                                    {title}
                                </div>
                                <div className="card-movie-detail-text-genres">
                                    <IdentifyGenres genre_ids={genre_ids}/>
                                </div>
                                <div className='rating'>
                                    <img className='rating-star' src={Star}/>
                                    <div className='rating-vote'>
                                        <div className='rating-vote-average'>{vote_average}</div>
                                        <div className='rating-vote-count'>{vote_count} vote</div>
                                    </div>
                                </div>
                                <div className="card-movie-detail-text-overview">{overview}</div>
                                <div className="card-movie-detail-text-extra">
                                    {`Release date: ${release_date}`}
                                </div>
                                <div className="card-movie-detail-text-extra">
                                    {`Popularity: ${popularity}`}
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            )
        }
    }

</BrightThemeContext.Consumer>
    )
}

const mapStateToProps = (store) => {
    const {moviesListReducer} = store;
    return {
        moviesList: moviesListReducer.moviesList,
    };
};

export default connect(mapStateToProps)(MovieDetailPage);
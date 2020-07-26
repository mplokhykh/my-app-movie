import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';

import {getMovies } from "../../actions/moviesListActions";
import {Loading} from "../loading/Loading";
import {MovieCard} from "../movie-card/MovieCard";
import './MoviesList.scss'

export function MoviesList(props) {
    const {moviesList, isLoading, getMovies, totalMoviesPage, currentPage} = props;
debugger
    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(10);

    useEffect(() => {
        if (!moviesList.length) {
            getMovies && getMovies();
        }
    }, [])

    const onAddNextPages = () => {
        if (endPage + 10 <= totalMoviesPage) {
            setStartPage(startPage + 10);
            setEndPage(endPage + 10)
        }
    }

    const onRemovePages = () => {
        if (endPage - 10 > 0) {
            setStartPage(startPage - 10);
            setEndPage(endPage - 10)
        }
    }

    const pages = [];

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const onPageChanged = (page) => {

        getMovies(page)
    }

    return (
        <div className='container'>
            {isLoading && <Loading/>}
            {!isLoading && moviesList.map(item => {
                return (
                    <div>
                        <MovieCard key={item.id} info_movie={item}/>
                    </div>
                )
            })}
            {!isLoading &&  <div className="pagination">
                <div onClick={onRemovePages} className='pagination-btn'>Previous</div>
                {
                    pages.map(item => <div key={item} className={`pagination-pages ${currentPage === item && 'activePage'}`} onClick={() => {
                        onPageChanged(item)
                    }}>{item}</div>)
                }
                <div onClick={onAddNextPages} className='pagination-btn'>Next</div>
            </div> }

        </div>
    )
}

const mapStateToProps = (store) => {
    const {moviesListReducer} = store;
    return {
        moviesList: moviesListReducer.moviesList,
        isLoading: moviesListReducer.isMoviesLoading,
        totalMoviesPage: moviesListReducer.totalMoviesPage,
        currentPage: moviesListReducer.currentPage
    };
};

const mapDispatchToProps = ({
    getMovies,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
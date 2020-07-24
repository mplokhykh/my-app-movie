import React, {useState} from "react";
import {api_key} from "../../constans/constans";
import {MoviesPage} from "../movies-page/MoviesPage";

import './Search.css'

export function Search(props) {

    debugger
    const [searchInfo, setSearchInfo] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('')

    const loadSearch = async (searchInfo) => {
        setLoading(true);
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInfo}`);
        if (response.ok) {
            let json = await response.json();
            const {results} = json;
            if (Array.isArray(results)) {
                setLoading(false);
                setSearchResults(results);
            }
        } else {
            setLoading(false);
            setError('error')
        }
    };

    const onSearchInfo = (event) => {
        debugger
        const request_array = event.target.value.split(',')
        setSearchInfo(request_array);
    };
    debugger
    const onSubmit = (e) => {
        e.preventDefault();
        loadSearch(searchInfo);
    };

    console.log(searchResults);

    return (
        <div>
            <form action="" method="post" className="search" onSubmit={onSubmit}>
                <input type="search" name="" placeholder="Search" className="input" onChange={onSearchInfo}/>
                <input type="submit" name="" value="" className="submit"/>
            </form>

            {
                !isLoading
                && !!searchResults
                && !error
                && searchResults
                && <MoviesPage result_search_movie={searchResults}/>
            }
        </div>
    )

}
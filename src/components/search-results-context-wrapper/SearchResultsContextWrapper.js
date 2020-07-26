import React, {useState} from 'react';
import {SearchResultsContext} from "../../context/SearchResultsContext";
import {api_key} from "../../constans/constans";


export function SearchResultsContextWrapper(props) {
    const {children} = props;
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
            } else {
                setLoading(false);
                setError('error')
            }
        }
    };

        const onSearchInfo = (event) => {
            const request_array = event.target.value.split(',')
            setSearchInfo(request_array);

        };

        const onSubmit = (e) => {
            e.preventDefault();
            loadSearch(searchInfo)
        };

        const onRemoveResults = (e) => {
            setSearchResults('');
        }


        return (
            <SearchResultsContext.Provider value={{
                onSubmit,
                onSearchInfo,
                onRemoveResults,
                isLoading,
                searchResults,
                error
            }}>

                {children}
            </SearchResultsContext.Provider>
        );

    }
import React from "react";
import { connect } from 'react-redux';


function IdentifyGenres (props) {
    const {genresList, genre_ids} = props;

    const genres = [];
    genre_ids.forEach (item => genresList.some( value => {
        if(item === value.id){
            genres.push(value)
        }
    }))

    return <span> {genres.map(item => <span key={item.id}>{`${item.name}, `}</span>)} </span>
}

const mapStateToProps = (store) => {
    const { genresBadgeReducer } = store;
    return {
        genresList: genresBadgeReducer.genresBadgeList
    };
};

export default connect (mapStateToProps)(IdentifyGenres);
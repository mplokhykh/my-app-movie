import React, {useEffect} from "react";
import {connect} from 'react-redux';
import { getGenres } from "../../actions/genreBadgeActions";
import {Loading} from "../loading/Loading";



function GenresBadge (props) {

 const { genresList, getGenres } = props;

    useEffect(() => {
        if (!genresList.length) {
            getGenres && getGenres();
        }
    }, [])




    return null
}


const mapStateToProps = (store) => {
    const { genresBadgeReducer } = store;
    return {
        genresList: genresBadgeReducer.genresBadgeList,
    };
};
const mapDispatchToProps = ({
    getGenres,
});

export default connect (mapStateToProps, mapDispatchToProps)(GenresBadge);
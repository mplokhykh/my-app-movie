import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from "./store";

import {Header} from "./components/header/Header";
import {MoviesPage} from "./components/movies-page/MoviesPage";
import MovieDetailPage from "./components/movie-detail-page/MovieDetailPage";
import {BrightThemeWrapper} from "./components/bright-theme-wrapers/BrightThemeWrapper";
import {SearchResultsContextWrapper} from "./components/search-results-context-wrapper/SearchResultsContextWrapper";


import './App.css';



function App() {
    return (
        <SearchResultsContextWrapper>
        <BrightThemeWrapper>
            <Provider store={store}>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/movies" component={MoviesPage} exact/>
                        <Route path="/movies/:id"
                               render={(routerProps) => {
                                   return (<MovieDetailPage {...routerProps} />);
                               }}
                        />



                        <Redirect from="/" to="/movies" exact/>
                    </Switch>
                </Router>
            </Provider>
        </BrightThemeWrapper>
        </SearchResultsContextWrapper>
    );

}

export default App;

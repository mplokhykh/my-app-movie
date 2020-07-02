import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store";

import { Header } from "./components/header/Header";
import { MoviesList } from "./components/movies-list/MoviesList";


import './App.css';

function App() {
  return (
      <Provider store={store}>
      <Router>
        <Header/>
        <Switch>

            <MoviesList/>
        </Switch>
      </Router>
      </Provider>
  );
}

export default App;

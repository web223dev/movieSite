import { combineReducers } from 'redux';
import home from 'modules/home';
import films from 'modules/films';
import moviedetail from 'modules/moviedetail';
import similar from 'modules/moviedetail/similar';
import search_movie from 'modules/home/searchmovie';

const reducers = combineReducers({
    home,
    films,
    moviedetail,
    similar,
    search_movie
})

export default reducers;
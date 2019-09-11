import { combineReducers } from 'redux';
import home from 'modules/home';
import films from 'modules/films';
import dramas from 'modules/dramas';
import moviedetail from 'modules/moviedetail';
import tvdetail from 'modules/tvdetail';
import similartv from 'modules/tvdetail/similartv';
import similar from 'modules/moviedetail/similar';
import search_movie from 'modules/home/searchmovie';
import watch_movie from 'modules/watchmovie';

const reducers = combineReducers({
    home,
    films,
    dramas,
    moviedetail,
    tvdetail,
    similartv,
    similar,
    search_movie,
    watch_movie
})

export default reducers;
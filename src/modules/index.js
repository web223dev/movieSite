import { combineReducers } from 'redux';
import home from 'modules/home';
import films from 'modules/films';
import moviedetail from 'modules/moviedetail';

const reducers = combineReducers({
    home,
    films,
    moviedetail
})

export default reducers;
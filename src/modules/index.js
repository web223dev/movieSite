import { combineReducers } from 'redux';
import home from 'modules/home';
import films from 'modules/films';
import moviedetail from 'modules/moviedetail';
import similar from 'modules/moviedetail/similar';

const reducers = combineReducers({
    home,
    films,
    moviedetail,
    similar
})

export default reducers;
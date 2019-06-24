import { combineReducers } from 'redux';
import home from 'modules/home';
import films from 'modules/films';

const reducers = combineReducers({
    home,
    films
})

export default reducers;
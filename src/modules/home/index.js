import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './type';
import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

let id = 0;

const initialState = Map({
    pending: false,
    error: false,
    data: List()
})

export default handleActions({
    [GET_MOVIE_PENDING]: (state, action) => state.set('pending', true).set('error', false),
    [GET_MOVIE_SUCCESS]: (state, { payload: data }) => {             
        const item = Map({ id: id++, data });
        return state.update('data', data => data.push(item)).set('pending', false);
    },
    [GET_MOVIE_FAILURE]: (state, action) => state.set('pending', false).set('error', true)
}, initialState)
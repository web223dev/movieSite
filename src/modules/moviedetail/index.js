import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './type';
import { handleActions } from 'redux-actions';

const initialState = {
    pending: false,
    error: false,
    data: []
}

export default handleActions({
    [GET_MOVIE_PENDING]: (state, action) => ({ ...state, pending: true, error: false}),
    [GET_MOVIE_SUCCESS]: (state, action) => ({ ...state, data: action.payload, pending: false}),
    [GET_MOVIE_FAILURE]: (state, action) => ({ ...state, pending: false, error: true})
},initialState)
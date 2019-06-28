import { GET_DRAMA_PENDING, GET_DRAMA_SUCCESS, GET_DRAMA_FAILURE } from './type';
import { handleActions } from 'redux-actions';

const initialState = {
    pending: false,
    error: false,
    data: []
}

export default handleActions({
    [GET_DRAMA_PENDING]: (state, action) => ({ ...state, pending: true, error: false}),
    [GET_DRAMA_SUCCESS]: (state, action) => ({ ...state, data: action.payload, pending: false}),
    [GET_DRAMA_FAILURE]: (state, action) => ({ ...state, pending: false, error: true})
},initialState)
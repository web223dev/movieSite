import axios from 'axios';
import { GET_SIMILAR_DRAMA_PENDING, GET_SIMILAR_DRAMA_SUCCESS, GET_SIMILAR_DRAMA_FAILURE } from './type';
import { handleActions } from 'redux-actions';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getSimilarTV_API(tv_id) {
    return axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${apiKey}&language=en-US&page=1`)
}

export const requestTV = () => ({
    type: GET_SIMILAR_DRAMA_PENDING
})

export const receiveTV = data => ({
    type: GET_SIMILAR_DRAMA_SUCCESS,
    payload: data
})

export const falidReceiveTV = error => ({
    type: GET_SIMILAR_DRAMA_FAILURE,
    payload: error
})

export const getSimilarTV = (id) => dispatch => {
    dispatch(requestTV());
    return getSimilarTV_API(id).then(res => {
        dispatch(receiveTV(res.data))
    })
        .catch(err => {
            dispatch(falidReceiveTV(err))
        })
}

const initialState = {
    pending: false,
    error: false,
    data: []
}

export default handleActions({
    [GET_SIMILAR_DRAMA_PENDING]: (state, action) => ({ ...state, pending: true, error: false }),
    [GET_SIMILAR_DRAMA_SUCCESS]: (state, action) => ({ ...state, data: action.payload, pending: false }),
    [GET_SIMILAR_DRAMA_FAILURE]: (state, action) => ({ ...state, pending: false, error: true })
}, initialState)
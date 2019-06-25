import axios from 'axios';
import { GET_SMOVIE_PENDING, GET_SMOVIE_SUCCESS, GET_SMOVIE_FAILURE } from './type';
import { handleActions } from 'redux-actions';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getSimilarMovieAPI(id) {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`)
}

export const requestMovie = () => ({
  type: GET_SMOVIE_PENDING
})

export const receiveMovie = data => ({
  type: GET_SMOVIE_SUCCESS,
  payload: data
})

export const falidReceiveMovie = error => ({
  type: GET_SMOVIE_FAILURE,
  payload: error
})

export const getSimilarMovie = (id) => dispatch => {
  dispatch(requestMovie());
  return getSimilarMovieAPI(id).then(res => {
    dispatch(receiveMovie(res.data))
  })
  .catch(err => {
    dispatch(falidReceiveMovie(err))
  })
}

const initialState = {
    pending: false,
    error: false,
    data: []
}

export default handleActions({
    [GET_SMOVIE_PENDING]: (state, action) => ({ ...state, pending: true, error: false}),
    [GET_SMOVIE_SUCCESS]: (state, action) => ({ ...state, data: action.payload, pending: false}),
    [GET_SMOVIE_FAILURE]: (state, action) => ({ ...state, pending: false, error: true})
},initialState)
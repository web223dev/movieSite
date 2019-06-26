import axios from 'axios';
import { GET_SEARCHED_MOVIE_PENDING, GET_SEARCHED_MOVIE_SUCCESS, GET_SEARCHED_MOVIE_FAILURE } from './type';
import { handleActions } from 'redux-actions';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getSearchedMovieAPI(title) {
  return axios.get(`https://api.themoviedb.org/3/search/multi?query=${title}&api_key=${apiKey}`)
}

export const requestMovie = () => ({
  type: GET_SEARCHED_MOVIE_PENDING
})

export const receiveMovie = data => ({
  type: GET_SEARCHED_MOVIE_SUCCESS,
  payload: data
})

export const falidReceiveMovie = error => ({
  type: GET_SEARCHED_MOVIE_FAILURE,
  payload: error
})

export const getSearchedMovie = (title) => dispatch => {
  dispatch(requestMovie());
  return getSearchedMovieAPI(title).then(res => {
    dispatch(receiveMovie(res.data))
  })
  .catch(err => {
    dispatch(falidReceiveMovie(err))
  })
}

const initialState = {
    pending: false,
    error: false,
    data_loaded: false,
    data: []
}

export default handleActions({
    [GET_SEARCHED_MOVIE_PENDING]: (state, action) => ({ ...state, pending: true, error: false, data_loaded: false}),
    [GET_SEARCHED_MOVIE_SUCCESS]: (state, action) => ({ ...state, data: action.payload, pending: false, data_loaded: true}),
    [GET_SEARCHED_MOVIE_FAILURE]: (state, action) => ({ ...state, pending: false, error: true, data_loaded: false})
},initialState)
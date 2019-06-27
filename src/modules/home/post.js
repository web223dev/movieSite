import axios from 'axios';
import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './type';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getMovieAPI(keyword) {
  return axios.get(`https://api.themoviedb.org/3/movie/${keyword}?api_key=${apiKey}&language=en-US&page=1`)
}

export const requestMovie = () => ({
  type: GET_MOVIE_PENDING
})

export const receiveMovie = data => ({
  type: GET_MOVIE_SUCCESS,
  payload: data
})

export const falidReceiveMovie = error => ({
  type: GET_MOVIE_FAILURE,
  payload: error
})

export const getMovie = (url) => dispatch => {
  dispatch(requestMovie());
  return getMovieAPI(url).then(res => {
    dispatch(receiveMovie(res.data))
  })
  .catch(err => {
    dispatch(falidReceiveMovie(err))
  })
}
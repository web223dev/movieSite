import axios from 'axios';
import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './type';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getMovieDetailAPI(id) {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`)
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

export const getMovieDetail = (id) => dispatch => {
  dispatch(requestMovie());
  return getMovieDetailAPI(id).then(res => {
    dispatch(receiveMovie(res.data))
  })
  .catch(err => {
    dispatch(falidReceiveMovie(err))
  })
}
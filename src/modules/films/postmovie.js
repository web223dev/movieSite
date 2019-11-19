import axios from 'axios';
import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './type';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getPopularMovieAPI(page) {
  let baseUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  return axios.get(baseUrl)
  // return axios.get(`https://api.themoviedb.org/3/discover/tv?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${apiKey}`)
}

export const requestMovie = (page) => ({
  type: GET_MOVIE_PENDING,
  payload: page
})

export const receiveMovie = data => ({
  type: GET_MOVIE_SUCCESS,
  payload: data
})

export const falidReceiveMovie = error => ({
  type: GET_MOVIE_FAILURE,
  payload: error
})

export const getPopularMovie = (page) => dispatch => {
  dispatch(requestMovie(page));
  return getPopularMovieAPI(page).then(res => {
    dispatch(receiveMovie(res.data))
  })
    .catch(err => {
      dispatch(falidReceiveMovie(err))
    })
}
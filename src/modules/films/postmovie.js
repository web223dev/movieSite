import axios from 'axios';
import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './type';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getPopularMovieAPI(page) {
  let todayDate = new Date();
  let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
  let oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate(); 
  return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
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
  dispatch(requestMovie());
  return getPopularMovieAPI(page).then(res => {
    dispatch(receiveMovie(res.data))
  })
    .catch(err => {
      dispatch(falidReceiveMovie(err))
    })
}
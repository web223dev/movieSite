import axios from 'axios';
import { GET_DRAMA_PENDING, GET_DRAMA_SUCCESS, GET_DRAMA_FAILURE } from './type';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getPopularDramaAPI(page) {
  let baseUrl = `https://api.themoviedb.org/3/discover/tv?with_genres=18&sort_by=popularity.desc&vote_count.gte=10&page=${page}&api_key=${apiKey}`
  return axios.get(baseUrl)
}
export const requestTV = (page) => ({
  type: GET_DRAMA_PENDING,
  payload: page
})

export const receiveTV = data => ({
  type: GET_DRAMA_SUCCESS,
  payload: data
})

export const falidReceiveTV = error => ({
  type: GET_DRAMA_FAILURE,
  payload: error
})

export const getPopularDrama = (page) => dispatch => {
  dispatch(requestTV(page));
  return getPopularDramaAPI(page).then(res => {    
    dispatch(receiveTV(res.data))
  })
    .catch(err => {
      dispatch(falidReceiveTV(err))
    })
}
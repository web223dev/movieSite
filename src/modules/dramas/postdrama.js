import axios from 'axios';
import { GET_DRAMA_PENDING, GET_DRAMA_SUCCESS, GET_DRAMA_FAILURE } from './type';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getPopularDramaAPI() {
  return axios.get(`https://api.themoviedb.org/3/discover/tv?with_genres=18&sort_by=popularity.desc&vote_count.gte=10&api_key=${apiKey}`)
}
export const requestTV = () => ({
  type: GET_DRAMA_PENDING
})

export const receiveTV = data => ({
  type: GET_DRAMA_SUCCESS,
  payload: data
})

export const falidReceiveTV = error => ({
  type: GET_DRAMA_FAILURE,
  payload: error
})

export const getPopularDrama = () => dispatch => {
  dispatch(requestTV());
  return getPopularDramaAPI().then(res => {
    dispatch(receiveTV(res.data))
  })
    .catch(err => {
      dispatch(falidReceiveTV(err))
    })
}
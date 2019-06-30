import axios from 'axios';
import { GET_DRAMA_PENDING, GET_DRAMA_SUCCESS, GET_DRAMA_FAILURE } from './type';

const apiKey = '87dfa1c669eea853da609d4968d294be';

function getDramaDetailAPI(tv_id) {
  return axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${apiKey}&language=en-US&append_to_response=credits&page=1`)
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

export const getDramaDetail = (id) => dispatch => {
  dispatch(requestTV());
  return getDramaDetailAPI(id).then(res => {
    dispatch(receiveTV(res.data))
  })
  .catch(err => {
    dispatch(falidReceiveTV(err))
  })
}
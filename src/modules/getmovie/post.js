import axios from 'axios';
import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './type';
import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// const apiKey = '87dfa1c669eea853da609d4968d294be';

function getMovieAPI(url) {  
  return axios.get(`https://api.themoviedb.org/3/${url}/&api_key=87dfa1c669eea853da609d4968d294be`)
}

export const getMovie = (url) => dispatch => {    
  // dispatch({ type: GET_MOVIE_PENDING });  
  return getMovieAPI(url).then(res => {       
    dispatch({
      type: GET_MOVIE_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    // dispatch({
    //   type: GET_MOVIE_FAILURE,
    //   payload: err
    // })
    console.error(err)
  })
}

let id = 0;

const initialState = Map({
  // pending: false,
  // error: false,
  data: List()
})

export default handleActions({
  // [GET_MOVIE_PENDING]: (state, action) => state.set('pending', true).set('error', false),
  [GET_MOVIE_SUCCESS]: (state, {payload: data}) => {  
    const item = Map({id: id++, data})
    // return state.update('data', data => data.push(item)).set('pending', false)    
    // return state.update('data', data => data)    
    return state.set('data', data)
  },
  // [GET_MOVIE_FAILURE]: (state, action) => state.update('pending', false).update('error', true)
}, initialState)

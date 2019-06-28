import { GET_DRAMA_PENDING, GET_DRAMA_SUCCESS, GET_DRAMA_FAILURE, GET_DRAMA_EPISODES_SUCCESS } from './type';
import { handleActions } from 'redux-actions';

const initialState = {
    pending: false,
    error: false,
    data: [],
    episodes_count: [] 
}

export default handleActions({
    [GET_DRAMA_PENDING]: (state, action) => ({ ...state, pending: true, error: false}),
    [GET_DRAMA_SUCCESS]: (state, action) => ({ ...state, data: action.payload, pending: false}),
    [GET_DRAMA_EPISODES_SUCCESS]: (state, action) => {
        if(state.episodes_count.length > 20) {
            return {...state, episodes_count: [], pending: false}
        } else {
            return {...state, episodes_count: state.episodes_count.concat([action.payload]), pending: false}
        }        
    },
    [GET_DRAMA_FAILURE]: (state, action) => ({ ...state, pending: false, error: true})
},initialState)
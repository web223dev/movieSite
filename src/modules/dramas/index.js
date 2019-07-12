import { GET_DRAMA_PENDING, GET_DRAMA_SUCCESS, GET_DRAMA_FAILURE } from './type';
import { handleActions } from 'redux-actions';

const initialState = {
    pending: false,
    error: false,
    data: undefined
}

const tvSuccessReducer = (state, action) => {    
    const existingTVs = state.data ? (action.payload.page !== state.data.page) ? state.data.results : [] : [];
    // Create a new state object to be returned
    // When creating the new state, be sure to include any
    // existing properties we want to persist
    return {
        ...state,
        pending: false,
        data: {
            ...action.payload,
            results: [
                ...existingTVs,
                ...action.payload.results
            ]
        }
    };
}

export default handleActions({
    [GET_DRAMA_PENDING]: (state, action) => ({ ...state, pending: true, error: false}),
    [GET_DRAMA_SUCCESS]: tvSuccessReducer,
    [GET_DRAMA_FAILURE]: (state, action) => ({ ...state, pending: false, error: true})
},initialState)
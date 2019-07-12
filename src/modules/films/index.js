import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './type';
import { handleActions } from 'redux-actions';

const initialState = {
    pending: false,
    error: false,
    data: undefined
}

const movieSuccessReducer = (state, action) => {
    const existingMovies = state.data ? (action.payload.page !== state.data.page) ? state.data.results : [] : [];
    // Create a new state object to be returned
    // When creating the new state, be sure to include any
    // existing properties we want to persist
    return {
        ...state,
        pending: false,
        data: {
            ...action.payload,
            results: [
                ...existingMovies,
                ...action.payload.results
            ]
        }
    };
}

export default handleActions({
    [GET_MOVIE_PENDING]: (state, action) => ({ ...state, pending: true, error: false }),
    [GET_MOVIE_SUCCESS]: movieSuccessReducer,
    [GET_MOVIE_FAILURE]: (state, action) => ({ ...state, pending: false, error: true })
}, initialState)
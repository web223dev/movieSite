import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

//Actions
const LOG_TIME = "watch/START_TIME";

//Action Creator
export const logTime = createAction(LOG_TIME, ({current_time, duration, title}) => ({current_time, duration, title}));

const initialState = Map({
    loglists: List()
})

export default handleActions({
    [LOG_TIME]: (state, action) => {
        const item = Map({ 
            title: action.payload.title,
            currrentTime: action.payload.current_time,
            duration: action.payload.duration            
        });
        return state.update('loglists', loglists => loglists.push(item));
    }
}, initialState);
import { combineReducers } from 'redux';
import eventListReducer from './eventListReducer';
import eventDetailReducer from './eventDetailReducer';
console.log(eventListReducer)
export default combineReducers({
  eventList: eventListReducer,
  eventDetail: eventDetailReducer
});
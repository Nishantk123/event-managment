import { combineReducers } from 'redux';
import eventListReducer from './eventListReducer';
import eventDetailReducer from './eventDetailReducer';
export default combineReducers({
  eventList: eventListReducer,
  eventDetail: eventDetailReducer
});
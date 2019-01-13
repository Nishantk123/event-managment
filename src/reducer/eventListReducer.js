import { GET_EVENT_LIST } from '../action/type';

const initialState = {};

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
  
    case GET_EVENT_LIST:
      return action.payload;
    default:
      return state;
  }
}
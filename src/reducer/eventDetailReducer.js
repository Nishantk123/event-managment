import { GET_EVENT_DETAIL } from '../action/type';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
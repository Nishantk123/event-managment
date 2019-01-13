import axios from 'axios';
import { GET_ERRORS, GET_EVENT_LIST, GET_EVENT_DETAIL } from './type';
//Get Event List 
export const getEventList = (userData, history) => dispatch => {
    axios
    .post('https://api.kloh.in/kloh/external/v1/activity/list', userData)
  .then(res =>{ 
    dispatch({
      type: GET_EVENT_LIST,
      payload: res.data.response.results
    });
  })
};

//Get Event Detail 
export const getEventDetail = (userData, history) => dispatch => {
  var ActivityId="AID190103162901977JHU96OFV784PEF9RM4"
    axios
    .get( 'https://api.kloh.in/kloh/external/v1/activity/' + userData)
  .then(res =>{ 
    dispatch({
        type: GET_EVENT_DETAIL,
        payload: res.data.response
      });
  })
};


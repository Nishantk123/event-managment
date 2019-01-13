import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';
import EventList from './components/EventList'
import EventDetail from './components/EventDetail';

class App extends Component {
  componentWillMount(){
//     var dataset= {
//     "location": {
//       "lat": 12.926031,
//       "lon": 77.676246
//     }
    
//     }
    
//     axios
//   .post
//   ('https://api.kloh.in/kloh/external/v1/activity/list', dataset)
// .then(res =>{ 
//   console.log(res)
  
// })
  }
  render() {
    return (
      <Provider store={store}>
        <Router> 
          <div className="App">
          <Route exact path="/" component={EventList} />
          {/* <EventList /> */}
          <Route exact path="/eventdetail" component={EventDetail} />
          {/* <EventDetail></EventDetail> */}
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { getEventList } from '../action/eventActions';
import { connect } from 'react-redux';
import EventCard from './EventCard'
import NavBar from './NavBar'
import { withRouter } from 'react-router-dom';
class EventList extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    componentWillMount(){
        var dataset= {
            "location": {
              "lat": 12.926031,
              "lon": 77.676246
            }
            
            }
        this.props.getEventList(dataset, this.props.history);
    }
    render(){
        var EventDataList =[];
        if(this.props.list&&this.props.list.length>0){
            this.props.list.forEach((object, index) => {
                EventDataList.push(
                    <div className="col-sm-4 event-card">
                        <EventCard 
                        title = {object.title}
                        eventTimming = {object.activityTime&&object.activityTime.activityDateString?object.activityTime.activityDateString:""}
                        eventLocation = {object.location&&object.location&&object.location.address?object.location.address:""}
                        tags = {object.tags}
                        image ={object.imageUrl}
                        activityId= {object.activityId}
                        />

                    </div>
                )
            });
        }
       
        return(
            <div className= "event-list-container">
            {/* header-section start here */}
                <div className="event-list-header-section">
                    <NavBar />
                    <div className="row top-row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-3 event-header-message">
                            Only Few Tickets Remaining Join the Events happing today
                        </div>
                    </div>
                    <div className="row top-row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-3 event-header-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                </div>

                {/* header section End here */}
                {/* Filter by date start here */}
                <div className="event-filter-container">
                    <div className="row top-row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10 ">
                        <div className="row running-event">
                        Events happing this week
                        </div>
                        <div className="row event-button-list">
                            <div className="col-sm-2" >
                                <button className="event-button"> Today</button>
                            </div>
                            <div className="col-sm-2">
                                <button className="event-button"> Tomorrow</button>
                            </div>
                            <div className="col-sm-2">
                                <button className="event-button"> Weekend</button>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                {/* Filter by date End here */}
            
                {/* <EventCard /> */}

                {/* Event List Container Start from here */}
                <div className="event-filter-container">
                    <div className="row top-row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 ">
                            <div className="row">
                                {EventDataList}
                            </div>
                        </div>

                    </div>
                </div>
                 {/* Event List Container End from here */}
            </div>
        )
    }
}
const mapStateToProps = state => (
    {
    list:state.eventList
  }
  );
  
  export default connect(mapStateToProps, {getEventList})(withRouter(EventList));